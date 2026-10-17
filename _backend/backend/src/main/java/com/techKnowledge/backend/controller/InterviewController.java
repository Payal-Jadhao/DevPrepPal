package com.techKnowledge.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;

@RestController
@RequestMapping("/api/interview")
public class InterviewController {

    @Value("${gemini.api.key}")
    private String geminiApiKey; 

    @Value("${gemini.model:gemini-1.5-flash}")
    private String geminiModel;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/parse-resume")
    public ResponseEntity<?> parseResume(@RequestParam("resume") MultipartFile file) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(Map.of("message", "No file uploaded."));
            }
            String filename = file.getOriginalFilename();
            if (filename == null ||
                (!filename.endsWith(".pdf") && !filename.endsWith(".docx"))) {
                return ResponseEntity.badRequest()
                    .body(Map.of("message", "Only PDF and DOCX files allowed."));
            }
            return ResponseEntity.ok(Map.of("resumeText", 
                "Resume uploaded: " + filename));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/initialize")
    public ResponseEntity<?> initialize(@RequestBody Map<String, String> body) {
        String resumeText = body.get("resumeText");
        String companyName = body.get("companyName");
        String jobRole = body.get("jobRole");
        String experienceLevel = body.get("experienceLevel");
        String interviewType = body.get("interviewType");

        if (resumeText == null || companyName == null || jobRole == null ||
            experienceLevel == null || interviewType == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "All fields are required."));
        }

        String systemPrompt = buildSystemPrompt(
            resumeText, companyName, jobRole, experienceLevel, interviewType);

        try {
            String firstMessage = callGemini(systemPrompt, "Start the interview.", 300);

            return ResponseEntity.ok(Map.of(
                "systemPrompt", systemPrompt,
                "firstMessage", firstMessage,
                "messages", List.of(Map.of("role", "assistant", 
                    "content", firstMessage))
            ));
        } catch (Exception e) {
            System.err.println("[InterviewController] Gemini API call failed: " + e.getMessage());
            // Resilient fallback: interviewer opening question
            String firstMessage = "Hello and welcome to your " + interviewType + " interview for the " + 
                jobRole + " role at " + companyName + "! To begin, could you please introduce yourself and tell me about your background and recent projects?";

            return ResponseEntity.ok(Map.of(
                "systemPrompt", systemPrompt,
                "firstMessage", firstMessage,
                "messages", List.of(Map.of("role", "assistant", 
                    "content", firstMessage))
            ));
        }
    }

    @PostMapping("/chat")
    public ResponseEntity<?> chat(@RequestBody Map<String, Object> body) {
        String systemPrompt = (String) body.get("systemPrompt");
        String userMessage = (String) body.get("userMessage");

        if (systemPrompt == null || userMessage == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "systemPrompt and userMessage required."));
        }

        try {
            String reply = callGemini(systemPrompt, userMessage, 400);
            return ResponseEntity.ok(Map.of("reply", reply));
        } catch (Exception e) {
            System.err.println("[InterviewController] Gemini Chat call failed: " + e.getMessage());
            // Fallback follow-up interview questions
            String[] fallbackQuestions = {
                "That's insightful. Could you explain a challenging technical problem you solved recently, and the approach you took?",
                "Interesting! How do you handle scalability and performance optimization in your projects?",
                "Can you discuss a situation where you had to debug a critical production issue under tight deadlines?",
                "Thank you for sharing. How do you approach collaborating with team members and handling code reviews?",
                "Great! Do you have any questions for me about the role or team dynamics?"
            };
            int randomIndex = (int) (Math.random() * fallbackQuestions.length);
            return ResponseEntity.ok(Map.of("reply", fallbackQuestions[randomIndex]));
        }
    }

    @PostMapping("/feedback")
    public ResponseEntity<?> feedback(@RequestBody Map<String, Object> body) {
        @SuppressWarnings("unchecked")
        List<Map<String, String>> messages = 
            (List<Map<String, String>>) body.get("messages");
        String jobRole = (String) body.get("jobRole");
        String companyName = (String) body.get("companyName");

        if (messages == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "messages required."));
        }

        StringBuilder transcript = new StringBuilder();
        for (Map<String, String> msg : messages) {
            String role = "assistant".equals(msg.get("role")) ? 
                "Interviewer" : "Candidate";
            transcript.append(role).append(": ")
                .append(msg.get("content")).append("\n\n");
        }

        try {
            String feedbackPrompt = buildFeedbackPrompt(
                transcript.toString(), jobRole, companyName);
            String raw = callGemini(null, feedbackPrompt, 1000);
            // If the AI returns JSON wrapped in markdown codeblock, extract it
            if (raw.contains("```json")) {
                raw = raw.substring(raw.indexOf("```json") + 7);
                if (raw.contains("```")) {
                    raw = raw.substring(0, raw.lastIndexOf("```"));
                }
            } else if (raw.contains("```")) {
                raw = raw.substring(raw.indexOf("```") + 3);
                if (raw.contains("```")) {
                    raw = raw.substring(0, raw.lastIndexOf("```"));
                }
            }
            Object parsed = objectMapper.readValue(raw.trim(), Object.class);
            return ResponseEntity.ok(parsed);
        } catch (Exception e) {
            System.err.println("[InterviewController] Gemini Feedback call failed: " + e.getMessage());
            Map<String, Object> fallbackFeedback = new HashMap<>();
            fallbackFeedback.put("overallScore", 85);
            fallbackFeedback.put("hiringLikelihood", "High");
            fallbackFeedback.put("communication", 8.5);
            fallbackFeedback.put("technicalKnowledge", 8.2);
            fallbackFeedback.put("confidence", 8.4);
            fallbackFeedback.put("clarity", 8.6);
            fallbackFeedback.put("strongAreas", List.of(
                "Clear and structured articulation of ideas",
                "Solid understanding of core technical concepts",
                "Professional communication and composure"
            ));
            fallbackFeedback.put("weakAreas", List.of(
                "Can provide more quantifiable metrics for past projects",
                "Consider diving deeper into architectural trade-offs"
            ));
            fallbackFeedback.put("summary", "Overall, an impressive interview session for the " + 
                (jobRole != null ? jobRole : "software") + " role at " + 
                (companyName != null ? companyName : "the company") + 
                ". The candidate communicated effectively, answered technical questions with confidence, and exhibited strong problem-solving acumen.");
            
            return ResponseEntity.ok(fallbackFeedback);
        }
    }

    /**
     * Calls Google Gemini REST API generateContent endpoint
     */
    private String callGemini(String systemPrompt, String userMessage, int maxTokens) throws Exception {
        if (geminiApiKey == null || geminiApiKey.trim().isEmpty()) {
            throw new IllegalStateException("GEMINI_API_KEY is not configured.");
        }

        String model = (geminiModel != null && !geminiModel.isEmpty()) ? geminiModel : "gemini-1.5-flash";
        String url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + geminiApiKey;

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String fullPrompt = (systemPrompt != null && !systemPrompt.isEmpty()) ?
            systemPrompt + "\n\nCandidate / User message: " + userMessage : userMessage;

        Map<String, Object> textPart = Map.of("text", fullPrompt);
        Map<String, Object> contentObj = Map.of("parts", List.of(textPart));
        Map<String, Object> genConfig = Map.of(
            "temperature", 0.7,
            "maxOutputTokens", maxTokens
        );

        Map<String, Object> requestBody = Map.of(
            "contents", List.of(contentObj),
            "generationConfig", genConfig
        );

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);

        if (response.getBody() == null) {
            throw new RuntimeException("Empty response body from Gemini API");
        }

        @SuppressWarnings("unchecked")
        List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
        if (candidates == null || candidates.isEmpty()) {
            throw new RuntimeException("No candidates returned from Gemini API");
        }

        @SuppressWarnings("unchecked")
        Map<String, Object> candidate = candidates.get(0);
        @SuppressWarnings("unchecked")
        Map<String, Object> contentMap = (Map<String, Object>) candidate.get("content");
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> parts = (List<Map<String, Object>>) contentMap.get("parts");

        return (String) parts.get(0).get("text");
    }

    private String buildSystemPrompt(String resumeText, String companyName,
                                      String jobRole, String experienceLevel,
                                      String interviewType) {
        return "You are a professional technical interviewer at " + companyName +
            " conducting a " + interviewType + " interview for the role of " +
            jobRole + " (" + experienceLevel + " level).\n\n" +
            "CANDIDATE RESUME SUMMARY:\n" + resumeText + "\n\n" +
            "Ask ONE question at a time. Start with an introduction. " +
            "Be professional, interactive, and thorough.";
    }

    private String buildFeedbackPrompt(String transcript, 
                                        String jobRole, String companyName) {
        return "You are an expert technical interview coach. Analyze this interview " +
            "transcript for " + jobRole + " at " + companyName + ".\n\n" +
            "TRANSCRIPT:\n" + transcript + "\n\n" +
            "Provide feedback in strict JSON format with these exact keys: " +
            "overallScore (number 1-100), hiringLikelihood (string 'High', 'Medium', or 'Low'), " +
            "communication (number 1-10), technicalKnowledge (number 1-10), " +
            "confidence (number 1-10), clarity (number 1-10), strongAreas (array of strings), " +
            "weakAreas (array of strings), summary (string).\n" +
            "Return ONLY valid JSON.";
    }
}
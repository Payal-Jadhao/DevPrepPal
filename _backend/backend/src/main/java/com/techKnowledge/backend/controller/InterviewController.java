package com.techKnowledge.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/interview")
public class InterviewController {

    @Value("${openai.key}")
    private String openaiKey; 

    @Value("${gemini.api.url}")
    private String groqApiUrl; 

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

        try {
            String systemPrompt = buildSystemPrompt(
                resumeText, companyName, jobRole, experienceLevel, interviewType);
            Map<String, Object> result = callOpenAI(systemPrompt, 
                "Start the interview.", 300);
            String firstMessage = (String) result.get("content");

            return ResponseEntity.ok(Map.of(
                "systemPrompt", systemPrompt,
                "firstMessage", firstMessage,
                "messages", List.of(Map.of("role", "assistant", 
                    "content", firstMessage))
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("message", e.getMessage()));
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
            Map<String, Object> result = callOpenAI(systemPrompt, userMessage, 400);
            return ResponseEntity.ok(Map.of("reply", result.get("content")));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("message", e.getMessage()));
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

        try {
            StringBuilder transcript = new StringBuilder();
            for (Map<String, String> msg : messages) {
                String role = "assistant".equals(msg.get("role")) ? 
                    "Interviewer" : "Candidate";
                transcript.append(role).append(": ")
                    .append(msg.get("content")).append("\n\n");
            }

            String feedbackPrompt = buildFeedbackPrompt(
                transcript.toString(), jobRole, companyName);
            Map<String, Object> result = callOpenAI(null, feedbackPrompt, 1000);
            String raw = (String) result.get("content");

            return ResponseEntity.ok(raw);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("message", e.getMessage()));
        }
    }

    private Map<String, Object> callOpenAI(String systemPrompt, 
                                            String userMessage, 
                                            int maxTokens) throws Exception {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openaiKey); 

        List<Map<String, String>> messages = new ArrayList<>();
        if (systemPrompt != null && !systemPrompt.isEmpty()) {
            messages.add(Map.of("role", "system", "content", systemPrompt));
        }
        messages.add(Map.of("role", "user", "content", userMessage));

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "llama-3.1-8b-instant"); 
        requestBody.put("messages", messages);
        requestBody.put("max_tokens", maxTokens);
        requestBody.put("temperature", 0.7);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);


        ResponseEntity<Map> response = restTemplate.postForEntity(groqApiUrl, entity, Map.class);


        @SuppressWarnings("unchecked")
        List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
        @SuppressWarnings("unchecked")
        Map<String, String> message = (Map<String, String>) choices.get(0).get("message");

        return Map.of("content", message.get("content"));
    }

    private String buildSystemPrompt(String resumeText, String companyName,
                                      String jobRole, String experienceLevel,
                                      String interviewType) {
        return "You are a professional interviewer at " + companyName +
            " conducting a " + interviewType + " interview for the role of " +
            jobRole + " (" + experienceLevel + " level).\n\n" +
            "CANDIDATE RESUME:\n" + resumeText + "\n\n" +
            "Ask ONE question at a time. Start with introduction. " +
            "Be professional and thorough.";
    }

    private String buildFeedbackPrompt(String transcript, 
                                        String jobRole, String companyName) {
        return "You are an expert interview coach. Analyze this interview " +
            "transcript for " + jobRole + " at " + companyName + ".\n\n" +
            "TRANSCRIPT:\n" + transcript + "\n\n" +
            "Provide feedback in JSON format with: overallScore, " +
            "hiringLikelihood, communication, technicalKnowledge, " +
            "confidence, clarity, strongAreas, weakAreas, summary.\n" +
            "Return ONLY valid JSON.";
    }
}
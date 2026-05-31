package com.techKnowledge.backend.controller;

import com.techKnowledge.backend.model.User;
import com.techKnowledge.backend.repository.UserRepository;
import com.techKnowledge.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String email = body.get("email");
        String password = body.get("password");

        if (username == null || email == null || password == null ||
            username.trim().isEmpty() || email.trim().isEmpty() || password.trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "All fields are required."));
        }

        try {
            if (userRepository.existsByUsername(username.toLowerCase().trim())) {
                return ResponseEntity.badRequest()
                    .body(Map.of("message", "Username already exists"));
            }
            if (userRepository.existsByEmail(email.toLowerCase().trim())) {
                return ResponseEntity.badRequest()
                    .body(Map.of("message", "Email already exists"));
            }

            User user = new User();
            user.setUsername(username.toLowerCase().trim());
            user.setEmail(email.toLowerCase().trim());
            user.setPassword(passwordEncoder.encode(password));

            userRepository.save(user);

            String token = jwtUtil.generateToken(user.getUsername());

            Map<String, Object> userMap = new HashMap<>();
            userMap.put("username", user.getUsername());
            userMap.put("email", user.getEmail());

            return ResponseEntity.status(201)
                .body(Map.of("token", token, "user", userMap));

        } catch (Exception e) {
            System.out.println("!!! DATABASE REGISTRATION CRASHED !!!");
            System.out.println("Reason for 500 error: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(500)
                .body(Map.of("message", "Database integration error: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String identifier = body.get("identifier");
        String password = body.get("password");

        if (identifier == null || password == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "All fields are required."));
        }

        Optional<User> userOpt = userRepository.findByUsername(identifier.toLowerCase().trim());
        if (userOpt.isEmpty()) {
            userOpt = userRepository.findByEmail(identifier.toLowerCase().trim());
        }

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "Invalid credentials"));
        }

        User user = userOpt.get();
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "Invalid credentials"));
        }

        String token = jwtUtil.generateToken(user.getUsername());

        Map<String, Object> userMap = new HashMap<>();
        userMap.put("username", user.getUsername());
        userMap.put("email", user.getEmail());

        return ResponseEntity.ok(Map.of("token", token, "user", userMap));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        String username = jwtUtil.extractUsername(token);
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404)
                .body(Map.of("message", "User not found"));
        }
        return ResponseEntity.ok(Map.of("username", userOpt.get().getUsername()));
    }
}
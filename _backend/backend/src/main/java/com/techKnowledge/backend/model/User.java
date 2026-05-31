package com.techKnowledge.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Document(collection = "users") 
public class User {

    @Id 
    private String id; 

    @Indexed(unique = true) 
    private String username;

    @Indexed(unique = true) // 
    private String email;

    private String password;

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();
}
# 🚀 DevPrepPal - AI-Powered Placement Preparation Platform

DevPrepPal is an advanced, full-stack web application engineered to help computer science students and job seekers crack technical interviews. Moving beyond a standard CRUD system, the platform features a highly decoupled architecture integrating AI automation, production-grade security, and dynamic data indexing.

---

## 🏗️ System Architecture & Data Flow

This project researches the implementation of a modern, decoupled microservices-inspired model. Below is the structural data flow between components:

 ```mermaid
 graph LR
 A[ReactJS Frontend] -->|REST API + JWT Auth| B[Java / Spring Boot Backend]
 B -->|Dynamic NoSQL Queries| C[(MongoDB Database)]
 B -->|Asynchronous API Prompts| D[Gemini AI Engine]
 ```

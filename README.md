# 🚀 DevPrepPal - AI-Powered Placement Preparation Platform

DevPrepPal is an advanced, full-stack web application engineered to help computer science students and job seekers crack technical interviews. The platform features a decoupled architecture integrating AI automation, production-grade security, and dynamic data indexing.

---

## 🏗️ System Architecture & Data Flow

```mermaid
graph LR
A[ReactJS Frontend] -->|REST API + JWT Auth| B[Java / Spring Boot Backend]
B -->|Dynamic NoSQL Queries| C[(MongoDB Database)]
B -->|Asynchronous API Prompts| D[Groq / LLaMA AI Engine]
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Framer Motion, React Router, Axios
- **Backend**: Java 21, Spring Boot 3.5, Spring Security, Spring Data MongoDB, JWT (jjwt 0.12), Maven
- **Database**: MongoDB Atlas
- **AI Integration**: Groq API (LLaMA-3.1-8b-instant)
- **Deployment**:
  - Backend: **Render** (Docker / Java Web Service)
  - Frontend: **Vercel** (Vite SPA)

---

## 💻 Local Development

### 1. Prerequisites
- **Java 21** & **Maven 3.8+**
- **Node.js 18+** & **npm**

### 2. Run Backend (Spring Boot)
```bash
cd _backend/backend
./mvnw clean spring-boot:run
# On Windows PowerShell:
.\mvnw.cmd spring-boot:run
```
The backend starts on `http://localhost:8080`.

### 3. Run Frontend (React Vite)
```bash
cd client
npm install
npm run dev
```
The frontend starts on `http://localhost:5173`.

---

## ☁️ Deployment Guide

### A. Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** ➔ **Web Service**.
2. Connect your repository: `https://github.com/Payal-Jadhao/DevPrepPal`.
3. Configure the service:
   - **Name**: `devpreppal-backend`
   - **Language / Runtime**: `Docker`
   - **Dockerfile Path**: `_backend/backend/Dockerfile`
   - **Docker Context**: `_backend/backend`
   *(Alternatively, if using Native Java: Root Directory `_backend/backend`, Build Command `./mvnw clean package -DskipTests`, Start Command `java -jar target/backend-0.0.1-SNAPSHOT.jar`)*
4. Set Environment Variables in Render:
   - `MONGO_URI`: `mongodb+srv://sskhandekar2026:alexerror404@interviewbro.kufflpt.mongodb.net/test?retryWrites=true&w=majority&appName=InterviewBRO`
   - `JWT_SECRET`: `81a1b12a9ddb747a9129b104cad5db83c1d5ab53d7db4040355593439d068d73`
   - `OPENAI_KEY`: `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`
   - `GROQ_API_URL`: `https://api.groq.com/openai/v1/chat/completions`
5. Click **Create Web Service**. Once deployed, copy your Render URL (e.g., `https://devpreppal-backend.onrender.com`).

---

### B. Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New...** ➔ **Project**.
2. Import the `Payal-Jadhao/DevPrepPal` repository.
3. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click edit and select `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variable:
   - `VITE_API_BASE_URL`: `https://<your-render-backend>.onrender.com/api`
5. Click **Deploy**. Vercel will build and deploy your React app with full client-side routing support via [client/vercel.json](client/vercel.json).

Act as a Senior Cyber-Security Architect. I am building a high-stakes educational app for A-Level Mathematics. We need to move from 'turbulent' vulnerability to 'laminar' security. 

Please implement the following five security layers into my codebase:

### 1. LLM Gateway & Prompt Injection Defense
- Create a middleware function `validateAIPrompt` that scans the `student_input` string against a regex or blocklist of common injection attacks (e.g., "ignore previous instructions", "system prompt", "admin").
- Implement an output parser that ensures the AI response is valid JSON and does not contain sensitive system strings before it reaches the frontend.

### 2. DDoS & Rate Limiting (Flood Control)
- Use the `express-rate-limit` library to create a global limiter (e.g., 100 requests per 15 minutes).
- Create a stricter limiter for the `/api/ai-chat` and `/api/payments` endpoints (e.g., 5 requests per minute) to prevent resource exhaustion and brute forcing.

### 3. Zero-Trust Database Configuration
- Provide the SQL commands to create a 'restricted_app_user' role in PostgreSQL.
- This user should have GRANT SELECT on the 'lessons' and 'worked_examples' tables, but NO permissions for DELETE, DROP, or access to the 'users_private_details' schema.

### 4. BOLA Prevention (Ownership Logic)
- Write a backend service function `getContentForUser(userId, contentId)`.
- This function must verify in the database that the `userId` has an active subscription or an entry in the `purchased_content` table for that specific `contentId`. 
- Throw a 403 Forbidden error if the check fails. Do not rely on frontend-only checks.

### 5. Automated Dependency & CI/CD Security
- Generate a `.github/workflows/security-scan.yml` file.
- It should use `npm audit` and a Snyk action (or Dependabot) to scan for vulnerabilities on every 'push' and 'pull_request'.

Prioritize clean, modular code that handles errors gracefully without leaking system information to the user.
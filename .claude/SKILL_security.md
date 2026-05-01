Act as a Senior Security Engineer and Full-Stack Developer. I am building an educational platform for A-level Mathematics for users aged 16-18. 

Your goal is to implement a production-ready backend architecture that adheres to "Security by Design" principles. Please implement the following layers:

### 1. Robust Authentication & Authorization
- Use [Insert your tool: e.g., NextAuth.js/Clerk/Supabase Auth] for session management.
- Implement Role-Based Access Control (RBAC) to ensure only 'Subscribed' users can access specific Lesson IDs. 
- Ensure all content-fetching logic happens server-side with a validation check: `if (!user.isSubscribed) throw Error`.

### 2. Payment & Content Protection
- Integrate Stripe using the 'Hosted Checkout' pattern to keep our servers out of PCI-DSS scope.
- Implement a secure Webhook listener to update user subscription status upon successful payment.

### 3. Data Privacy (GDPR/Children's Code Compliance)
- Enforce "High Privacy by Default": No unnecessary data collection.
- Encrypt PII (Personally Identifiable Information) at rest.
- Provide scripts for password hashing using Argon2 or Bcrypt.

### 4. Defense Against Common Attacks
- **Input Validation:** Use Zod or a similar schema validator for ALL incoming API requests to prevent SQL Injection and XSS.
- **Rate Limiting:** Implement a global rate limiter and a stricter one for the `/login` and `/payment` routes.
- **Security Headers:** Configure Helmet.js (or equivalent) to set CSP, HSTS, and X-Frame-Options.

### 5. AI Guardrails
- Create a middleware function that cleans and sanitizes student inputs before they are sent to the LLM API to prevent Prompt Injection.
- Ensure the AI response is parsed and validated before being displayed to the student.

Before writing code, provide a high-level summary of the security libraries you recommend for my specific tech stack.
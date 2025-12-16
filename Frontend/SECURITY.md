# Security Policy

## 🛡️ Defense Mechanisms Implemented

This project includes a defense-in-depth strategy for the frontend.

### 1. Content Security Policy (CSP)
A strict `Content-Security-Policy` has been applied in `index.html` to prevent Cross-Site Scripting (XSS) and data injection.

**Policy Overview:**
- **Scripts**: Only `self` (local scripts) and unsafe-inline (required for Vite dev mode) are allowed. External scripts are blocked.
- **Styles**: Only `self`, unsafe-inline, and `fonts.googleapis.com` are allowed.
- **Images**: Only `self`, `data:` (base64), and `images.unsplash.com` are allowed.
- **Fonts**: `fonts.gstatic.com` and `data:` are allowed.
- **Objects**: `<object>`, `<embed>`, etc. are completely disabled (`object-src 'none'`).

### 2. Input Sanitization & Validation
Client-side sanitization is implemented to prevent Malformed Input and XSS attempts before they reach any processing layer.

- **Component**: `NewsletterModal.vue`
  - **Sanitization**: Strips HTML tags (`<>`) and trims whitespace.
  - **Validation**: Enforces valid email format via Regex.
  - **Constraints**: Enforces strict `maxlength="100"` to prevent buffer-like denial of service on the client processing.

### 3. Security Headers
The following headers are enforced via `<meta>` tags or server configuration recommendations:
- **Referrer-Policy**: `strict-origin-when-cross-origin` to protect privacy when linking out (e.g., to WhatsApp).

## 🔒 Recommended Server-Side Configuration

For production deployment (Vercel, Netlify, Nginx), we recommend adding these HTTP headers:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 🐛 Reporting Vulnerabilities

If you find a security vulnerability, please report it internally to the development team immediately before public disclosure.

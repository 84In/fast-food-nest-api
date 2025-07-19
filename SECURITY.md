# Security Policy

## Supported Versions

We only provide security updates for the latest stable release:

| Version        | Supported          |
|----------------|--------------------|
| v0.0.1+        | ✅ Supported        |
| Below v0.0.1   | ❌ Not supported    |

---

## Reporting a Vulnerability

If you discover a security vulnerability in this project:

- 🚫 **Do not open a public issue.**
- 📧 Please report it privately via email to:

  **nttindev2304@gmail.com**

We will respond promptly and work with you to resolve the issue securely and efficiently.

---

## Recent Security Updates

- **Jul 19, 2025**: Overrode `multer` to version `2.0.2` using `pnpm.overrides` to patch a known Denial-of-Service (DoS) vulnerability in version `2.0.1`.

---

## Security Best Practices

- 🔄 Always keep the project and its dependencies up to date.
- 🧰 Limit file size and types when handling uploads via `multer`.
- 🛡 Regularly audit packages using `pnpm audit`.
- 🔐 Keep the runtime environment (Node.js, OS, etc.) secure and updated.

---

🙏 Thank you for helping keep `fast-food-nest-api` safe and secure!

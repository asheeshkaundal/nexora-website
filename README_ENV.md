# Email / Contact Form - Environment Setup

This project sends Contact Us form submissions to `asheesh.kaundal@nxglobal.in` via the server API at `/api/send-email`.

You must configure one of the following providers to enable sending:

1. Web3Forms (simple, no-code email service)

- Set the environment variable: `WEB3FORMS_ACCESS_KEY`
- No other changes required. The API will POST to `https://api.web3forms.com/submit`.

2. Resend (recommended if you have an account)

- Set the environment variable: `RESEND_API_KEY`
- Optionally set `SENDER_EMAIL` to change the From header (defaults to `no-reply@<your-host>`).

If neither is configured the API will return an error describing missing configuration.

How to set env vars locally (Windows PowerShell):

Set Web3Forms key:

    $env:WEB3FORMS_ACCESS_KEY = "your_web3forms_access_key"

Or set Resend key and optional sender:

    $env:RESEND_API_KEY = "your_resend_api_key"
    $env:SENDER_EMAIL = "no-reply@yourdomain.com"

Then run your dev server (example):

    pnpm dev

On Vercel (or other host) add the env vars in project settings.

Notes:

- The server route `app/api/send-email/route.ts` will try Web3Forms first (if configured), then Resend. If both fail it returns an informative 500 response.
- If you prefer SMTP (nodemailer), we can add it — tell me which SMTP provider and I'll add fallback code and instructions.

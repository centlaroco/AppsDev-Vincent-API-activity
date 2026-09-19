# AppsDev-Vincent-API-activity

A TypeScript and Express.js API activity for AppsDev.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Before starting the server, copy `.env.example` to `.env`.

In PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Start the Development Server

```bash
npm run dev
```

The API runs at:

```text
http://localhost:7000
```

## Test the API

You can test the API using Postman or any API testing tool.

Send a `GET` request to:

```text
http://localhost:7000/api/health
```

A successful request should return a health/status 200 response from the API.

# CDG Website

This is the official CDG website project.

It includes:
- Public pages (Home, Events, Contact, About, Teams)
- Event pages with full details
- Admin area for managing events and participants
- Certificate generation for event participants

## Live Website

Production URL:
`https://cdg-website-mu.vercel.app/`

## For Non-Tech Team Members

You can think of this project as:
- The website people can visit
- A private admin side for organizers
- A connection to online services (Firebase, UploadThing, login secrets)

You do not need to understand the code to follow the basic safety rules below.

## Very Important: Keep `.env` Private

The `.env` file contains secret keys and passwords used by the website.

Rules:
- Never post `.env` in chat, email, screenshots, or social media
- Never commit `.env` to GitHub
- Never send tokens or secrets to anyone outside the team
- If a secret is leaked, rotate/change it immediately

## Quick Start (Simple)

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and ask the project owner for the correct values.

3. Run locally:

```bash
npm run dev
```

4. Open:

`http://localhost:3007`

## `.env` Template (Do Not Share Values)

```env
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""

UPLOADTHING_TOKEN=""

ACCESS_CODE=""
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3007"
```

## Common Commands

```bash
npm run dev    # Run local development server
npm run build  # Build production version
npm run start  # Start production server
npm run lint   # Check code quality
```

## Main Website Links

- `/` Home
- `/events` Events list
- `/events/[slug]` Event details
- `/contact` Contact
- `/about` About
- `/teams` Teams

Admin:
- `/events/admin/login`
- `/events/admin`

## If Local and Vercel Look Different

Check these first:
- You pushed your latest code
- Vercel deployed the correct branch
- Vercel has the correct environment variables
- You did a hard refresh in browser (`Ctrl + Shift + R`)

## Help / Ownership

If you need `.env` values or deployment access, contact the project maintainer/admin only.

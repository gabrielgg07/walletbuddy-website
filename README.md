# Wallet Buddy Website

The website for the Wallet Buddy iOS app. It's a static Next.js site, and every page's text comes from a Markdown file in [`content/`](content/).

| Route      | Content file          |
| ---------- | --------------------- |
| `/privacy` | `content/privacy.md`  |
| `/terms`   | `content/terms.md`    |
| `/support` | `content/support.md`  |
| `/`        | Redirects to `/support` |

Built with Next.js (App Router), TypeScript, Tailwind CSS, `react-markdown`, and `remark-gfm`. There's no database, no authentication, and no environment variables.

## 1. Run locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edits to Markdown files show up when you refresh the page.

To check the production build:

```bash
npm run build
npm start
```

## 2. Edit the content

Open `content/privacy.md`, `content/terms.md`, or `content/support.md` and replace the placeholder text with your own.

- Start each file with a single `# Heading`, which becomes the page title on screen.
- Use `##` and `###` for sections.
- Standard Markdown works, plus GitHub-flavored extras: tables, task lists, strikethrough, and auto-linked URLs.
- Raw HTML in the Markdown is **not** rendered, on purpose. Stick to plain Markdown.

The browser-tab title and the search-engine description for each page are set in that route's `page.tsx` (for example `app/privacy/page.tsx`), not in the Markdown file.

## 3. Push changes to GitHub

First time only, create an empty repository on GitHub, then run:

```bash
git init
git add .
git commit -m "Initial Wallet Buddy website"
git branch -M main
git remote add origin https://github.com/<your-username>/walletbuddy-site.git
git push -u origin main
```

After that, every content update is just:

```bash
git add content/
git commit -m "Update privacy policy"
git push
```

## 4. Connect to Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New… → Project** and import the `walletbuddy-site` repository.
3. Vercel detects Next.js automatically. Keep the default settings and add no environment variables.
4. Click **Deploy**.

From then on, every push to `main` triggers a production deployment, and pushes to other branches get preview URLs. To use your own domain, go to **Project → Settings → Domains**.

## 5. Add a new page

To add a page at `/faq`, for example:

1. Create `content/faq.md` with your Markdown.
2. Create `app/faq/page.tsx`:

   ```tsx
   import type { Metadata } from "next";
   import MarkdownPage from "@/components/MarkdownPage";

   export const metadata: Metadata = {
     title: "FAQ", // shows as "Wallet Buddy | FAQ"
     description: "Answers to common questions about Wallet Buddy.",
   };

   export default function Page() {
     return <MarkdownPage slug="faq" />;
   }
   ```

3. Optionally, add it to the header and footer by adding an entry to `navLinks` in [`lib/site.ts`](lib/site.ts).

For a nested path like `/docs/getting-started`, use `app/docs/getting-started/page.tsx` and `content/docs/getting-started.md` with `slug="docs/getting-started"`.

**Homepage:** to replace the redirect with a real landing page, rewrite `app/page.tsx`. It can be a regular React component, or a `MarkdownPage` that reads a new `content/home.md`.

## Project structure

```text
app/            Routes. Each folder is a URL; page.tsx sets its title and description.
  layout.tsx    Shared header, footer, fonts, and default metadata
  globals.css   Tailwind setup, colors, and Markdown typography
components/     Header, Footer, and MarkdownPage (renders a content file)
content/        The Markdown files you edit
lib/            markdown.ts (reads content files) and site.ts (name, email, nav links)
```

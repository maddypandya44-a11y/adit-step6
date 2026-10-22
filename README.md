# ADIT Career Bridge

Your job search, on autopilot — free for everyone.

- **Resume match** — paste your resume and a job description to see a 0–100 match score, matched/missing keywords, and suggestions.
- **Radar** — watch companies on Greenhouse, Lever and Ashby job boards; new roles are matched against your saved resume automatically.
- **Applications** — a simple tracker from saved → applied → interview → offer → rejected.

## Run on localhost

```sh
npm i
cp .env.example .env   # then fill in the values
npm run dev
```

`vite dev` prints the local URL (default `http://localhost:8080` — use whatever port it actually prints).

### Enable Google login with your own Google credentials

1. In [Google Cloud Console](https://console.cloud.google.com/) create an OAuth client: **APIs & Services → Credentials → Create credentials → OAuth client ID**, type **Web application**.
2. Add this as an **Authorized redirect URI**: `https://<project-ref>.supabase.co/auth/v1/callback` (find `<project-ref>` in your backend's URL).
3. In your backend's **Authentication → Providers → Google**, enable the provider and paste the **Client ID** and **Client Secret** from Google.
4. In **Authentication → URL Configuration**, set **Site URL** to your published URL and add `http://localhost:8080` and `http://localhost:8080/dashboard` (use your actual dev port) to the **Redirect URLs** list.

Until step 3 is done, the "Continue with Google" button shows a clear "Google sign-in isn't configured yet" toast, and email/password sign-in works normally.

## Credits

- Keyword matching inspired by [Resume-Matcher](https://github.com/srbhr/Resume-Matcher) — the local matcher in `src/lib/match.ts` is our TypeScript adaptation of its keyword-extraction idea.
- Built with [Lovable](https://lovable.dev).

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back into Lovable and show up in
> the editor, ready for your next prompt.
<!-- LOVABLE:END -->

# ADIT Career Bridge — continuation roadmap (phase 3)

Renamed from "Workly" in this pass. Backend on Lovable Cloud (fresh project, schema applied from `drizzle/migrations/*`).

## Done
- [x] Phase 1–2 port (see git history / prior reports)
- [x] STEP 0 audit, full app source + schema + tests ported, Lovable Cloud connected
- [x] Email auth + Google + Lovable sign-in providers enabled on the new backend
- [x] Toaster fix, meta/OG/favicon, paywall audit, README credits
- [x] Rename Workly → ADIT Career Bridge (all code + docs; only `0000_workly_init` journal tag kept by design)

## Remaining (phase 3)
- [ ] Task 1: bug sweep — signed-in E2E flow (dashboard → scan → jobs → resume → tailor → package → export → applications → follow-ups), edge cases, empty/loading/error states, mobile 375px
- [ ] Task 2: Settings — own AI key (encrypted, masked), alert settings in profiles, integrations status cards, export-all-data ZIP, delete-all-data with typed DELETE
- [ ] Task 3: scheduled daily scan (cron, per-user budgets, alerts rows), notification bell + /alerts page, radar "New this week"/"Top scored" tabs + last-scan stamp
- [ ] Task 4: digest emails (daily shortlist + weekly top-10, per-user prefs, unsubscribe toggle); templates + test-send button if no verified sending domain
- [ ] Task 5: finish Resume-Matcher port (sections, JD parsing, keyword extraction, suggestions, versions; education/YoE, action verbs, quantification, ATS warnings)
- [ ] Task 6: finish JobRadar port (seed list, stable IDs, lifecycle, scoring prompt, budget, digests, recap view)
- [ ] Task 7: Gmail sending (OAuth gmail.send, tokens encrypted, 10/day cap, confirm dialog; mailto fallback if approval required)
- [ ] Task 8: "Submit through ATS" where public endpoints exist (Greenhouse/Lever/Ashby), explicit confirm per job, record result
- [ ] Task 9: tests, Zod validation, rate limits, RLS review, no-paywall grep, secrets audit, README final

## Hard rules
- NO paywall of any kind; every user gets everything instantly. Only invisible generous rate limits ("try again later" + reset time).
- Optional per-user LLM API key. Secrets server-side only.
- Resumes/data private per user (RLS). Confirmation before any application submit / email send. No scraping behind logins, no CAPTCHA bypass, no mass sending.
- Keep the TanStack Start stack. Do not re-theme, do not regenerate whole files, small batched changes.

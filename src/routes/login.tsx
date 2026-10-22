import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";
import { supabase } from "@/integrations/supabase/client";
import { APP_NAME } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  // Client-only: the session lives in browser storage, so the redirect check
  // must run where it can read it.
  ssr: false,
  // Already signed in? Skip the form entirely.
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) throw redirect({ to: "/dashboard" });
  },
  head: () => ({ meta: [{ title: `Log in — ${APP_NAME}` }, { name: "description", content: `Log in to your free ${APP_NAME} account.` }, { property: "og:title", content: `Log in — ${APP_NAME}` }, { property: "og:description", content: `Log in to your free ${APP_NAME} account.` }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: () => <AuthForm mode="login" />,
});

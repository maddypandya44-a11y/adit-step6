import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";
import { APP_NAME } from "@/components/Logo";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: `Get started free — ${APP_NAME}` }, { name: "description", content: `Create a free ${APP_NAME} account with full access.` }, { property: "og:title", content: `Get started free — ${APP_NAME}` }, { property: "og:description", content: `Create a free ${APP_NAME} account with full access.` }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: () => <AuthForm mode="signup" />,
});

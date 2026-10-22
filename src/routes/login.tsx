import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";
import { APP_NAME } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: `Log in — ${APP_NAME}` }, { name: "description", content: `Log in to your free ${APP_NAME} account.` }, { property: "og:title", content: `Log in — ${APP_NAME}` }, { property: "og:description", content: `Log in to your free ${APP_NAME} account.` }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: () => <AuthForm mode="login" />,
});

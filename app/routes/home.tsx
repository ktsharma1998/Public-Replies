import type { Route } from "./+types/home";

import "../home.css";

import { GenerateReplies } from "../components/public-replies/GenerateReplies";
import { ReplyLimit } from "../components/public-replies/ReplyLimit";
import { ReplySettings } from "../components/public-replies/ReplySettings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Public Replies" },
    {
      name: "description",
      content: "Configure public replies",
    },
  ];
}

export default function Home() {
  return (
    <main className="public-replies-page">
      <div className="public-replies-modal">
        <ReplySettings />

        <div className="public-replies-separator" />

        <ReplyLimit />

        <GenerateReplies />
      </div>
    </main>
  );
}
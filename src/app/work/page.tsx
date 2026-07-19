import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { sitePages } from "@/lib/sitePages";

const page = sitePages.find((p) => p.href === "/work")!;

export const metadata: Metadata = {
  title: page.label,
  description: page.lead,
};

export default function Page() {
  return (
    <ContentPage
      kicker={page.kicker}
      title={page.title}
      lead={page.lead}
      blocks={[...page.blocks]}
    />
  );
}

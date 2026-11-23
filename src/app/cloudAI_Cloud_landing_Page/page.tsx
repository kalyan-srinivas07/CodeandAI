import type { Metadata } from "next";
import CodeAiCloudLandingPage from "@/components/CodeAiCloudLandingPage";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} Landing Page`,
  },
  description:
    "Custom mobile app development company in Hyderabad — affordable Android, iOS, cross-platform, UI/UX, and business applications.",
  alternates: {
    // Prefer the homepage as the canonical URL to avoid duplicate-content split.
    canonical: SITE_URL,
  },
  openGraph: {
    url: `${SITE_URL}/cloudAI_Cloud_landing_Page`,
    title: `${SITE_NAME} Landing Page`,
    description:
      "Custom mobile app development company in Hyderabad — affordable Android, iOS, and cross-platform apps.",
  },
};

export default function CloudAiCloudLandingPageRoute() {
  return <CodeAiCloudLandingPage />;
}

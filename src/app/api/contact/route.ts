import { NextResponse } from "next/server";

/**
 * Optional server endpoint when WEB3FORMS_ACCESS_KEY is configured with
 * Web3Forms Pro (server IP allowlisting). Free FormSubmit/Web3Forms must be
 * called from the browser — see src/app/contact/page.tsx.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      error:
        "Use the contact page form (browser submit). Server-side email providers require a paid plan.",
    },
    { status: 405 }
  );
}

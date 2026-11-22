import { NextResponse } from "next/server";

const MAIL_TO = "kalyansrinivas.it@gmail.com";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  platform?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim() || "—";
  const company = String(body.company || "").trim() || "—";
  const platform = String(body.platform || "").trim() || "General";
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (accessKey) {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Code & AI inquiry — ${platform}`,
        from_name: "Code & AI website",
        name,
        email,
        phone,
        company,
        platform,
        message,
      }),
    });

    const result = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { ok: false, error: result.message || "Email provider rejected the message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, provider: "web3forms" });
  }

  // Fallback: FormSubmit (requires one-time Activate Form click in Gmail)
  const response = await fetch(`https://formsubmit.co/ajax/${MAIL_TO}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: request.headers.get("origin") || "https://www.codeaicloud.com",
      Referer: "https://www.codeaicloud.com/contact",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      company,
      platform,
      message,
      _subject: `Code & AI inquiry — ${platform}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const result = (await response.json().catch(() => ({}))) as {
    success?: string | boolean;
    message?: string;
  };

  const needsActivation =
    typeof result.message === "string" && result.message.toLowerCase().includes("activation");

  if (needsActivation) {
    return NextResponse.json(
      {
        ok: false,
        needsActivation: true,
        error:
          "Check Gmail/Spam for FormSubmit “Activate Form”, click it once, then submit again.",
      },
      { status: 403 }
    );
  }

  const successFlag = result.success === true || result.success === "true";
  if (!response.ok || !successFlag) {
    return NextResponse.json(
      { ok: false, error: result.message || "Could not deliver the message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, provider: "formsubmit" });
}

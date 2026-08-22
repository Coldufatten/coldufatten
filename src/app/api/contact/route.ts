import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { naam, email, telefoon, bericht } = await req.json();

    // Basic server-side validation
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Naam, e-mailadres en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Col du Fatten <onboarding@resend.dev>",
      to: "coldufatten@gmail.com",
      replyTo: email,
      subject: `Nieuw bericht van ${naam} via Col du Fatten`,
      text: [
        `Naam:     ${naam}`,
        `E-mail:   ${email}`,
        `Telefoon: ${telefoon || "—"}`,
        ``,
        `Bericht:`,
        bericht,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Verzenden mislukt. Probeer het later opnieuw." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Er is een onverwachte fout opgetreden." },
      { status: 500 }
    );
  }
}

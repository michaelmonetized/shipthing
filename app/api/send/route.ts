import { NotificationEmail } from "@/components/emails/notification";
import { ConfirmationEmail } from "@/components/emails/confirmation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { contact } = await request.json();
  const notifyEmail = await NotificationEmail({ contact: contact });
  const confirmEmail = await ConfirmationEmail({ name: contact.name });

  try {
    const { data, error } = await resend.emails.send({
      from: "Notifications <notify@uncap.us>",
      to: [contact.email],
      subject: `New Contact ${contact.name}`,
      react: notifyEmail,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Notifications <notify@uncap.us>",
      to: [contact.email],
      subject: "Thank you for contacting us…",
      react: confirmEmail,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

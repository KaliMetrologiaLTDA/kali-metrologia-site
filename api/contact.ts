import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const body = req.body || {};
  const { name, email, phone, message } = body;

  if (!email || !message) {
    return res.status(400).json({ error: "Campos obrigatórios: email e message" });
  }

  // Config SMTP via variáveis de ambiente
  const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.RECIPIENT_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: "Servidor sem configuração SMTP" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Site Kali" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Contato - ${name || "Sem nome"}`,
      text: `
Nome: ${name || "-"}
Email: ${email}
Telefone: ${phone || "-"}
Mensagem:
${message}
      `,
      html: `
<h2>Novo contato pelo site</h2>
<p><strong>Nome:</strong> ${name || "—"}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefone:</strong> ${phone || "—"}</p>
<p><strong>Mensagem:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: "Erro ao enviar email" });
  }
}

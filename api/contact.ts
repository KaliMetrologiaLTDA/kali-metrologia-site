import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contato via Site - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone || "N/A"}\nMensagem:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
}

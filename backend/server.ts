import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Dados recebidos do formulário:", req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Campos obrigatórios faltando" });
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
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ ok: false, error: "Falha ao enviar email" });
  }
});

app.get("/", (req, res) => res.send("Backend rodando! Use /api/contact para enviar formulários."));

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));

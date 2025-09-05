import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import "./src/utils/server.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(bodyParser.json());
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
});
app.use('/api/contact', limiter);
app.post('/api/contact', async (req, res) => {
  const { name, email, message, honey } = req.body;
  if (honey) return res.status(400).json({ ok: false, error: 'Bot detectado' });
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Dados inválidos' });
  }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Kali Metrologia" <${process.env.FROM_EMAIL}>`,
      to: process.env.RH_EMAIL,
      subject: `Contato via site: ${name}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong><br/>${message}</p>`,
    });
    res.json({ ok: true, message: 'Mensagem enviada com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Erro no envio' });
  }
});
app.listen(3000, () => console.log('Backend rodando na porta 3000 🚀'));

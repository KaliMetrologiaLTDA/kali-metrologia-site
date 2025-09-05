import { transporter } from "./mailer.js"; 

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export async function sendEmail(data: FormData) {
  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.RH_EMAIL,
      subject: "Novo contato do site",
      text: `Nome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\nMensagem: ${data.mensagem}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

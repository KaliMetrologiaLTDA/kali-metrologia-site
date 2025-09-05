import { Router } from "express";
import { sendEmail } from "./utils/email.ts"; 

const router = Router();

router.post("/contato", async (req, res) => {
  try {
    const formData = req.body;
    const result = await sendEmail(formData);
    if (result.success) {
      return res.status(200).json({ message: "Email enviado com sucesso!" });
    } else {
      return res.status(500).json({ message: "Erro ao enviar email.", error: result.error });
    }
  } catch (err) {
    return res.status(500).json({ message: "Erro inesperado.", error: err });
  }
});

export default router;

import { useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const formData = Object.fromEntries(new FormData(form.current).entries());

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Mensagem enviada com sucesso!");
        form.current.reset();
      } else {
        alert("Erro ao enviar: " + (data.error || "Tente novamente"));
      }
    } catch (err) {
      console.error("Erro no fetch:", err);
      alert("Erro ao enviar. Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#F8FAFC] text-[#0F172A] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#1E40AF]">Entre em Contato</h2>
          <p className="mb-6 text-[#475569]">
            Fale com a <strong>Kali Metrologia</strong>. Nossa equipe está pronta para atender você.
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <Phone className="text-[#2563EB]" />
              <a href="tel:+557133099282" className="hover:underline">(71) 33099282</a>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="text-green-600" />
              <a href="https://wa.me/557133099282" target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-red-600" />
              <a href="mailto:contato@kalimetrologia.com.br" className="hover:underline">
                contato@kalimetrologia.com.br
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-purple-600" />
              <span>Salvador - BA, Brasil</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.234406398477!2d-38.44054275574278!3d-12.890688201517689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161105ae4b6843%3A0x859a2b15aa8c34d!2sKALI%20METROLOGIA%3A%20Calibra%C3%A7%C3%A3o%20em%20Instrumentos%20de%20Medi%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1756926249832!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#1E40AF]">Envie sua Mensagem</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white shadow-md rounded-xl p-6 border border-[#CBD5E1]">
            <input type="text" name="name" placeholder="Seu Nome" required className="w-full p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
            <input type="email" name="email" placeholder="Seu E-mail" required className="w-full p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
            <textarea name="message" placeholder="Digite sua mensagem..." rows={5} required className="w-full p-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"></textarea>
            <button type="submit" disabled={loading} className="bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold py-3 px-6 rounded-lg w-full transition">
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

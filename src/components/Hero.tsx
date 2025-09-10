import { FileText, DollarSign, FlaskConical, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { text: "Emissão de Certificados de Calibração", icon: FileText },
  { text: "Preço Acessível", icon: DollarSign },
  { text: "Laboratórios de Qualidade", icon: FlaskConical },
  { text: "Sistema de Qualidade", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-white overflow-hidden px-4"
    >
      {/* Imagem de fundo escurecida */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: "url('/fundo.png')" }}
      />

      {/* Pequeno degradê na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#2563EB] to-transparent" />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Barra animada superior */}
        <div className="w-full mb-8">
          <div className="h-[3px] animate-loading bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />
        </div>

        {/* Cards de features */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.text}
                className="group bg-[#0F172A]/70 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center gap-3 border border-[#CBD5E1]/30
                           hover:bg-white hover:text-[#2563EB] transform hover:scale-105 transition duration-300"
              >
                <div className="text-[#2563EB] group-hover:drop-shadow-lg transition">
                  <Icon size={28} />
                </div>
                <h2 className="text-base sm:text-lg font-medium text-center text-[#F8FAFC] group-hover:text-[#2563EB]">
                  {f.text}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Barra animada inferior */}
        <div className="w-full mt-8">
          <div className="h-[3px] animate-loading bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />
        </div>

        {/* Botão Solicitar Serviços */}
        <div className="flex justify-center mt-10">
          <Link
            to="/contato"
            className="px-6 py-3 bg-[#2563EB] text-white rounded-lg shadow-md font-medium hover:bg-white hover:text-[#2563EB] transition transform hover:scale-105"
          >
            Solicitar Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}

import { FileText, DollarSign, FlaskConical, ShieldCheck } from "lucide-react"

const features = [
  { text: "Emissão de Certificados de Calibração", icon: FileText },
  { text: "Preço Acessível", icon: DollarSign },
  { text: "Laboratórios de Qualidade", icon: FlaskConical },
  { text: "Sistema de Qualidade", icon: ShieldCheck },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-white overflow-hidden px-4"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo.png')" }}
      />

      {/* Camada de leve escuridão para contraste do texto */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Pequeno degradê só embaixo */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#2563EB] to-transparent" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="w-full mb-8">
          <div className="h-[3px] animate-loading"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.text}
                className="bg-[#0F172A]/70 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center gap-3 border border-[#CBD5E1]/30"
              >
                <div className="text-[#2563EB]">
                  <Icon size={28} />
                </div>
                <h2 className="text-base sm:text-lg font-medium text-center text-[#F8FAFC]">
                  {f.text}
                </h2>
              </div>
            )
          })}
        </div>

        <div className="w-full mt-8">
          <div className="h-[3px] animate-loading"></div>
        </div>
      </div>
    </section>
  )
}

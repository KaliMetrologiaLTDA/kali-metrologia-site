import { useNavigate } from "react-router-dom"
import {
  Dumbbell,
  ThermometerSun,
  Ruler,
  Zap,
  Leaf,
  Gauge,
  Timer,
  Package,
} from "lucide-react"

const areas = [
  { name: "Força", icon: <Dumbbell size={32} /> },
  { name: "Temperatura e Umidade", icon: <ThermometerSun size={32} /> },
  { name: "Tempo/Rotação", icon: <Timer size={32} /> },
  { name: "Dimensional", icon: <Ruler size={32} /> },
  { name: "Elétrica", icon: <Zap size={32} /> },
  { name: "Saúde Ambiental", icon: <Leaf size={32} /> },
  { name: "Pressão", icon: <Gauge size={32} /> },
  { name: "Massa", icon: <Package size={32} /> },
]

export default function Areas() {
  const navigate = useNavigate()

  return (
    <section
      className="text-[#0F172A] py-16 px-4 md:px-8"
      style={{
        background: "linear-gradient(to bottom, #2563EB 0%, #EFF6FF 120px, #EFF6FF 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <hr className="border-[#CBD5E1]" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.name}
              onClick={() =>
                navigate(`/servicos?area=${encodeURIComponent(area.name)}`)
              }
              className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="text-[#2563EB]">{area.icon}</div>
              <h3 className="text-xl font-semibold">{area.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/servicos")}
            className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] transition text-white font-semibold rounded-xl shadow-lg"
          >
            Veja Serviços
          </button>
        </div>
      </div>
    </section>
  )
}

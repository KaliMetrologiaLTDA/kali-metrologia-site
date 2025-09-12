import React, { useState } from "react"
import { Search } from "lucide-react"

const services = {
  PRESSÃO: [
    "Manômetros de Processo",
    "Manômetros de Teste",
    "Manômetro Speed",
    "Transmissor de Pressão",
    "Módulo de Pressão",
    "Vacuômetro",
    "Pressostato",
    "Esfigmomanômetro",
    "Válvula de Segurança",
    "Manifold",
    "Fluxômetro",
    "Transdutor de Pressão",
    "Calibrador de Pneu",
    "Registrador Gráfico",
  ],
  "TEMPERATURA E UMIDADE": [
    "Termômetro Digital",
    "Termômetro de Haste",
    "Termo-higrômetro",
    "Termômetro Globo",
    "Pirômetro (Termômetro Infravermelho)",
    "Termorresistência PT-100",
    "Termopar",
    "Transmissor de Temperatura",
    "Controlador de Temperatura",
    "Forno Bloco Seco",
    "Autoclave",
    "Mufla",
    "Banho Maria",
    "Termômetro de Vidro",
    "Termostato",
  ],
  "TEMPO/ROTAÇÃO": [
    "Cronômetro",
    "Múltiplo Contador de Tempo",
    "Centrífuga",
    "Tacômetro",
    "Temporizador",
  ],
  DIMENSIONAL: [
    "Trena",
    "Goniômetro",
    "Paquímetro",
    "Micrômetro",
    "Espessímetro",
    "Transferidor de Ângulo",
    "Esquadro",
    "Escala Graduada",
    "Nível",
    "Peneira Granulométrica",
    "Relógio Comparador",
    "Relógio Apalpador",
    "Medidor de Película",
    "Medidor de Espessura",
    "Bloco Padrão de Ultrassom",
    "Medidor de Camada",
    "Estação Total",
    "Bloco Padrão",
    "Calibre de Solda",
  ],
  ELÉTRICA: [
    "Multímetro AC/DC",
    "Alicate Amperovoltimétrico",
    "Amperímetro",
    "Voltímetro",
    "Calibrador Loop",
    "Condutivímetro",
    "Detector de Tubulação",
    "Fonte de Alimentação",
    "Medidor de Ph",
    "Década Resistiva",
    "Terrômetro",
  ],
  "SAÚDE AMBIENTAL": [
    "Dosímetro de Ruído",
    "Decibelímetro",
    "Calibrador Acústico",
    "Bomba de Amostragem",
    "Luxímetro",
    "Detector de Gás",
    "Explosímetro",
    "Oxímetro",
  ],
  FORÇA: ["Torquímetro", "Dinamômetro", "Anel Dinamômetrico", "Prensa"],
  MASSA: ["Balança Prato", "Balança Digital", "Peso Padrão"],
}

const Services: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const areas = Object.keys(services)

  const allItems = areas.flatMap((area) =>
    services[area as keyof typeof services].map((item) => ({
      area,
      item,
    }))
  )

  const filteredItems = allItems.filter(({ item, area }) => {
    const matchesSearch = item.toLowerCase().includes(search.toLowerCase())
    const matchesArea = selectedArea ? area === selectedArea : true
    return matchesSearch && matchesArea
  })

  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-6xl mx-auto">
       <br />
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Pesquisar equipamento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-[#CBD5E1] shadow-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
          <Search
            className="absolute right-4 top-2.5 text-gray-400"
            size={20}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-3 py-2 rounded-md text-sm transition font-medium text-center ${
                selectedArea === area
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#DBEAFE] text-[#1E40AF] border border-[#2563EB] hover:bg-[#BFDBFE]"
              }`}
            >
              {area}
            </button>
          ))}
          <button
            onClick={() => setSelectedArea(null)}
            className="px-3 py-2 rounded-md text-sm bg-[#E2E8F0] text-[#475569] border border-[#CBD5E1] hover:bg-[#CBD5E1]"
          >
            Ver Todos
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredItems.map(({ item }, i) => (
            <div
              key={i}
              className="p-3 bg-white border border-[#CBD5E1] rounded-lg shadow-sm text-center text-sm hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

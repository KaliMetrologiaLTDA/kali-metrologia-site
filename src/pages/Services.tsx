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
  const [showSuggestions, setShowSuggestions] = useState(false)

  const areas = Object.keys(services)

  const allItems = areas.flatMap((area) =>
    services[area as keyof typeof services].map((item) => ({
      area,
      item,
    }))
  )

  const suggestions = search
    ? allItems.filter(({ item }) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const filteredServices = selectedArea
    ? { [selectedArea]: services[selectedArea as keyof typeof services] }
    : services

  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1E40AF] mb-8">
          Nossos Serviços de Calibração
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mb-10">
          <div className="flex flex-wrap md:gap-2 gap-2 overflow-x-auto max-w-full md:max-w-[65%] scrollbar-hide">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-1.5 rounded-md text-sm transition font-medium whitespace-nowrap ${
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
              className="px-3 py-1.5 rounded-md text-sm bg-[#E2E8F0] text-[#475569] border border-[#CBD5E1] hover:bg-[#CBD5E1] whitespace-nowrap"
            >
              Ver Todos
            </button>
          </div>

          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Pesquisar equipamento..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setShowSuggestions(true)
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="w-full px-4 py-2 rounded-full border border-[#CBD5E1] shadow-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-full mt-2 w-full bg-white text-[#0F172A] rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
                {suggestions.map(({ item, area }, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSearch(item)
                      setSelectedArea(area)
                      setShowSuggestions(false)
                    }}
                    className="px-4 py-2 hover:bg-[#F1F5F9] cursor-pointer flex items-center gap-2"
                  >
                    <Search size={16} className="text-gray-500" />
                    {item}{" "}
                    <span className="text-xs text-gray-500">({area})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(filteredServices).map(([area, items]) => (
            <div key={area}>
              <h3 className="text-2xl font-semibold text-[#2563EB] mb-4">
                {area}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items
                  .filter((item) =>
                    item.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item, i) => (
                    <li
                      key={i}
                      className="p-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg shadow hover:shadow-lg transition"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

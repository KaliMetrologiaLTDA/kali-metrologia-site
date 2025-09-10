import { useState } from "react";

const equipamentos = [
  { nome: "Foto Teste", imagem: "/fundo.png", descricao: "Descrição do equipamento" },
  { nome: "Foto Teste", imagem: "/fundo.png", descricao: "Descrição do equipamento" },
  { nome: "Foto Teste", imagem: "/fundo.png", descricao: "Descrição do equipamento" },
  { nome: "Foto Teste", imagem: "/fundo.png", descricao: "Descrição do equipamento" },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEquip, setSelectedEquip] = useState<any>(null);

  const abrirModal = (equip: any) => {
    setSelectedEquip(equip);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setSelectedEquip(null);
    setModalOpen(false);
  };

  return (
    <section className="bg-[#EFF6FF] text-[#0F172A] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipamentos.map((e, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg border border-gray-200"
              onClick={() => abrirModal(e)}
            >
              <img 
                src={e.imagem} 
                alt={e.nome} 
                className="w-full h-48 object-cover group-hover:scale-105 transition transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 opacity-0 group-hover:opacity-100 transition text-white text-sm text-center">
                {e.nome}
              </div>
            </div>
          ))}
        </div>

        {modalOpen && selectedEquip && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-4 max-w-lg w-full relative">
              <button 
                onClick={fecharModal} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
              >
                X
              </button>
              <img src={selectedEquip.imagem} alt={selectedEquip.nome} className="w-full h-auto object-cover rounded-xl" />
              <h3 className="mt-4 font-semibold text-lg text-center">{selectedEquip.nome}</h3>
              <p className="mt-2 text-gray-600 text-sm text-center">{selectedEquip.descricao}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { useState } from "react";

const certificates = [
  { src: "/fundo.png", alt: "Certificado ", description: "Laboratórios em conformidade com NBR ISO/IEC 17025" },
  { src: "/fundo.png", alt: "Certificado INMETRO ", description: "Reconhecimento oficial da competência técnica da Kali Metrologia pelo INMETRO" },
];

export default function CertificatesShowcase() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1E40AF]">Veja Nossos Certificados</h2>
        <p className="text-[#475569] mt-2">Clique na imagem para ampliar e conferir os detalhes de cada certificado.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.src}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg border border-[#CBD5E1]/30 hover:scale-105 transition transform"
            onClick={() => setSelectedCert(cert.src)}
          >
            <img src={cert.src} alt={cert.alt} className="w-full h-48 object-cover" />
            <p className="p-4 text-sm text-[#0F172A]">{cert.description}</p>
          </div>
        ))}
      </div>
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <img src={selectedCert} alt="Certificado ampliado" className="max-h-full max-w-full rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
}

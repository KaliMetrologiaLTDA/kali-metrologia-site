import { useState } from "react";

const certificates = [
 { src: "./images/fundo.png", alt: "Certificado ", description: "Laboratórios em conformidade com NBR ISO/IEC 17025" },
];

export default function CertificatesShowcase() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      
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

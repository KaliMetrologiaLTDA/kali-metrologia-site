export default function Highlight() {
  return (
    <section className="bg-[#2563EB] text-white py-16 px-6 md:px-12 rounded-xl shadow-lg relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/70 to-[#60A5FA]/30 -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            kalimetrologia
        </h2>
        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
          Na Kali Metrologia, cada equipamento é calibrado com máxima precisão.
        </p>
        <p className="text-sm md:text-base text-gray-100 leading-relaxed"> ISO/IEC 17025
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
    </section>
  )
}

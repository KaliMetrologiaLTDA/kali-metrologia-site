export default function About() {
  return (
    <section className="bg-[#EFF6FF] text-[#0F172A] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <hr className="border-[#CBD5E1]" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-[#475569] leading-relaxed">
              Os Laboratórios, com <strong>Sistema da Qualidade</strong> em conformidade com a Norma <br />
              <strong> NBR ISO/IEC 17025</strong>, atendem plenamente aos requisito
            </p>
            <a
              href="https://wa.me/557133099282?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-xl shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Solicitar Orçamento
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/fundo.png"
              alt="Laboratórios da Kali"
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

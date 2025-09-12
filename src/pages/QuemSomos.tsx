export default function QuemSomos() {
  return (
    <section className="bg-[#EFF6FF] text-[#0F172A] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-[#1E40AF]">
          Quem Somos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative space-y-4 text-[#475569] leading-relaxed pl-6 md:pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E40AF] rounded"></div>

            <p>
              A <strong className="text-[#1E40AF]">Kali Metrologia</strong> foi fundada em{" "}
              <strong className="text-[#1E40AF]">05 de agosto de 2013</strong>, em Salvador/BA, com a missão
              de oferecer soluções em metrologia e ensaios de alta qualidade.
            </p>
            <p>
              Localizada na <strong className="text-[#1E40AF]">Rua São João, 221 E – Águas Claras</strong>, a
              empresa possui infraestrutura completa, com{" "}
              <strong className="text-[#1E40AF]">laboratórios em conformidade com a norma NBR ISO/IEC 17025</strong>.
            </p>
            <p>
              Desde sua fundação, a Kali Metrologia vem atendendo diferentes
              segmentos como <strong className="text-[#1E40AF]">indústria, saúde, alimentos, petróleo e gás e construção civil</strong>, sempre prezando pela qualidade, inovação
              e melhoria contínua.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="./images/fundo.png"
              alt="Equipe Kali Metrologia"
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px]"
            />
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border border-[#CBD5E1] text-left text-[#0F172A]">
            <thead className="bg-[#1E40AF] text-white">
              <tr>
                <th className="px-4 py-3">Imagem</th>
                <th className="px-4 py-3">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-t border-[#CBD5E1] hover:shadow-md transition-shadow duration-200">
                <td className="px-4 py-3">
                  <img
                    src="/certificado1.png"
                    alt="Certificado INMETRO 1"
                    className="w-32 rounded shadow"
                  />
                </td>
                <td className="px-4 py-3">
                  Laboratórios em conformidade com NBR ISO/IEC 17025.
                </td>
              </tr>
              <tr className="bg-[#F8FAFC] border-t border-[#CBD5E1] hover:shadow-md transition-shadow duration-200">
                <td className="px-4 py-3">
                  <img
                    src="/certificado2.png"
                    alt="Certificado INMETRO 2"
                    className="w-32 rounded shadow"
                  />
                </td>
                <td className="px-4 py-3">
                  Reconhecimento oficial da competência técnica da Kali
                  Metrologia pelo INMETRO.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

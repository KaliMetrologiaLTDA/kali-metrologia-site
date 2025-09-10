import { Linkedin, MapPin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1E40AF] text-white py-12 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0">
        
        {/* Logo e descrição */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="relative flex items-center justify-center p-3 rounded-lg bg-[#F8FAFC] border border-[#2563EB] shadow-md group">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB]/30 to-[#60A5FA]/20 blur-md opacity-60 group-hover:opacity-100 transition" />
            <img
              src="/logo.png"
              alt="Kali Metrologia"
              className="h-16 w-16 object-contain relative z-10"
            />
          </div>
          <p className="text-sm text-gray-300 max-w-xs text-center md:text-left">
            Excelência em metrologia e ensaios desde 2013.<br />
            Compromisso com qualidade, inovação e confiança.
          </p>
        </div>

        {/* Links úteis */}
        <div className="flex flex-col gap-2 text-sm font-medium text-center md:text-left">
          <Link to="/politica-privacidade" className="hover:text-[#93C5FD] transition">
            Política & Privacidade
          </Link>
          <Link to="/quem-somos" className="hover:text-[#93C5FD] transition">
            Veja os Certificados
          </Link>
        </div>

        {/* Contatos e redes */}
        <div className="flex flex-col gap-2 items-center md:items-end">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/kali-metrologia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#93C5FD] transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://maps.google.com/?q=Rua+São+João,+221,+Águas+Claras,+Salvador+BA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#93C5FD] transition"
            >
              <MapPin size={22} />
            </a>
            <a
            href="mailto:kalimetrologia@hotmail.com"
            className="hover:text-[#93C5FD] transition">
            <Mail size={22} />
            </a>

          </div>
          <p className="text-xs text-gray-300 mt-2 text-center md:text-right">
            © {new Date().getFullYear()} Kali Metrologia | CNPJ: 18.614.463/0001-09<br/>
            Rua São João, 221, Águas Claras, Salvador - BA
          </p>
        </div>

      </div>
    </footer>
  )
}

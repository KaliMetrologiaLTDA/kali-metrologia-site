import { Linkedin, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1E40AF] text-white py-12 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Logo com fundo claro */}
        <div className="relative flex items-center justify-center p-3 rounded-lg bg-[#F8FAFC] border border-[#2563EB] shadow-md group">
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB]/30 to-[#60A5FA]/20 blur-md opacity-60 group-hover:opacity-100 transition" />
          <img
            src="/logo.png"
            alt="Kali Metrologia"
            className="h-16 w-16 object-contain relative z-10"
          />
        </div>

        {/* Descrição */}
        <p className="text-sm text-gray-300 max-w-md">
          Excelência em metrologia e ensaios desde 2013.  
          Compromisso com qualidade, inovação e confiança.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/politica-privacidade"
            className="hover:text-[#93C5FD] transition"
          >
            Política & Privacidade
          </Link>
          <Link
            to="/quem-somos"
            className="hover:text-[#93C5FD] transition"
          >
            Veja os Certificados
          </Link>
        </div>

        {/* Direitos reservados + CNPJ */}
        <div className="text-xs text-gray-300">
          © {new Date().getFullYear()} Kali Metrologia | CNPJ: 12.345.678/0001-99
        </div>

        {/* Ícones sociais */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/company/kali-metrologia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#93C5FD] transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://maps.google.com/?q=Rua+São+João,+221E,+Águas+Claras,+Salvador"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#93C5FD] transition"
          >
            <MapPin size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

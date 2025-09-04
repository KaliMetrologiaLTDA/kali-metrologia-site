import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#2563EB]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center px-2 py-1 rounded-lg bg-[#F8FAFC] border border-[#2563EB] shadow-md relative group"
        >
          {/* brilho */}
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB]/30 to-[#60A5FA]/20 blur-md opacity-60 group-hover:opacity-100 transition" />
          
          <img
            src="/logo.png"
            alt="Kali Metrologia"
            className="h-12 w-12 object-contain relative z-10"
          />
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-3">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1E40AF] transition shadow-sm"
          >
            Início
          </Link>
          <Link
            to="/servicos"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1E40AF] transition shadow-sm"
          >
            Serviços
          </Link>
          <Link
            to="/quem-somos"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1E40AF] transition shadow-sm"
          >
            Quem Somos
          </Link>
          <Link
            to="/contato"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1E40AF] transition shadow-sm"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

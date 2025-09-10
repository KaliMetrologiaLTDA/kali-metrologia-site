import { Link } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const contatos = [
    { name: "Atendimento", phone: "557133099282" },
    { name: "RH", phone: "557133099282" },
    { name: "Atendimento", phone: "557133099282" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-[#2563EB]/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center px-2 py-1 rounded-lg bg-[#F8FAFC] border border-[#2563EB] shadow-md relative group"
        >
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2563EB]/30 to-[#60A5FA]/20 blur-md opacity-60 group-hover:opacity-100 transition" />
          <img
            src="/logo.png"
            alt="Kali Metrologia"
            className="h-12 w-12 object-contain relative z-10"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-white hover:text-[#2563EB] transition shadow-sm"
          >
            Início
          </Link>
          <Link
            to="/servicos"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-white hover:text-[#2563EB] transition shadow-sm"
          >
            Serviços
          </Link>
          <Link
            to="/quem-somos"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-white hover:text-[#2563EB] transition shadow-sm"
          >
            Quem Somos
          </Link>
          <Link
            to="/contato"
            className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-sm font-medium hover:bg-white hover:text-[#2563EB] transition shadow-sm"
          >
            Contato
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#25D366] text-white text-sm font-medium hover:bg-white hover:text-[#25D366] transition shadow-sm"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white text-[#0F172A] rounded-md shadow-lg border border-gray-200 z-50">
                {contatos.map((c, i) => (
                  <li key={i}>
                    <a
                      href={`https://wa.me/${c.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-[#25D366] hover:text-white transition"
                    >
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

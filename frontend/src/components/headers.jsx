import { LayoutGrid } from "lucide-react";
import { useState } from "react";
import "./Header.css";
import "./Article.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Header() {
  // ✅ State hooks for modal control
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <header className="head-style w-full fixed top-0 left-0 z-10 border-b shadow-md">
      <div className="max-w-7xl text-white mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=256&q=75"
            alt="Nail IB"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
              filter: "drop-shadow(0 0 6px rgba(79, 172, 254, 0.7))",
            }}
          />
          <span className="text-xl font-semibold text-white">Nail IB</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="nav-link text-white">
            IB Resources
          </a>
          <a href="#enterprise" className="nav-link text-white">
            Schools
          </a>
          <a href="#careers" className="nav-link text-white">
            Past Papers
          </a>
          <a href="#help" className="nav-link text-white">
            Question Bank
          </a>
          <a href="#help" className="nav-link text-white">
            Pricing
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="flex logIn items-center space-x-2 rounded-md bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800"
            onClick={() => setShowLogin(true)}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Login</span>
          </button>

          <button
            className="flex items-center space-x-1 rounded-md bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800"
            onClick={() => setShowRegister(true)}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Register</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </header>
  );
}

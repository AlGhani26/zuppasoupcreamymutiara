"use client";

import React, { useState } from "react";
import { useOrderModal } from "@/components/OrderModalProvider";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { openOrderModal } = useOrderModal();

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm bg-surface">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 max-w-[1280px] mx-auto">
        <a
          href="#"
          className="text-headline-lg text-primary truncate max-w-[220px] sm:max-w-[300px] md:max-w-none"
        >
          Zuppa Soup Creamy Pondok Mutiara
        </a>

        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#menu"
            className="text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Menu
          </a>
          <a
            href="#location"
            className="text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Location
          </a>
          <a
            href="#contact"
            className="text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="#about"
            className="text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Tentang Kami
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={openOrderModal}
            className="bg-primary text-on-primary px-6 py-2 rounded-lg text-label-md active:scale-95 transition-transform shadow-sm hover:opacity-90 md:flex hidden"
          >
            Order Now
          </button>
          <button
            className="p-1 hover:bg-surface-container rounded-full md:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileNavOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-6 py-4 space-y-4">
          <a
            href="#menu"
            className="block text-label-md text-on-surface-variant hover:text-primary"
            onClick={() => setMobileNavOpen(false)}
          >
            Menu
          </a>
          <a
            href="#location"
            className="block text-label-md text-on-surface-variant hover:text-primary"
            onClick={() => setMobileNavOpen(false)}
          >
            Location
          </a>
          <a
            href="#contact"
            className="block text-label-md text-on-surface-variant hover:text-primary"
            onClick={() => setMobileNavOpen(false)}
          >
            Contact
          </a>
          <a
            href="#about"
            className="block text-label-md text-on-surface-variant hover:text-primary"
            onClick={() => setMobileNavOpen(false)}
          >
            Tentang Kami
          </a>
          <button
            onClick={() => {
              setMobileNavOpen(false);
              openOrderModal();
            }}
            className="block w-full bg-primary text-on-primary px-6 py-2 rounded-lg text-label-md text-center"
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;

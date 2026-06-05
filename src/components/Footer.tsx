import React from "react";

const Footer = () => (
  <footer className="bg-inverse-surface text-inverse-on-surface pt-16 pb-8" id="contact">
    <div className="px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-headline-md text-inverse-primary mb-4">
            Zuppa Soup Creamy
          </h3>
          <p className="text-sm text-inverse-on-surface/70">
            Kelezatan rumahan yang dibuat dengan bahan premium. Siap menemani
            momen spesial Anda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-label-md text-inverse-primary mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-inverse-on-surface/70">
            <li>
              <a href="#menu" className="hover:text-inverse-primary transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-inverse-primary transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-inverse-primary transition-colors">
                Lokasi
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-label-md text-inverse-primary mb-4">Alamat</h4>
          <p className="text-sm text-inverse-on-surface/70">
            Jl.Pondok Mutiara IV No.2, Cibabat
            <br />
            40513, Kota Cimahi
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-label-md text-inverse-primary mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-inverse-on-surface/70">
            <li>
              <span className="block">Telepon Kami</span>
              <a
                href="tel:+6281223423406"
                className="hover:text-inverse-primary transition-colors"
              >
                +62 812 2342 3406
              </a>
            </li>
            <li>
              <span className="block">Email</span>
              <a
                href="mailto:yantiheryanti08@gmail.com"
                className="hover:text-inverse-primary transition-colors"
              >
                yantiheryanti08@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-inverse-on-surface/20 pt-8 text-center text-sm text-inverse-on-surface/50">
        <p>
          &copy; {new Date().getFullYear()} Zuppa Soup Creamy Pondok Mutiara.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

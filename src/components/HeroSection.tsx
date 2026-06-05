"use client";

import React from "react";
import { UtensilsCrossed } from "lucide-react";
import { useOrderModal } from "@/components/OrderModalProvider";

const HeroSection = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <section className="relative overflow-hidden px-6 max-w-[1280px] mx-auto mb-20 lg:mb-32 pt-24 lg:pt-32">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="z-10 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-headline-xl text-primary mb-6 leading-tight">
            Kehangatan Zuppa Soup Creamy Pondok Mutiara
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Kelezatan rumahan yang dibuat dengan bahan premium. Siap menemani
            momen spesial Anda dengan tekstur pastry yang renyah dan krim sup
            yang kaya rasa.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#menu"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
            >
              Lihat Menu
              <span className="material-symbols-outlined">
                <UtensilsCrossed />
              </span>
            </a>
            <button
              onClick={openOrderModal}
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-label-md hover:bg-secondary/5 transition-all active:scale-95"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>

        <div className="relative order-1 md:order-2 h-64 sm:h-80 md:h-[400px] lg:h-[600px] group">
          <div className="absolute inset-0 bg-secondary-fixed opacity-20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-1 transition-transform duration-700"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Gourmet Burger and Zupa Soup"
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA56t-Rt64ax7S_4LeDqMGlDse_gV5SAPLh7CYHsS9V8L0glmzDsKj5l4QYGMMnZ3HkNHyivV_6WCWDld5qbtSrIUorhhs2tcKRqFk5XLhfSAFuqrA7cY_t5sR4awmIbyxmnJ6AoPmKvkPs78tyD9LFVNz7m7hsJOVShI0-1b08CqJkpbjh0WMMKxiSQXYVNX1LZwUvmqpicvJEkiEzNY3bf0CboNlyaC06X7DJKOW5SFGRNvfseYAk2Z69Vq4YxWFbJ0M4S-rpLNrn"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

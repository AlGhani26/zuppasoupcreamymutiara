"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, MessageCircle, ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "GrabFood",
    logo: "/grabfood-logo.svg",
    url: "https://r.grab.com/g/6-20260604_161739_f1fb2f363491486aa221098f3ea78fa0_MEXMPS-6-C2AVVK51VAKBA6",
  },
  {
    name: "GoFood",
    logo: "/gofood-logo.svg",
    url: "https://gofood.co.id/en/bandung/restaurant/zuppa-soup-creamy-pondok-mutiara-4-f1565c87-afb7-4eb6-9380-0e52a6aeb9c4",
  },
  {
    name: "ShopeeFood",
    logo: "/shopee-food-logo.svg",
    url: "https://shopee.co.id/universal-link/now-food/shop/1053663?deep_and_deferred=1&shareChannel=copy_link",
    isMobileOnly: true,
  },
];

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface rounded-3xl shadow-2xl overflow-hidden animate-[modalSlideUp_0.35s_cubic-bezier(0.16,1,0.3,1)] border border-outline-variant/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-surface-container flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-on-surface-variant" />
        </button>

        {/* Content */}
        <div className="px-8 pt-8 pb-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm mb-4 inline-block">
              Pesan Sekarang
            </span>
            <h3 className="text-headline-lg text-on-surface mb-1">
              Mau Pesan Lewat Mana?
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Pilih platform favoritmu untuk memesan
            </p>
          </div>

          {/* Platform Cards */}
          <div className="space-y-3 mb-6">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if ((p as any).isMobileOnly) {
                    const isMobile =
                      typeof window !== "undefined" &&
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      );
                    if (!isMobile) {
                      e.preventDefault();
                      alert(
                        "Link ShopeeFood ini khusus untuk Mobile App.\n\nSilakan buka website ini melalui HP Anda, atau buka aplikasi Shopee dan cari 'Zuppa Soup Creamy Pondok Mutiara'."
                      );
                    }
                  }
                }}
                className="group flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:shadow-md transition-all active:scale-[0.98]"
              >
                {/* Logo */}
                <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 p-1.5 border border-outline-variant/10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-label-md text-on-surface font-semibold">
                    {p.name}
                  </h4>
                  <p className="text-label-sm text-on-surface-variant">
                    Pesan via {p.name}
                  </p>
                </div>

                {/* Arrow */}
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-on-primary" />
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-outline-variant/30" />
            <span className="text-label-sm text-on-surface-variant">atau</span>
            <div className="flex-1 h-px bg-outline-variant/30" />
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6281223423406"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp Langsung
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default OrderModal;

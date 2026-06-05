"use client";
import React from "react";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

const LocationSection = () => (
  <section
    className="relative bg-surface-container-low pt-6 pb-12 lg:pt-10 lg:pb-20 overflow-hidden"
    id="location"
  >

    <div className="relative z-10 px-6 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-label-sm mb-5 font-bold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(8px)",
            color: "var(--color-primary)",
            border: "1px solid rgba(198, 79, 0, 0.15)",
          }}
        >
          <Navigation className="w-3.5 h-3.5" />
          Kunjungi Kami
        </span>
        <h2 className="text-headline-xl text-on-surface">
          Temukan <span className="text-primary">Lokasi</span> Kami
        </h2>
        <p className="text-body-lg text-on-surface-variant mt-3 max-w-lg mx-auto">
          Datang langsung dan rasakan kelezatan sup kreami kami yang dibuat fresh
          setiap hari
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
        {/* Info Cards Column */}
        <div className="md:col-span-1 lg:col-span-2 space-y-5">
          {/* Location Card */}
          <div
            className="group rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div className="flex gap-4 items-start">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
                  boxShadow: "0 4px 12px rgba(158, 61, 0, 0.25)",
                }}
              >
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-label-md text-primary mb-1.5 font-bold">
                  Alamat
                </h4>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Jl. Pondok Mutiara IV No.2
                  <br />
                  Cibabat, Kota Cimahi
                  <br />
                  <span className="text-on-surface font-medium">
                    40513, Indonesia
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div
            className="group rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div className="flex gap-4 items-start">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-secondary), #a08200)",
                  boxShadow: "0 4px 12px rgba(115, 92, 0, 0.25)",
                }}
              >
                <Clock className="text-white w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-label-md text-secondary mb-1.5 font-bold">
                  Jam Operasional
                </h4>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-body-md text-on-surface-variant">
                      Senin – Minggu
                    </span>
                    <span className="text-label-md text-on-surface font-semibold bg-secondary-container/40 px-3 py-0.5 rounded-full text-[13px]">
                      Buka 24 Jam
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-label-sm text-green-700 font-semibold">
                    Buka Sekarang
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div
            className="group rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <div className="flex gap-4 items-start">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-tertiary), #3a5068)",
                  boxShadow: "0 4px 12px rgba(76, 94, 113, 0.25)",
                }}
              >
                <Phone className="text-white w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-label-md text-tertiary mb-1.5 font-bold">
                  Hubungi Kami
                </h4>
                <p className="text-body-md text-on-surface-variant mb-3">
                  +62 812-2342-3406
                </p>
                <a
                  href="https://wa.me/6281223423406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-label-md text-white transition-all active:scale-95 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #25d366, #128c7e)",
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="md:col-span-1 lg:col-span-3 relative">
          <div
            className="relative h-96 lg:h-full min-h-[440px] rounded-3xl overflow-hidden group"
            style={{
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* Map border glow */}
            <div
              className="absolute -inset-px rounded-3xl z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6), transparent 50%, rgba(198,79,0,0.1))",
              }}
            />
            <iframe
              src="https://maps.google.com/maps?q=-6.876720959172517,107.55858263221718&z=17&output=embed"
              className="w-full h-full border-0 relative z-10"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Zuppa Soup Creamy Pondok Mutiara"
            />

            {/* Floating badge on map */}
            <div
              className="absolute bottom-5 left-5 z-30 flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.8)",
              }}
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-primary-container))",
                }}
              >
                <MapPin className="text-white w-4 h-4" />
              </div>
              <div>
                <p className="text-label-md text-on-surface font-bold leading-tight">
                  Zuppa Soup Creamy
                </p>
                <p className="text-label-sm text-on-surface-variant">
                  Pondok Mutiara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </section>
);

export default LocationSection;

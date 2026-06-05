"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "GrabFood",
    logo: "/grabfood-logo.svg",
    url: "https://r.grab.com/g/6-20260604_161739_f1fb2f363491486aa221098f3ea78fa0_MEXMPS-6-C2AVVK51VAKBA6",
    desc: "Pesan via aplikasi Grab",
  },
  {
    name: "GoFood",
    logo: "/gofood-logo.svg",
    url: "https://gofood.co.id/en/bandung/restaurant/zuppa-soup-creamy-pondok-mutiara-4-f1565c87-afb7-4eb6-9380-0e52a6aeb9c4",
    desc: "Pesan via aplikasi Gojek",
  },
  {
    name: "ShopeeFood",
    logo: "/shopee-food-logo.svg",
    url: "https://shopee.co.id/universal-link/now-food/shop/1053663?deep_and_deferred=1&shareChannel=copy_link",
    desc: "Pesan via aplikasi Shopee",
    isMobileOnly: true,
  },
];

const OrderPlatforms = () => (
  <section className="bg-surface-container-low py-12 lg:py-20" id="order">
    <div className="px-6 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm mb-4 inline-block">
          Delivery
        </span>
        <h2 className="text-headline-lg text-on-surface mb-3">
          Pesan Lewat Platform Favorit
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Pilih platform favoritmu dan nikmati Zuppa Soup Creamy langsung di
          rumah
        </p>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (p.isMobileOnly) {
                // Basic mobile detection
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
            className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-outline-variant/20 group flex flex-col items-center text-center"
          >
            <div className="h-20 w-20 rounded-2xl bg-surface-container-low flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 p-3">
              <Image
                src={p.logo}
                alt={p.name}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-headline-md text-on-surface mb-1">
              {p.name}
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              {p.desc}
            </p>
            <span className="mt-auto inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-2 rounded-lg text-label-md hover:opacity-90 transition-all active:scale-95">
              Pesan Sekarang
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>

      {/* WhatsApp alternative */}
      <div className="text-center">
        <p className="text-body-md text-on-surface-variant mb-4">
          Mau pesan langsung atau ada pertanyaan?
        </p>
        <a
          href="https://wa.me/6281223423406"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg text-label-md hover:opacity-90 transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default OrderPlatforms;

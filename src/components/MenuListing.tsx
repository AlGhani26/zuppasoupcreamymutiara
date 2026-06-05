"use client";

import React, { useState } from "react";

const menuTabs = [
  { id: "zupa", label: "Zupa Zupa" },
  { id: "burger", label: "Burgers" },
  { id: "sides", label: "Sides & Pasta" },
];

const zupaAyamItems = [
  {
    name: "Zupa Ayam + Jagung",
    desc: "Potongan daging ayam lembut dengan jagung manis dalam krim sup kental.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL-nZmQevUeCw9lTxzBKENfTB_bjtLJIpUZ7wM7pWrEgyrai2JrXqvp_0n4AVrO4HfUoLUg6jgsoI6r5wUB8VTEUCDvbGlowKB7vaPKj1nDqBvSRNUzaGVcFtFakKKxiiAGssGLNp-swlxn72v0Dq-qDwRLd6rlmkH9njnO7xA9HylI9l3OwmoGs4yToTOrnxkjG1cBfdWhpx5S9dg3KWBtPeaW9sifCYfqm4RBFvQr6_CUQEyLucjuzr0-a7DM_OxkmOgxoHL98_L",
    priceLg: "Rp 28.000",
    priceMd: "Rp 18.000",
    badge: "FAVORIT",
  },
  {
    name: "Zupa Sosis Ayam + Jagung",
    desc: "Lezatnya sosis ayam premium berpadu dengan jagung manis pilihan.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBpssBiqnaNq67LDtn2OSBJ3ynkvAb5y1Q6gJThfsuJjjnBhXFmOCr7n7h_Rwg5eNWbeM8JtMlGRvTf96tUTIWahA2x2pPs6R4xltjeXC3fbjr0CAWVmsFCBA10yaDX2cwCSXJlNR7Qs5rGq7F1ipnyh9S6plqPjmDLkp8LnmFVowwqvvmM5QR6p64pE4HB8u0vFkG541W-lNlZcQK_9MBcAotcvFMBNWwo5JQQs-XrB2TGh1D8gLv25otOEBXBrt5VAP-cnrF6Mtk",
    priceLg: "Rp 28.000",
    priceMd: "Rp 20.000",
  },
  {
    name: "Zupa Mix Ayam",
    desc: "Perpaduan lengkap: ayam, sosis ayam, dan jagung untuk rasa maksimal.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4IC_UVKC_JZuRWgk9qGjJAudJlMpi_G1hdSOSgfpQ66sz8lT_a0qFWB_TJkiorgYNsq8l5wnqNwLQvNHODVY_flnUlLkpeuIQpATyDhctrgIWPlXjFBJZBhcvVtAiBWHJl1zqhUh_NO411b_2lvYhQ7KNBIwNnangQtLkbZdrtYB2Xw-QJY5RbnYMp7AhAObZAQPdg408RNFhGfeugpUv2HyNBdTwcxV4_GI8FAwpOdAl80NSQZqiClOHca5pHDcKl0BVExIGJpDQ",
    priceLg: "Rp 35.000",
    priceMd: "Rp 25.000",
  },
];

const zupaSapiItems = [
  {
    name: "Zupa Smoke Beef + Jagung",
    desc: "Daging sapi asap berkualitas dengan aroma smoky dan jagung manis.",
    img: "/zupa_smoke_beef.png",
    priceLg: "Rp 32.500",
    priceMd: "Rp 20.000",
  },
  {
    name: "Zupa Sosis Sapi + Jagung",
    desc: "Sosis sapi premium dengan tekstur padat dalam balutan krim sup lezat.",
    img: "/zupa_sosis_sapi.png",
    priceLg: "Rp 28.000",
    priceMd: "Rp 20.000",
  },
  {
    name: "Zupa Mix Sapi",
    desc: "Kombinasi smoke beef, sosis sapi, dan jagung untuk pencinta daging sapi.",
    img: "/zupa_mix_sapi.png",
    priceLg: "Rp 35.000",
    priceMd: "Rp 25.000",
  },
];

interface ZupaItem {
  name: string;
  desc: string;
  img: string;
  priceLg: string;
  priceMd: string;
  badge?: string;
}

const ZupaCard = ({ item }: { item: ZupaItem }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 food-card-hover border border-outline-variant/10">
    <div className="h-56 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-full h-full object-cover food-image transition-transform duration-500"
        src={item.img}
        alt={item.name}
      />
    </div>
    <div className="p-6">
      {item.badge ? (
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-headline-md">{item.name}</h4>
          <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded font-bold shrink-0 ml-2">
            {item.badge}
          </span>
        </div>
      ) : (
        <h4 className="text-headline-md mb-2">{item.name}</h4>
      )}
      <p className="text-on-surface-variant text-body-md mb-4">{item.desc}</p>
      <div className="space-y-2 border-t border-outline-variant pt-4">
        <div className="flex justify-between items-center">
          <span className="text-label-sm">Size Large</span>
          <span className="font-bold text-primary">{item.priceLg}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-label-sm">Size Medium</span>
          <span className="font-bold text-primary">{item.priceMd}</span>
        </div>
      </div>
    </div>
  </div>
);

const MenuListing = () => {
  const [activeTab, setActiveTab] = useState("zupa");

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="scroll-mt-32">
      {/* Category Navigation (Pills) */}
      <nav className="sticky top-[72px] z-40 bg-surface/80 backdrop-blur-md py-4 mb-12">
        <div className="flex justify-start md:justify-center gap-4 px-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-6 py-2 rounded-full text-label-md hover:shadow-sm transition-all ${activeTab === tab.id
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-surface-variant text-on-surface-variant hover:bg-surface-container-high"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section 1: Zupa Zupa */}
      <section
        className="px-6 max-w-[1280px] mx-auto mb-20 scroll-mt-40"
        id="zupa"
      >
        <div className="flex items-end justify-between mb-8 border-b border-outline-variant pb-4">
          <div>
            <span className="text-primary text-label-md uppercase tracking-widest">
              The Signature
            </span>
            <h2 className="text-headline-lg">Zupa Zupa</h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-label-sm text-on-surface-variant italic">
              Available in Glass Bowl (Large) or Foil (Medium)
            </p>
          </div>
        </div>

        {/* Category: Zupa isi Ayam */}
        <div className="mb-16">
          <h3 className="text-headline-md text-primary mb-8 border-l-4 border-primary pl-4">
            Zupa isi Ayam
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {zupaAyamItems.map((item) => (
              <ZupaCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Category: Zupa isi Sapi */}
        <div>
          <h3 className="text-headline-md text-primary mb-8 border-l-4 border-primary pl-4">
            Zupa isi Sapi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {zupaSapiItems.map((item) => (
              <ZupaCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuListing;

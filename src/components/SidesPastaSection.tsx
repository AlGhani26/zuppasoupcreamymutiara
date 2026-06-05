import React from "react";

const sides = [
  {
    name: "Macaroni Schotel",
    desc: "Old-fashioned baked macaroni dengan smoked beef, nutmeg, dan kerak tebal dari tiga campuran keju.",
    price: "Rp 25.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWeV9WyVPj_S_2Bd-TayrvQHxzhO5oNtCTnUd828B2qICltCWSIdk-WpS-FDfq3nnxzw_-M0eef6u_mMRF2uNGnuzDH1tbTUu3C209ZRW-YSDzNvVYUQkTkCwklKDdvROA5for6snGRO0FVXadh0RCaYW6LEExz8bAjyEcA39PKmc1ZRlM1G8v8v792YpF8yqalrjsG80ZSmLZcqssCMdzgQZy_avjFQAAvE6Dom30i51NxPVLx-xr_c_tGz_m2IUiYtrCBDN1kZuW",
    tags: ["Cheesy", "Oven Baked"],
  },
  {
    name: "Kentang Wedges",
    desc: "Hand-cut potato wedges, double-fried for maximum crunch and seasoned with our secret sea-salt herb blend.",
    price: "Rp 22.500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlSxTNWwxr7r0cEB_zcnZCj8IguYJMHBeO5dSkurkenTon__vHrUuTJGHAZXniQ5WqtnWJwWnXFRRoj3kMm5hyK1kniy2PVNE3BiBcXiS4tTBnvtqkVbB5BQVcNBPhcab4FyFwyFUfAhhfycESvSyH1JT_mbGdP-mABxvqIhRTCQn1n0yGUJbNhr1zUUTMjsbwQvE8CJOgDFjkiR_53pT--Wy2f0XbOrOLqAUGRwjhSNDfKe8wKUuOVJsDcsLJGGp3W9CjK1qYhlQL",
    tags: ["Hand-Cut", "Herbed"],
  },
];

const SidesPastaSection = () => (
  <section
    className="px-6 max-w-[1280px] mx-auto py-12 lg:py-20 scroll-mt-40"
    id="sides"
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-headline-lg shrink-0">Sides &amp; Pasta</h2>
      <div className="h-px bg-outline-variant w-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {sides.map((item) => (
        <div
          key={item.name}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-full md:w-2/5 aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="w-full md:w-3/5">
            <h3 className="text-headline-md mb-2">{item.name}</h3>
            <p className="text-on-surface-variant text-body-md mb-4">
              {item.desc}
            </p>
            <p className="text-headline-md text-primary mb-4">{item.price}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary-fixed text-on-primary-fixed text-[12px] px-3 py-1 rounded-full font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SidesPastaSection;

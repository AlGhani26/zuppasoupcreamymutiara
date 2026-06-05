import { Flame } from "lucide-react";
import React from "react";

const burgers = [
  {
    name: "Classic Beef",
    desc: "100% Angus beef patty, cheddar cheese, secret sauce, and fresh greens on brioche.",
    price: "Rp 65.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARRMaytimZ_HP840bkLvSa20XJJhSHSMlC9hUGixbKaitlPUgH83gn_Ud9w39X4dG1Km6h8jxCi9MlX9LTj6UZpXCVlS-1GcvnBjF6UFdGtXiE9KjsKQYbm0roVAsgzCSIOs44nz3qrllpROLjlDQYEvUV4dwhs3WQH_SyKS4R6MVRtGRwcqZqVgWqlBPC8m3FHZiS20lEV-L1SH8N-6_WZYxoOLB15PYIgaUTQN6vJ-4R6-zBmk1NK8h8S1GOMvkv7g6cM7i7xoKM",
  },
  {
    name: "Crispy Burger",
    desc: "Double-breaded golden chicken thigh dengan honey mustard dan tangy slaw.",
    price: "Rp 58.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmzhZoNEV25-k0PUmSr9ZqZQhZVll-u782L5_EHlM3RaIlQu--ontxJLXYClZGUXHzOcruqYJdjgnK9pB6aeCLC1xiGEk2RgOdg9QPbzTF3b1-G54meWWmeyHOgm_J62PqgoToB9K3kZR3fkIE6iL-I4y7335AwcaWnZobic09CDQz4HNuV3EvEFfsNx7UMqMw8KJqdT5PkHTJx76GrT24-rjGE1yqBujLIqFXHFMRvTAV2x2VyXtVhHnfzckLA3uamOrVfIK_sHQc",
  },
  {
    name: "Chicken Burger",
    desc: "Flame-grilled herb-marinated chicken breast dengan avocado dan mayo.",
    price: "Rp 55.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu3k-s-XRlNCQBNhW4_cDfnL4YDVfQAz9S2YGMN_-CzMcRkJ4LgmXsXAwGwu3CZMBp_k1iihx1i89nkRodqBuk-IiwrWerKQR-h9L4ryqiWR0Yix09_-xzI6U8bwREJSjc-6J9h-TBBD3ZTc4Y4TwUUzi2Tounz1ncX3WE8D6zbZsV574SwIPPgXEPIPqD_XV5rdygarG0IZdD5DDdhb6Ylgep9buGwyQ1I5WwzTSPcqV6FPNhDmUbdWwOiuLL6N2sEF65Khf-GVgy",
  },
  {
    name: "Smoke Beef",
    desc: "Signature beef patty ditaburi smoked brisket slices dan BBQ drizzle.",
    price: "Rp 72.000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwanG25Ch-cbTO8x65V1UYV13VsbTQFFimiliIYflYWbkP_pddmzeBwLvvgIn4SVNURNw_kHPgoPGwDIMTJZjWclGjhOw2BwtQsPp42K6wu73nWEfVQUYfcuW3kiCrRlJUfqj_AsFoCKawfTnoQQP_SOeuyfZkgDtXKL0vjSwuy8OYyGLeTcrajKAA5RDJtme2gh-I-SdwPb2yVktQqsQ9lReUmsXGzA6cF89frg2pNyHbEiqyv28YwVFEmB2nlBKKYBU-xcrhDRCk",
    hot: true,
  },
];

const BurgerSection = () => (
  <section className="bg-surface-container py-12 lg:py-20 scroll-mt-40" id="burger">
    <div className="px-6 max-w-[1280px] mx-auto">
      <div className="mb-12 text-center">
        <span className="text-primary text-label-md uppercase tracking-widest">
          Grilled to Perfection
        </span>
        <h2 className="text-headline-lg">Premium Burgers</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {burgers.map((burger) => (
          <div
            key={burger.name}
            className="bg-white flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="md:w-1/2 overflow-hidden h-56 sm:h-64 md:h-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={burger.img}
                alt={burger.name}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-headline-md">{burger.name}</h3>
                {burger.hot && (
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    <Flame />
                  </span>
                )}
              </div>
              <p className="text-on-surface-variant text-body-md mb-6">
                {burger.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-headline-md text-primary">
                  {burger.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BurgerSection;

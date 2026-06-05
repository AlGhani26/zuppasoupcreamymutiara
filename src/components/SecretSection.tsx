import React from "react";
import { Leaf } from 'lucide-react';
import { Croissant } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';

const SecretSection = () => (
  <section className="py-12 lg:py-20 px-6 max-w-[1280px] mx-auto overflow-hidden" id="about">
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClXwn0MQlbgq614mQj4ID-GsB7a_SMVKK6CnjsUE-LoeR5dUxDjDtg7nsPToPFH_ayuZw8BWZnmRDqD8kQKLnVMO_7dei_NrsSmpkw1aGhxY7-gApV28jyGP6oMkkxoTgIaQkHjfx-gjV319ygX6_b4877FOQZTlu0TEhqDhzpVUZXN1HKlYabmEFbHN58vGRKJeUKwala_voGqgjaVmS_K00SGDs6PL5_3Fh1kSoIg5LnY-PdKjWcMD6RlwyuCakJsjnwKdI2muXB"
            alt="Chef kneading dough"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl shadow-lg w-full h-48 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6oz215Y3KwQkrJaPv7HQJTeW1mrbHem5g_UUp2oTeefhY9cufuff2n2aHhx1AePEiQuLbYOXzY_9jk91eew8lz-vI5B9zYD8S-CsdOVhZlDflEy4T-pwbQKM9L8bP3W2MlSMmSKukGhwDuYs3Bb-qooYNgFR2_nllWucCcyavfjPJYK7a4vX3wkWvSV8qZcfsh1eFJ2ZfyMiZ60RDME-jP7t7tWjjbB0G79QbQuw66tgbFizq1_hcWIALd_TSZCKkIjiOP5OAoPsC"
            alt="Premium ingredients"
          />
        </div>

        {/* Absolute badge */}
        <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-8 rounded-full h-32 w-32 flex flex-col items-center justify-center text-center shadow-xl rotate-12">
          <span className="text-label-md leading-none">100%</span>
          <span className="text-label-sm">Premium</span>
        </div>
      </div>

      <div>
        <h2 className="text-headline-lg text-on-surface mb-8">
          Rahasia Kelezatan Kami Adalah Kejujuran Bahan
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-fixed">
                <Leaf />
              </span>
            </div>
            <div>
              <h4 className="text-label-md text-primary mb-1">
                Bahan Selalu Segar
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Kami percaya bahwa makanan enak dimulai dari bahan yang
                berkualitas. Kami hanya menggunakan sayuran segar dan daging
                pilihan setiap harinya.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-fixed">
                <Croissant />
              </span>
            </div>
            <div>
              <h4 className="text-label-md text-primary mb-1">
                Proses Homemade
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Setiap lapisan pastry Zuppa dan setiap patty burger kami dibuat
                secara manual oleh tangan terampil kami, bukan hasil pabrikan
                massal.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-fixed">
                <BadgeCheck />
              </span>
            </div>
            <div>
              <h4 className="text-label-md text-primary mb-1">
                Tanpa Pengawet
              </h4>
              <p className="text-body-md text-on-surface-variant">
                Kesehatan Anda adalah prioritas. Semua menu kami bebas dari bahan
                pengawet buatan dan MSG berlebih, memberikan rasa gurih alami
                yang aman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecretSection;

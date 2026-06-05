import React from "react";
import { Users, Utensils, Clock, MessageSquare } from 'lucide-react';

const CateringBanner = () => (
  <section className="bg-surface-container py-12 lg:py-20 overflow-hidden">
    <div className="px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <span className="text-primary text-label-md uppercase tracking-widest mb-4 block">
            Layanan Khusus
          </span>
          <h2 className="text-headline-lg text-on-surface mb-6 leading-tight">
            Katering untuk Acara Spesial Anda
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Kami siap melayani kebutuhan catering untuk pernikahan, acara kantor,
            atau gathering spesial Anda. Tim profesional kami akan memastikan setiap
            hidangan sampai dengan sempurna dan segar.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-10">
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-primary-fixed rounded-full flex items-center justify-center shrink-0">
                <Users className="text-on-primary-fixed w-5 h-5" />
              </div>
              <div>
                <h4 className="text-label-lg text-primary font-semibold">Menu Customizable</h4>
                <p className="text-body-sm text-on-surface-variant">Pilih menu sesuai preferensi dan budget Anda</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-secondary-fixed rounded-full flex items-center justify-center shrink-0">
                <Utensils className="text-on-secondary-fixed w-5 h-5" />
              </div>
              <div>
                <h4 className="text-label-lg text-secondary font-semibold">Kualitas Premium</h4>
                <p className="text-body-sm text-on-surface-variant">Bahan pilihan dan penanganan profesional</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-tertiary-fixed rounded-full flex items-center justify-center shrink-0">
                <Clock className="text-on-tertiary-fixed w-5 h-5" />
              </div>
              <div>
                <h4 className="text-label-lg text-tertiary font-semibold">Pengiriman Tepat Waktu</h4>
                <p className="text-body-sm text-on-surface-variant">Kami jamin kesegaran saat tiba di lokasi</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6281223423406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md shadow-lg hover:shadow-xl hover:opacity-90 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined"><MessageSquare ></MessageSquare ></span>
            Konsultasi Gratis Sekarang
          </a>
        </div>

        {/* Right Image */}
        <div className="relative order-1 md:order-2 h-64 sm:h-80 md:h-[400px] lg:h-[550px] group">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary-fixed rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-fixed rounded-full opacity-20 blur-3xl"></div>

          {/* Image container */}
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Layanan Catering Zuppa Soup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA56t-Rt64ax7S_4LeDqMGlDse_gV5SAPLh7CYHsS9V8L0glmzDsKj5l4QYGMMnZ3HkNHyivV_6WCWDld5qbtSrIUorhhs2tcKRqFk5XLhfSAFuqrA7cY_t5sR4awmIbyxmnJ6AoPmKvkPs78tyD9LFVNz7m7hsJOVShI0-1b08CqJkpbjh0WMMKxiSQXYVNX1LZwUvmqpicvJEkiEzNY3bf0CboNlyaC06X7DJKOW5SFGRNvfseYAk2Z69Vq4YxWFbJ0M4S-rpLNrn"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary px-8 py-6 rounded-2xl shadow-xl">
            <div className="text-headline-sm font-bold">10+</div>
            <div className="text-label-sm">Acara Dilayani</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CateringBanner;

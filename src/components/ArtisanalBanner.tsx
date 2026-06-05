import React from "react";

const ArtisanalBanner = () => (
  <section className="px-6 max-w-[1280px] mx-auto py-12 lg:py-20" id="menu">
    <div className="relative h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Artisanal Burger and Soup"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7SX5NxHH_Qt4GuZfa9J4hUxT5yS1_P2NEesTrJx0OUHOkFvkbFCbp3MMM_VMvzlnemgmlM7RvdZdNrAftuG-VLBkYnUKLVQsfROXx3UpBaUwUWbn9kekY0GhrpggABJVzlsw8vV9k57JaaYnbPrravxIm7rfgBGPzMBbEhXsd-Z349Ebd_2QjdRzFQJKLHGrjTXdhJHbvM2SbznCluUWlFK8KXuOo6B5ibIOPyxbEQD7HUaW4Nmr-t0EzR9ROoROE6hI-cpg1DNR"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
        <h1 className="text-headline-xl text-white mb-4">
          Our Artisanal Menu
        </h1>
        <p className="text-white/90 max-w-2xl text-body-lg">
          Hand-crafted comfort food made with premium ingredients and a dash of
          neighborly warmth. Specializing in our signature golden puff pastry
          zuppa soups.
        </p>
      </div>
    </div>
  </section>
);

export default ArtisanalBanner;

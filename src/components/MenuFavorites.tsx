import React from "react";

const MenuFavorites = () => (
  <section className="bg-surface-container-low py-12 lg:py-20">
    <div className="px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm mb-4 inline-block">
          Best Seller
        </span>
        <h2 className="text-headline-lg text-on-surface">Menu Favorit Kami</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto">
        {/* Zupa Mix Card */}
        <div className="lg:col-span-7 group food-card-hover overflow-hidden rounded-3xl bg-surface shadow-md flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-1/2 overflow-hidden h-64 sm:h-80 lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Signature Zupa Zupa"
              className="w-full h-full object-cover transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC4WQbtrZf8JDyiCqpqvYxpJP2rttk3nHqx_scgFY3mkjvAG9pfG5h4zHNRc9wwDShDMu9jI6hfn5JLqI-9SGoi9u_QiI7dBKjfMVdHRRWWEEfEfPHbxuy6QEb0lN7NRMNLeAjRCh-0u2mjH5UxM2ShORO7cAUjC1kIsULCwNSuo8DF2o4emFLhGkAoe5INBjJQkYYvguq3mxFMotga7b257NaeAaceAzYPRZAGeFKczbLgzDDCbA2_WMmaYE5ACIHOklq0kOzV3kh"
            />
          </div>
          <div className="p-8 lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-headline-md text-primary mb-2">
              Zupa Ayam + Jagung
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6">
                Potongan daging ayam lembut dengan jagung manis dalam krim sup kental.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-label-md text-secondary text-lg">
                Rp 28.000
              </span>
            </div>
          </div>
        </div>

        {/* Burger Beef Card */}
        <div className="lg:col-span-5 group food-card-hover overflow-hidden rounded-3xl bg-surface shadow-md flex flex-col h-full">
          <div className="h-64 sm:h-80 lg:h-72 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Gourmet Beef Burger"
              className="w-full h-full object-cover transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMH9o7tLfX2cXsILrBV9Q2JQjBA68Tryed-_fW6XA7mUWPajc_8qPXqAQ8afKO36U2e8AdmCvIhJO6_l4YUhyaJJn-JmQY7iYba9hCz7ZXb4yDclWRBOFr6nvLmOvZ2L8oHuj-8V2uXv7acz1BRHt7kx7YzWrUZlTCzOgB2B5SlUHI-NUJ0yPsT0T6Et3_pdsV2B1Pm1PCiNp0r6IjntEQ-CxkQjVV3YI5NLslD1hjl1VhFEPuyrpOoppfK81DZ6uA2MpzNMiRNLf1"
            />
          </div>
          <div className="p-8">
            <h3 className="text-headline-md text-primary mb-2">
              Burger Beef Patty
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              100% Australian Beef Patty dengan saus rahasia dan sayuran segar
              dalam roti brioche lembut.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-label-md text-secondary text-lg">
                Rp 48.000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MenuFavorites;

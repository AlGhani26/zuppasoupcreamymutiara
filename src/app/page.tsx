import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuFavorites from "@/components/MenuFavorites";
import ArtisanalBanner from "@/components/ArtisanalBanner";
import MenuListing from "@/components/MenuListing";
import BurgerSection from "@/components/BurgerSection";
import SidesPastaSection from "@/components/SidesPastaSection";
import SecretSection from "@/components/SecretSection";
import CateringBanner from "@/components/CateringBanner";
import OrderPlatforms from "@/components/OrderPlatforms";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />
      <HeroSection />
      <MenuFavorites />
      <ArtisanalBanner />
      <MenuListing />
      <BurgerSection />
      <SidesPastaSection />
      <SecretSection />
      <CateringBanner />
      <OrderPlatforms />
      <LocationSection />
      <Footer />
    </main>
  );
}

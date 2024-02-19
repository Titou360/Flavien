import ContactForm from "./components/ContactForm";
import DrinksCard from "./components/DrinksCard";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />

      <FoodCard />
      <DrinksCard />

      <ContactForm />

      <Map />
      </main>
      <Footer />
    </>
  );
}

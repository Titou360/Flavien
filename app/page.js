import BookNow from './components/BookNow';
import ContactForm from './components/ContactForm';
import DrinksCard from './components/DrinksCard';
import ExtraHeader from './components/ExtraHeader';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';
import Restaurant from './components/Restaurant';
import Services from './components/Services';
import About from './components/about';

export default function Home() {
  return (
    <>
      <ExtraHeader />
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <About />

        <Restaurant />

        <Services />
        <div id="Menus" className="w-5/6 h-screen flex flex-row justify-between">
          <FoodCard />
          <DrinksCard />
        </div>

        <BookNow />

        <ContactForm />

        <Map />
      </main>
      <Footer />
    </>
  );
}

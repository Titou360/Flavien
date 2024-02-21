import BookNow from './components/BookNow';
import ContactForm from './components/ContactForm';
import ExtraHeader from './components/ExtraHeader';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';
import OurCards from './components/OurCards';
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

        <OurCards />

        <BookNow />

        <ContactForm />

        <Map />
      </main>
      <Footer />
    </>
  );
}

import BookNow from '../components/BookNow';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import DailyChange from '../components/DailyChange';
import ExtraHeader from '../components/ExtraHeader';
import Footer from '../components/Footer';
import OurCards from '../components/OurCards';
import Restaurant from '../components/Restaurant';
import Services from '../components/Services';
import TranslationsProvider from '../components/TranslationProvider';
import About from '../components/about';
import initTranslations from '../i18n';

const i18nNamespaces = ['ExtraHeader', 'Navbar', 'Book', 'Common', 'Custom'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <ExtraHeader />
      <main className="flex w-full min-h-screen flex-col items-center justify-between">

        <About />

        <Restaurant />

        <BookNow />

        <Services />

        <DailyChange />

        <OurCards />

        <ContactUs />
        <ContactForm />
      </main>
      <Footer />

    </TranslationsProvider>
  );
}

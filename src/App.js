import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { steps, reasons, reviews } from './data';

function App() {
  return (
    <div className="font-sans text-gray-700">
      <HeroSection />
      <HowItWorks steps={steps} />
      <WhyChooseUs reasons={reasons} />
      <Testimonials reviews={reviews} />
      <ContactForm />
    </div>
  );
}

export default App;
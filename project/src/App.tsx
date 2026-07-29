import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Method from '@/components/Method';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Method />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

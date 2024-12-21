import Header from '../components/Header';  // Adjusted path for App Router structure
import Footer from '../components/Footer';  // Adjusted path for App Router structure
import Home from '../components/Home'; // Import the Home component
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '600'], // Choose the font weights you need
  subsets: ['latin'], // Optional: specify the character subsets you need
});


export default function Page() {
  return (
    <div className={josefinSans.className}>
      <Header />
      <Home /> {/* Use Home component here */}
      <Footer />
    </div>
  );
}

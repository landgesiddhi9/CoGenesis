import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialGrid from './components/EditorialGrid';
import ProductStrip from './components/ProductStrip';
import CampaignBanner from './components/CampaignBanner';
import GallerySection from './components/GallerySection';
import ModelLineup from './components/ModelLineup';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <EditorialGrid />
        <ProductStrip />
        <CampaignBanner />
        <GallerySection />
        <ModelLineup />
        <BrandStory />
        <CraftsmanshipSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

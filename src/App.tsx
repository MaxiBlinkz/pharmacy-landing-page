import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { DownloadSection } from './components/landing/Download';
import { Pricing } from './components/landing/Pricing';
import { CloudTeaser } from './components/landing/CloudTeaser';
import { Footer } from './components/landing/Footer';
import { PurchaseCompletion } from './components/landing/PurchaseCompletion';
import { useCurrency } from './hooks/useCurrency';

function App() {
  const { currency, setCurrency, formatPrice } = useCurrency();

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-blue-900 dark:selection:text-blue-100">
        <Navbar currency={currency} setCurrency={setCurrency} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <DownloadSection />
                <Pricing formatPrice={formatPrice} currency={currency} />
                <CloudTeaser />
              </>
            } />
            <Route path="/purchase-completion" element={<PurchaseCompletion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

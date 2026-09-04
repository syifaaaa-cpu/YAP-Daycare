import { useState } from 'react';
import { Header } from './components/Header';
import { ReferenceLandingPage } from './components/ReferenceLandingPage';
import { Footer } from './components/Footer';

export default function App() {
  const [notice, setNotice] = useState(false);
  const openPpdb = () => setNotice(true);
  const navigate = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="min-h-screen bg-[#fffdf8] text-[#0c4c3d]"><Header onOpenPpdb={openPpdb} onOpenVisit={openPpdb} onOpenBrochure={openPpdb} onSelectNav={navigate} /><ReferenceLandingPage onOpenPpdb={openPpdb} /><Footer onSubscribeNewsletter={() => setNotice(true)} onNavigateSection={navigate} onOpenPpdb={openPpdb} onOpenBrochure={openPpdb} />{notice && <div className="ref-notice">Terima kasih. Tim kami akan menghubungi Anda.<button onClick={() => setNotice(false)}>×</button></div>}</div>;
}

'use client';
import Navbar from '../components/Navbar.js';
import FeedTheDreamSection from '../components/FeedTheDreamSection.js';
import EnterToWinSection from '../components/EnterToWinSection.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
export default function DashboardClient() {
  // "useEffect architecture": this hook encapsulates the DOM behavior from 2.html
  useRevealOnScroll();
  return (
    <div>
      <Navbar />
      <main>
        <FeedTheDreamSection />
        <EnterToWinSection />
      </main>
    </div>
  );
}

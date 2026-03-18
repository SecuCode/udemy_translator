'use client';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CoreCompetency from '@/components/home/CoreCompetency';
import AumCounter from '@/components/home/AumCounter';
import NoticeSection from '@/components/home/NoticeSection';

export default function HomePage() {
  return (
    <div className="homepageContainer">
      <HeroSection />
      <AboutSection />
      <CoreCompetency />
      <AumCounter />
      <NoticeSection />
    </div>
  );
}

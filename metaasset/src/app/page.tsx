'use client';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CoreCompetency from '@/components/home/CoreCompetency';
import InvestmentPhilosophy from '@/components/home/InvestmentPhilosophy';
import KeyFigures from '@/components/home/KeyFigures';
import AumCounter from '@/components/home/AumCounter';
import ParallaxShowcase from '@/components/home/ParallaxShowcase';
import NoticeSection from '@/components/home/NoticeSection';
import TeamExpertise from '@/components/home/TeamExpertise';

export default function HomePage() {
  return (
    <div className="homepageContainer">
      <HeroSection />
      <AboutSection />
      <CoreCompetency />
      <InvestmentPhilosophy />
      <KeyFigures />
      <AumCounter />
      <ParallaxShowcase />
      <NoticeSection />
      <TeamExpertise />
    </div>
  );
}

import CommunityStats from "@/components/home/community-stats";
import DescriptionSection from "@/components/home/description";
import EventsHighlight from "@/components/home/events-highlight";
import Hero from "@/components/home/hero";
import HomeGsap from "@/components/home/home-gsap";
import LearnConnectGrow from "@/components/home/learn-connect-grow";
import OfficersSection from "@/components/home/officers";
import PartnersSection from "@/components/home/partners";
import TestimonialsSection from "@/components/home/testimonials";
import VisionMission from "@/components/home/vision-mission";

export default function Home() {
	return (
		<div className="font-sans">
			<HomeGsap />
			<Hero />
			<DescriptionSection />
			<VisionMission />
			<LearnConnectGrow />
			<CommunityStats />
			<TestimonialsSection />
			<PartnersSection />
			<EventsHighlight />
			<OfficersSection />
		</div>
	);
}

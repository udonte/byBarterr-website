import AboutHero from "@/components/About/AboutHero";
import CoreValues from "@/components/About/CoreValues";
import Download from "@/components/About/Download";
import Subscribe from "@/components/Faq/Subscribe";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="pt-26 w-full">
      <AboutHero />
      <CoreValues />
      <Download />
      <Subscribe />
    </div>
  );
};

export default About;

import "./aboutSection.scss";
import Info from "../res/VitoMethod.svg";
import StatsSection from "./StatsSection";

function AboutSection() {
  return (
    <div className="section about" id="about">
      <div className="about-text">
        <h1 className="section-header">What is Vito?</h1>
        <h2>
          Estimated 4% Reduction in Covid-19 Infections <sup>1</sup>
        </h2>
        <h3 className="header light">
          Vito encourages people to take precautions they deem necessary when
          possibly infected
        </h3>
        <img src={Info} alt="Info" className="info-img" />
      </div>
      <StatsSection />
    </div>
  );
}

export default AboutSection;

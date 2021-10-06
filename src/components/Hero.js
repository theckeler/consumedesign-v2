import bgImg from "../images/20190518_081913.jpg";
import { ReactComponent as Logo } from "../images/logo.svg";
import "../css/hero.min.css";

const Hero = ({ addClassName }) => {
  return (
    <section className={`${addClassName} hero`}>
      <div className="overlay">
        <Logo />
      </div>
      <img src={bgImg} alt="" />
      <h1 className="visually-hidden">consume:design {addClassName}</h1>
    </section>
  );
};

export default Hero;

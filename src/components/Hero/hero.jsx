import logo from "../../assets/logo.svg";
import earthimage from "../../assets/Earth.png";
export default function Hero({ onExplore, onContact }) {
  return (
    <section className="hero">
      <div className="section_container">
        <div className="hero_logo">
          <img src={logo} alt="planets logo" />
        </div>
        <div className="hero_container">
          <div className="hero_content">
            <h1 className="hero_title">
              Explore Our Solar <br />
              System Through Data
            </h1>
            <p className="hero_description">
              Understand the planets not just by name, but by measurable facts.
              From size and mass to gravity and density, this page breaks down
              the solar system in a clear, data-driven way.
            </p>
            <div className="hero_buttons">
              <button className="explore_button" onClick={onExplore}>
                Explore the Data
              </button>
              <button className="contact_button" onClick={onContact}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="hero_image">
            <img src={earthimage} alt="The Earth" />
          </div>
        </div>
      </div>
    </section>
  );
}

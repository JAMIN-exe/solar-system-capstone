import planetvideo from "../../assets/video.mp4";
export default function PlanetVideo() {
  return (
    <section className="video_section">
      <div className=" section_container video_container">
        <div className="video_media">
          <video autoPlay muted loop playsInline>
            <source src={planetvideo} type="video/mp4" />
          </video>
        </div>
        <div className="video_text">
          <h2 className="video_title">
            {" "}
            How Planetary Data Helps Us Understand Space{" "}
          </h2>
          <p className="video_description">
            Planetary science goes beyond images. Comparing{" "}
            <span className="highlight">mass</span>,{" "}
            <span className="highlight">diameter</span>,
            <span className="highlight">gravity</span>, and{" "}
            <span className="highlight">density</span> , we gain insight into
            how planets form, behave, and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
}

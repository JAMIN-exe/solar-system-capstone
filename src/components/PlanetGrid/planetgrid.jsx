import { useState, useEffect } from "react";
import PlanetCard from "../PlanetCard/planetcard";

export default function PlanetGrid({ planetsRef }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );
        const data = await response.json();
        setPlanets(data);
        setLoading(false);
      } catch {
        setError("Failed to load planet data.");
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <section className="planets_section" ref={planetsRef}>
      <div className=" section_container planets_container">
        <h2 className="planets_title">
          Visualizing the Differences Between Planets
        </h2>
        <p className="planets_description">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
        {loading && <p className="planets_loading">Loading planet data...</p>}
        {error && <p className="planets_error">{error}</p>}
        <div className="planets_grid">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.planet}
              planet={planet.planet}
              distanceFromSun={planet.distanceFromSun}
              image={planet.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

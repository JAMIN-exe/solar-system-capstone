import earthimage from "../../assets/Earth.png";

export default function PlanetCard({ planet, distanceFromSun, image }) {
  return (
    <figure className="planet_card">
      <img
        src={image}
        alt={planet}
        className="planet_card_image"
        onError={(e) => {
          e.target.src = earthimage;
        }}
      />
      <figcaption className="planet_card_caption">
        <p className="planet_card_name">{planet}</p>
        <p className="planet_card_distance">
          Distance from Sun: <strong>{distanceFromSun} million km</strong>
        </p>
      </figcaption>
    </figure>
  );
}

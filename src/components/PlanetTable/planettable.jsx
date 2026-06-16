export default function PlanetTable() {
  return (
    <section className="table_section">
      <div className=" section_container table_container">
        <h2 className="table_title"> Planetary Facts at a Glance</h2>
        <p className="table_description">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>
        <p className="table_source">
          <strong>
            Data about the planets of our solar system (Planetary facts taken
            from NASA)
          </strong>
        </p>
        <div className="table_table">
          <table className="data_table">
            <thead>
              <tr>
                <th colSpan={2}></th>
                <th>Name</th>
                <th>Mass (10²⁴kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Gravity (m/s²)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cat_cell" colSpan={2} rowSpan={4}>
                  {" "}
                  Terrestrial Planets
                </td>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="cat_cell" rowSpan={4}>
                  Jovian Planets
                </td>
                <td className="cat_cell" rowSpan={2}>
                  Gas Giants
                </td>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="cat_cell" rowSpan={2}>
                  Ice Giants
                </td>
                <td>Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="cat_cell" colSpan={2}>
                  Dwarf Planets
                </td>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5,427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

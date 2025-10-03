import styles from "./Catalog.module.css";
import { useEffect, useState } from "react";
import DetailsBuilding from "../DetailsBuilding/DetailsBuilding.jsx";

const Catalog = () => {
  const [buildings, setBuildings] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState("Усі");

  useEffect(() => {
    fetch("https://test.smarto.agency/smarto_complexes_list.json")
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);

  const filteredBuildings =
    activeCategory === "Усі"
      ? buildings
      : buildings.filter((b) => b.type === activeCategory);

  return (
    <section className={styles.catalog}>
      <h2 className={styles.title}>Збудовані обʼєкти</h2>

      <ul className={styles.list}>
        {["Усі", "Comfort", "Бізнес", "Premium"].map((category) => (
          <li
            key={category}
            className={`${styles.item} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(3);
            }}
          >
            {category}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "100px",
        }}
      >
        {filteredBuildings.slice(0, visibleCount).map((building) => (
          <DetailsBuilding key={building.id} {...building} />
        ))}
      </div>

      {visibleCount < filteredBuildings.length && (
        <div className={styles.loadMoreRow}>
          <button
            className={styles.btnLoad}
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Завантажити ще
            <svg className={`${styles.icon} icon-1`} width="16" height="16">
              <use xlinkHref="/img/symbol-defs.svg#icon-icon-11" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Catalog;

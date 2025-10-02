import styles from "./DetailsBuilding.module.css";

const DetailsBuilding = ({ year, type, img, name, adress, tags }) => {
  return (
    <div style={{ width: "440px" }}>
      <div className={styles.card}>
        <img className={styles.imgTop} src="/public/img/Pin.png" alt="pin" />

        <div className={styles.cardTop}>
          <p className={styles.year}>{year}</p>
          <p className={styles.type}>{type}</p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={img} alt={name} className={styles.image} />
        </div>

        <h3 className={styles.name}>{name}</h3>

        <p className={styles.adress}>{adress}</p>

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <img
        className={styles.imgBottom}
        src="/public/img/Down.png"
        alt="torn paper"
      />
    </div>
  );
};

export default DetailsBuilding;

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.detector}>
        <svg className={`${styles.union} Union`}>
          <use xlinkHref="/img/symbol-defs.svg#icon-Union" />
        </svg>
        <div className={styles.line}></div>
        <p className={styles.text}>Smarto</p>
      </div>
      <div className={styles.mainBlocks}>
        <div className={styles.boxTop}>
          <p className={styles.title}>Контакти</p>
          <div className={styles.boxInside}>
            <div className={styles.blocks}>
              <p className={styles.subtitle}>Головний офіс:</p>
              <a
                className={styles.email}
                href="mailto:SmartorangeTest@gmail.com"
              >
                SmartorangeTest@gmail.com
              </a>
              <a
                className={styles.map}
                href="https://www.google.com/maps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Відкрити на Google maps
              </a>
            </div>
            <div className={styles.blockTwo}>
              <p className={styles.subtitle}>Наші соцмережі:</p>
              <div className={styles.social}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className={`${styles.icon} Icon-2-1`}
                    width="14"
                    height="14"
                  >
                    <use xlinkHref="/img/symbol-defs.svg#icon-Icon-2-1" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className={`${styles.icon} icon-you-1`}
                    width="14"
                    height="14"
                  >
                    <use xlinkHref="/img/symbol-defs.svg#icon-you-1" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className={`${styles.icon} icon-fb-1`}
                    width="14"
                    height="14"
                  >
                    <use xlinkHref="/img/symbol-defs.svg#icon-fb-1" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className={`${styles.icon} icon-Button-1`}
                    width="14"
                    height="14"
                  >
                    <use xlinkHref="/img/symbol-defs.svg#icon-Button-1" />
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles.blockThree}>
              <p className={styles.subtitle}>Телефони відділів:</p>
              <div className={styles.tel}>
                <svg className={`${styles.iconTel} icon-1`}>
                  <use xlinkHref="/img/symbol-defs.svg#icon-icon-1" />
                </svg>
                <a className={styles.contactsLink} href="tel:+380444444444">
                  (044) 444-44-44
                </a>
                <p className={styles.contactsTitle}>( Юридичний відділ )</p>
              </div>
              <div className={styles.tel}>
                <svg className={`${styles.iconTel} icon-1`}>
                  <use xlinkHref="/img/symbol-defs.svg#icon-icon-1" />
                </svg>
                <a className={styles.contactsLink} href="tel:+380555555555">
                  (055) 555-55-55
                </a>
                <p className={styles.contactsTitle}>( Бухгалтерія )</p>
              </div>
            </div>
            <div className={styles.blockFour}>
              <p className={styles.subtitle}>Email:</p>
              <a className={styles.email} href="mailto:office@smarto.ua">
                office@smarto.ua
              </a>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <p className={`${styles.titleBt} ${styles.topLeft}`}>Якість</p>
          <img
            className={styles.imgRight}
            src="/img/Ellipse-503-1x.png"
            srcSet="/img/Ellipse-503-2x.png 2x"
            alt="building"
          />
          <img
            className={styles.imgLeft}
            src="/img/Ellipse-502-1x.png"
            srcSet="/img/Ellipse-502-2x.png 2x"
            alt="building"
          />

          <img />
          <p className={`${styles.titleBt} ${styles.bottomRight}`}>понад усе</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

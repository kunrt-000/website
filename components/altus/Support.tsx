import styles from "@/styles/altus/Support.module.scss";
import Button from "./Button";

const Support = () => (
  <section id="support" className={styles.supportSection}>
    <h1 className={styles.heading}>Support the Project</h1>
    <div className={styles.flex}>
      <div className={styles.copy}>
        <p>
          If you find Altus helpful and/or use it regularly, consider supporting
          the project financially with however much you can.
        </p>
        <p>There are multiple ways to support the project:</p>
        <div className={styles.supportLinks}>
          <Button href="https://ko-fi.com/amanharwara" external={true}>
            Ko-Fi
          </Button>
          <Button href="https://liberapay.com/aman_harwara" external={true}>
            Liberapay
          </Button>
          <Button href="https://buymeacoffee.com/amanharwara" external={true}>
            Buy Me a Coffee
          </Button>
        </div>
        <p>
          You can also support the project by contributing code i.e. fixing
          issues or adding new features.
        </p>
      </div>
      <div className={styles.widget}>
        <iframe
          id="kofiframe"
          src="https://ko-fi.com/amanharwara/?hidefeed=true&widget=true&embed=true&preview=true"
          style={{
            border: "none",
            width: "100%",
            padding: "4px",
            background: "#181818",
          }}
          title="amanharwara"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Support;

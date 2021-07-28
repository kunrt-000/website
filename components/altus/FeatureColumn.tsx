import styles from "@/styles/altus/Features.module.scss";

type FeatureProps = {
  children: any;
  title: string;
  description: string;
};

const FeatureColumn = ({ children, title, description }: FeatureProps) => (
  <div className={styles.featureColumn}>
    <div className={styles.featureMeta}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.title}>{title}</div>
    </div>
    <div className={styles.description}>{description}</div>
  </div>
);

export default FeatureColumn;

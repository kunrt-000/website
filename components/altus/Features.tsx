import styles from "@/styles/altus/Features.module.scss";
import FeatureColumn from "./FeatureColumn";
import Themes from "@/icons/altus/Themes";
import MultipleAcc from "../icons/altus/MultipleAcc";
import Notification from "../icons/altus/Notification";
import CrossPlatform from "../icons/altus/CrossPlatform";
import DarkMode from "../icons/altus/DarkMode";
import TrayIcon from "../icons/altus/TrayIcon";
import Language from "../icons/altus/Language";
import Proxy from "../icons/altus/Proxy";
import SplitMode from "../icons/altus/SplitMode";

const Features = () => (
  <section id="features" className={styles.featuresSection}>
    <h1 className={styles.heading}>Improve your WhatsApp experience</h1>
    <h3 className={styles.subheading}>with features like...</h3>
    <div className={styles.featuresGrid}>
      <FeatureColumn
        title="Custom Themes"
        description="Easily create your own themes by picking colors or using CSS if you’re more advanced."
      >
        <Themes />
      </FeatureColumn>
      <FeatureColumn
        title="Multiple Accounts"
        description="Switch between multiple accounts just like you switch tabs in a browser."
      >
        <MultipleAcc />
      </FeatureColumn>
      <FeatureColumn
        title="Notifications"
        description="Don’t worry about missing out on any new messages. Notifications work on all platforms."
      >
        <Notification />
      </FeatureColumn>
      <FeatureColumn
        title="Cross-platform"
        description="Altus works on Windows, Mac and Linux!"
      >
        <CrossPlatform />
      </FeatureColumn>
    </div>
    <div className={styles.extraFeatures}>
      <div className={styles.featureMeta}>
        <div className={styles.icon}>
          <DarkMode />
        </div>
        <div className={styles.title}>Dark Mode</div>
      </div>
      <div className={styles.featureMeta}>
        <div className={styles.icon}>
          <TrayIcon />
        </div>
        <div className={styles.title}>Minimise to Tray</div>
      </div>
      <div className={styles.featureMeta}>
        <div className={styles.icon}>
          <Language />
        </div>
        <div className={styles.title}>Multi-language support</div>
        <div className={styles.pill}>Planned</div>
      </div>
      <div className={styles.featureMeta}>
        <div className={styles.icon}>
          <Proxy />
        </div>
        <div className={styles.title}>Per-tab proxy support</div>
        <div className={styles.pill}>Planned</div>
      </div>
      <div className={styles.featureMeta}>
        <div className={styles.icon}>
          <SplitMode />
        </div>
        <div className={styles.title}>Split tabs</div>
        <div className={styles.pill}>Planned</div>
      </div>
    </div>
  </section>
);

export default Features;

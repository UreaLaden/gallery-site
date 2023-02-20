import { Icon } from "@fluentui/react";
import { styles } from "./Footer.css";
import { Copy } from "../../utils/helpers";

const Footer = (props:any) => {
    const {theme} = props;
    return(
        <div className={styles.footer}>
          <div className={theme === 'light' ? styles.footerContainer : styles.footerContainerInverted}>
            <div className={styles.footerContent}>
              <div className={styles.footerHeader}>
                <Icon iconName={theme}/>
              </div>
              <div className={styles.footerDescription}>
                {Copy.footer.description}
              </div>
              <div className={styles.social}>
                <Icon className={theme === 'light' ? styles.icon : styles.iconInverted} iconName={"facebook"} />
                <Icon className={theme === 'light' ? styles.icon : styles.iconInverted} iconName={"instagram"} />
                <Icon className={theme === 'light' ? styles.icon : styles.iconInverted} iconName={"twitter"} />
              </div>
            </div>
          </div>
        </div>
    )
}
export default Footer;
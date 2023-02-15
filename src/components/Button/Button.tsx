import { Icon } from "@fluentui/react";
import { styles } from "./Button.css";

const Button = (props: any) => {
  const { buttonText,direction } = props;
  return (
    <div className={styles.container}>
      <div className={styles.buttonMain} id={"buttonMain"}>
        <div className={styles.buttonText}>{buttonText}</div>
      </div>
      <div className={styles.buttonSelector} id={"buttonSelector"}>
        <Icon className={styles.buttonIcon} iconName={`arrow-${direction}`}/>
      </div>
    </div>
  );
};
export default Button;

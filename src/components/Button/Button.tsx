import { Icon } from "@fluentui/react";
import { styles } from "./Button.css";
import * as React from 'react';
import { GalleryContext, GalleryContextProps } from "../../store/galleryContext";

const Button = (props: any) => {
  const { buttonText,direction } = props;
  const context = React.useContext<GalleryContextProps>(GalleryContext);

  const onButtonClicked = (_e:any) =>{
    context.updateCurrentPage();
  }

  return (
    <div className={direction === 'left'? styles.containerInverted :styles.container} onClick={onButtonClicked}>
      <div className={styles.buttonMain} id={"buttonMain"}>
        <div className={styles.buttonText}>{buttonText}</div>
      </div>
      <div className={ styles.buttonSelector} id={"buttonSelector"}>
        <Icon className={styles.buttonIcon} iconName={`arrow-${direction}`}/>
      </div>
    </div>
  );
};
export default Button;

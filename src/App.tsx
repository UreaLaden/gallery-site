import React from "react";
import { styles } from "./App.css";
import {
  GalleryContext,
  GalleryContextProps,
  WindowSpecs,
} from "./store/galleryContext";
import { Copy, Images } from "./utils/helpers";


const App = () => {
  const context = React.useContext<GalleryContextProps>(GalleryContext);

  React.useEffect(() => {
    window.onresize = () => {
      const newSize: WindowSpecs = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      context.updateWindowSize(newSize);
    };
  });

  return (
    <div className={styles.appContainer}>
      <section className={styles.section}>
        <header className={styles.headerContainer}>
          <img className={styles.headerImage} src={context.getImageSource(Images.Hero2X)} alt={"Header"} />
        </header>
        <div className={styles.sectionContentContainer}>
          <div className={styles.contentHeader}>{Copy.main.title1}<br/>{Copy.main.title2}</div>
          <div className={styles.contentDescription}>{Copy.main.description}</div>
          <button className={styles.button}>{Copy.main.button}</button>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionImageContainer}>
          <img className={styles.sectionImage} src={context.getImageSource(Images.Grid1_2X)} alt={"Section2"}/>
        </div>
        <div className={styles.childSectionContent}>
          <div className={styles.sectionHeader}>{Copy.pageOne.title1}<br/>{Copy.pageOne.title2}</div>
          <div className={styles.contentDescription}>{Copy.pageOne.description}</div>
        </div>
      </section>
    </div>
  );
};

export default App;

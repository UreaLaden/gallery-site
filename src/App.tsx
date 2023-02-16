import React from "react";
import { styles } from "./App.css";
import {
  GalleryContext,
  GalleryContextProps,
  WindowSpecs,
} from "./store/galleryContext";
import { Copy, Images, SVGIcons } from "./utils/helpers";
import { registerIcons } from "@fluentui/react";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

registerIcons(SVGIcons);

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

  const mainPageContent = (
    <div className={styles.appContainer}>
      <section className={styles.section}>
        <header className={styles.headerContainer}>
          <img
            className={styles.headerImage}
            src={context.getImageSource(Images.Hero2X)}
            alt={"Header"}
          />
        </header>
        <div className={styles.sectionContentContainer}>
          <div className={styles.contentHeader}>
            {Copy.main.title1}
            <br />
            {Copy.main.title2}
          </div>
          <div className={styles.contentDescription}>
            {Copy.main.description}
          </div>
          <div className={styles.button}>
            <Button buttonText={Copy.main.button} direction={"right"} />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionImageContainer}>
          <img
            className={styles.sectionImage}
            src={context.getImageSource(Images.Grid1_2X)}
            alt={"Section2"}
          />
        </div>
        <div className={styles.childSectionContent}>
          <div className={styles.sectionHeader}>
            {Copy.pageOne.title1}
            <br />
            {Copy.pageOne.title2}
          </div>
          <div className={styles.contentDescription}>
            {Copy.pageOne.description}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.childSectionImages}>
          <img
            className={styles.sectionImage2}
            src={context.getImageSource(Images.Grid2X)}
            alt={"Section2 Main"}
          />
          <img
            className={styles.sectionImage3}
            src={context.getImageSource(Images.Grid3_2X)}
            alt={"Section3 Main"}
          />
          <div className={styles.callToAction}>
            <div className={styles.titleInvert}>{Copy.pageTwo.title}</div>
            <div className={styles.descriptionInvert}>
              {Copy.pageTwo.description}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerSection}>
        <Footer theme={'light'}/>
      </section>
    </div>
  );
  const secondPageContent = (
    <div className={styles.appContainer}>
      <section className={styles.section}>
        <div className={styles.map}>
          <div className={styles.button}>
            <Button buttonText={"BACK TO HOME"} direction={"left"} />
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.locationHeader}>{Copy.pageThree.title}</div>
          <div className={styles.locationAddressHeader}>{Copy.pageThree.addressHeader}</div>
          <div className={styles.locationAddress}>
            <div>{Copy.pageThree.address[0]}</div>
            <div>{Copy.pageThree.address[1]}</div>
            <div>{Copy.pageThree.address[2]}</div>
          </div>
          <div className={styles.locationContent}>{Copy.pageThree.description}</div>
        </div>
      </section>
      <section className={styles.sectionSecondary}>
        <Footer theme={'dark'}/>
      </section>
    </div>
  );
  return context.onHomePage ? mainPageContent : secondPageContent;
};

export default App;

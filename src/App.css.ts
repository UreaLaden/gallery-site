import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./utils/helpers";

export const styles = mergeStyleSets({
  appContainer: {
    fontFamily: "Big Shoulders Display Black,sans-serif",
  },
  section: {
    "@media screen and (max-width:750px)": {
      height: "100vh",
    },
  },
  headerContainer: {
    "@media screen and (max-width:750px)": {
      height: "30vh",
    },
  },
  sectionContentContainer: {
    "@media screen and (max-width:750px)": {
      height: "70vh",
      margin: "0vw 3vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  childSectionContent: {
    "@media screen and (max-width:750px)": {
      height: "45vh",
      margin: "0vw 3vw",
      display: "flex",
      flexDirection: "column",
      rowGap: "35%",
    },
  },
  sectionImageContainer: {
    "@media screen and (max-width:750px)": {
      margin: "0vw 3vw",
      paddingTop: "25%",
    },
  },
  headerImage: {
    "@media screen and (max-width:750px)": {
      width: "100%",
    },
  },
  sectionImage: {
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "50vh",
    },
  },
  contentHeader: {
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3.4rem",
      fontWeight: "900",
      lineHeight: "4.35vh",
      height: "10%",
      transform: "scaleY(2)",
    },
  },
  sectionHeader: {
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "2.75vh",
      height: "1%",
      paddingTop: "5%",
      transform: "scaleY(2.25)",
    },
  },
  contentDescription: {
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "5vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      height: "20%",
      color: Colors.DarkGrey,
    },
  },
  button: {
    height: "15%",
    width: "70%",
  },
});

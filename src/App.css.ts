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
  footerSection: {
    "@media screen and (max-width:750px)": {
      height: "80vh",
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
  childSectionImages: {
    margin: "0vw 3vw 3vw 3vw",
    height: "100%",
  },
  sectionImage2: {
    width: "100%",
    maxHeight: "50vh",
    marginBottom: "3vw",
  },
  sectionImage3: {
    width: "100%",
    maxHeight: "30vh",
  },
  sectionImageContainer: {
    "@media screen and (max-width:750px)": {
      margin: "0vw 3vw",
      paddingTop: "25%",
    },
  },
  callToAction: {
    margin: "3vw 3vw 3vw 0",
    backgroundColor: Colors.AlmostBlack,
    height: "35vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
  titleInvert: {
    color: Colors.White,
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3.4rem",
      fontWeight: "900",
      lineHeight: "4.35vh",
      height: "10%",
      transform: "scaleY(1.5)",
      letterSpacing: "-2px",
      padding: "10%  4% 15% 6%",
    },
  },
  descriptionInvert: {
    color: Colors.White,
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.5vh",
      padding: "15%  4% 5% 6%",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
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
      height: "25%",
      color: Colors.DarkGrey,
    },
  },
  footer: {
    height: "100%",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column-reverse",
  },
  footerContainer:{
      "@media screen and (max-width:750px)": {
      height: "50vh",
      maxWidth:"100%",
      padding:"3vw",
      backgroundColor: Colors.AlmostBlack
    }

  },
  footerContent: {
    "@media screen and (max-width:750px)": {
      width: "100%",
      height:"100%",
      color: Colors.White,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  button: {
    height: "12%",
    width: "70%",
  },
  footerHeader: {
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingS,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      //   fontSize: "2rem",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "3.1vh",
      height: "25%",
      paddingTop:"15%",
      transform: "scaleY(1.35)",
    },
  },
  footerDescription: {
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.65vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.35rem",
      height: "25%",
    },
  },
  social: {
    "@media screen and (max-width:750px)": {
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height:"25%"
    },
  },
  icon: {},
});

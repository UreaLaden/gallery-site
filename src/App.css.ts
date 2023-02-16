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
  sectionSecondary: {
    "@media screen and (max-width:750px)": {
      height: "68vh",
    },
  },
  footerSection: {
    "@media screen and (max-width:750px)": {
      height: "65vh",
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

  button: {
    height: "12%",
    width: "70%",
  },
  mapButton: {
    height: "8vh",
    width: "70%",
    position:'absolute',
    top:0,
    left:0,
    'z-index':5
  },

  map: {
    height: "65vh",
  },
  location: {
    backgroundColor: Colors.AlmostBlack,
    color: Colors.White,
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    rowGap:"10vh",
    padding:"3vw"
  },
  locationHeader: {
    "@media screen and (max-width:750px)": {
        ...Fonts.HeadingL,
        fontFamily: "Big Shoulders Display Black, sans-serif",
        fontSize: "3rem",
        letterSpacing: "0",
        fontWeight: "900",
        lineHeight: "2vh",
        paddingTop:"11%",
        height: "0%",
        transform: "scaleY(1.25)",
      },
  },
  locationAddressHeader: {
    color: Colors.Orange,
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "2vh",
      height: "0%",
      transform: "scaleY(1.25)",
      marginBottom:"-8%"
    },
  },
  locationAddress: {
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.1vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      height: "0",
      marginBottom:"5%"
    },
  },
  locationContent: {
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.1vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      height: "25%",
    },
  },
});

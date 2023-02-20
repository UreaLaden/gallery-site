import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./utils/helpers";

export const styles = mergeStyleSets({
  appContainer: {
    fontFamily: "Big Shoulders Display Black,sans-serif",
  },
  sectionOne: {
    position: "relative",
    "@media screen and (min-width:1024px)": {
      height: "100vh",
    },
    "@media screen and (max-width:1023px)": {
      margin: 0,
    },
    "@media screen and (max-width:750px)": {
      height: "80vh",
      maxWidth: "100%",
      paddingBottom: "3vh",
      margin: "0",
    },
  },
  sectionTwo: {
    position: "relative",
    "@media screen and (min-width:1023px)": {
      margin: "0 8%",
      display: "flex",
      height: "auto",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      padding: "10% 0 1% 0",
      columnGap: "10%",
    },
    "@media screen and (max-width:1023px)": {
      margin: "0 3%",
      display: "flex",
      height: "auto",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      padding: "12% 0 1% 0",
    },
    "@media screen and (max-width:750px)": {
      height: "auto",
      maxWidth: "100%",
      flexDirection: "column",
    },
  },
  sectionThree: {
    position: "relative",
    "@media screen and (min-width:1024px)": {
      margin: "0 8%",
    },
    "@media screen and (max-width:1023px)": {
      margin: "0 3%",
    },
    "@media screen and (max-width:750px)": {
      height:"100vh"
    },
  },
  sectionSecondary: {
    "@media screen and (min-width:1024px)": {
      height: "auto",
    },
    "@media screen and (max-width:1023px)": {
      height: "auto",
    },
    "@media screen and (max-width:750px)": {
      height: "68vh",
    },
  },
  footerSection: {
    "@media screen and (min-width:1024px)": {
      display: "grid",
      gridTemplate: "repeat(3,1fr) / repeat(7,1fr)",
    },
    "@media screen and (max-width:1023px)": {
      display: "grid",
      gridTemplate: "repeat(3,1fr) / repeat(7,1fr)",
    },
    "@media screen and (max-width:750px)": {
      height: "65vh",
      width: "100%",
    },
  },
  headerContainer: {
    "@media screen and (min-width:1024px)": {
      height: "100%",
      backgroundColor: Colors.AlmostBlack,
      display: "flex",
      flexDirection: "row-reverse",
      width: "75%",
    },
    "@media screen and (max-width:750px)": {
      height: "30vh",
    },
  },
  sectionContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media screen and (min-width:1024px)": {
      position: "absolute",
      top: "23%",
      left: "10%",
      height: "40%",
      width: "85%",
      display: "grid",
      gridTemplate: "1fr .25fr /1fr .42fr",
    },
    "@media screen and (max-width:1023px)": {
      position: "absolute",
      top: "20%",
      right: "2%",
      width: "46%",
      height: "62%",
    },
    "@media screen and (max-width:750px)": {
      position: "unset",
      width: "100%",
      height: "50vh",
      padding: "0 3%",
    },
  },
  childSectionContent: {
    display: "flex",
    rowGap: "35%",
    "@media screen and (min-width:1024px)": {
      flexDirection: "column",
      width: "30%",
      height: "100%",
      rowGap: "5vh",
    },
    "@media screen and (max-width:1023px)": {
      width: "40%",
      rowGap: "40%",
      height: "auto",
      flexDirection: "column",
    },
    "@media screen and (max-width:750px)": {
      position: "unset",
      height: "45vh",
      width: "100%",
    },
  },
  childSectionImages: {
    "@media screen and (min-width:1024px)": {
      //   margin: "0 3%",
      height: "auto",
      display: "grid",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media screen and (max-width:1023px)": {
      //   margin: "0 3%",
      height: "auto",
      maxHeight:"60vh",
      display: "grid",
      gridTemplate: "repeat(14,1fr) / repeat(14,1fr)",
    },
    "@media screen and (max-width:750px)": {
      //   margin: "00 3%",
      height: "100%",
      display: "block",
    },
  },
  sectionImage2: {
    "@media screen and (min-width:1024px)": {
      gridColumn: "1 / 9",
      gridRow: "1 / 13",
      width: "100%",
      height: "auto",
    },
    "@media screen and (max-width:1023px)": {
      gridColumn: "1 / 10",
      gridRow: "1 / 15",
      width: "100%",
      height: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "50vh",
      marginBottom: "3vw",
    },
  },
  sectionImage3: {
    "@media screen and (min-width:1024px)": {
      gridRow: "1 / 7",
      gridColumn: "9 / 15",
      maxWidth: "100%",
      borderLeft: "20px solid white",
    },
    "@media screen and (max-width:1023px)": {
      gridRow: "1 / 6",
      gridColumn: "10 / 15",
      maxWidth: "100%",
      borderLeft:"20px solid white",
    //   borderBottom:"20px solid white"
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "30vh",
      maxWidth: "100%",
      border:'none'
    },
  },
  sectionImageContainer: {
    "@media screen and (min-width:1024px)": {
      maxWidth: "70%",
      width: "70%",
    },
    "@media screen and (max-width:1023px)": {
      maxHeight: "60vh",
      maxWidth: "50%",
      //   padding: "15% 0 1.2vh 50%",
    },
    "@media screen and (max-width:750px)": {
      padding: "10vh 0 2vh 0",
      maxWidth: "100%",
    },
  },
  callToAction: {
    "@media screen and (min-width:1024px)": {
      gridColumn: "9 / 15",
      gridRow: "6 / 13",
      backgroundColor: Colors.AlmostBlack,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      borderLeft: "20px solid white",
      borderTop: "20px solid white",
    },
    "@media screen and (max-width:1023px)": {
      gridColumn: "10 / 15",
      gridRow: "7 / 15",
      backgroundColor: Colors.AlmostBlack,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      borderLeft:"20px solid white",
      borderTop:"10px solid white"
    },
    "@media screen and (max-width:750px)": {
      margin: "3% 3% 3% 0",
      backgroundColor: Colors.AlmostBlack,
      height: "35vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      border:'none'
    },
  },
  headerImage: {
    "@media screen and (min-width:1024px)": {
      width: "auto",
      maxHeight: "100%",
    },
    "@media screen and (max-width:1023px)": {
      width: "60%",
      maxHeight: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
    },
  },
  sectionImage: {
    "@media screen and (min-width:1024px)": {
      width: "100%",
    },
    "@media screen and (max-width:1023px)": {
      width: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "50vh",
    },
  },
  contentHeader: {
    "@media screen and (min-width:1023px)": {},
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      height: "auto",
    },
    "@media screen and (max-width:750px)": {
      //   transform: "scaleY(2)",
      height: "auto",
    },
  },
  titleInvert: {
    color: Colors.White,
    "mix-blend-mode": "difference",
    "@media screen and (min-width:1024px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "6rem",
      fontWeight: "900",
      height: "auto",
      letterSpacing: "1px",
      padding: "0  6%",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3.4rem",
      fontWeight: "900",
      lineHeight: "4.35vh",
      height: "10%",
      transform: "scaleY(1.5)",
      letterSpacing: "1px",
      padding: "10%  4% 15% 6%",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3.4rem",
      fontWeight: "900",
      lineHeight: "4.35vh",
      height: "10%",
      width: "80%",
      transform: "scaleY(1.5)",
      letterSpacing: "-2px",
      padding: "10%  4% 10% 6%",
    },
  },
  descriptionInvert: {
    color: Colors.White,
    "mix-blend-mode": "difference",
    "@media screen and (min-width:1024px)": {
      ...Fonts.BodyS,
      padding: "0 4%",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "3rem",
      height: "45%",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      lineHeight: "2.8vh",
      padding: "15%  4% 5% 6%",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.5vh",
      padding: "15%  4% 5% 6%",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
    },
  },
  sectionHeader: {
    "@media screen and (min-width:1024px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "5vh",
      fontWeight: "900",
      paddingTop: "10%",
      maxWidth: "70%",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "8vw",
      fontWeight: "900",
      lineHeight: "5.25vh",
      height: "18%",
      paddingTop: "5%",
      maxWidth: "80%",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "4.5rem",
      maxWidth: "82%",
      "overflow-wrap": "break-word",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "7vh",
      height: "15%",
      paddingTop: "5%",
    },
  },
  contentDescription: {
    "@media screen and (min-width:1023px)": {
      ...Fonts.BodyS,
      lineHeight: "4vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.55vw",
      color: Colors.DarkGrey,
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      lineHeight: "2.65vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "2.35vw",
      height: "25%",
      color: Colors.DarkGrey,
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "4vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      height: "auto",
      maxWidth: "95%",
      color: Colors.DarkGrey,
    },
  },

  button: {
    height: "18%",
    width: "70%",
    "@media screen and (min-width:1023px)": {
      gridColumn: "2 / 3",
      gridRow: "2 / 3",
      height: "100%",
      width: "80%",
    },
  },
  mapButton: {
    "@media screen and (min-width:1024px)": {
      height: "6vh",
      width: "20%",
      position: "absolute",
      top: 0,
      left: 120,
      "z-index": 5,
    },
    "@media screen and (max-width:1023px)": {
      height: "6vh",
      width: "40%",
      position: "absolute",
      top: 0,
      left: 30,
      "z-index": 5,
    },
    "@media screen and (max-width:750px)": {
      height: "8vh",
      width: "70%",
      position: "absolute",
      top: 0,
      left: 0,
      "z-index": 5,
    },
  },

  map: {
    "@media screen and (min-width:1024px)": {
      height: "50vh",
    },
    "@media screen and (max-width:1023px)": {
      height: "50vh",
    },
    "@media screen and (max-width:750px)": {
      height: "65vh",
    },
  },
  location: {
    backgroundColor: Colors.AlmostBlack,
    color: Colors.White,
    "@media screen and (min-width:1024px)": {
      height: "50vh",
      padding: "3vw",
      display: "grid",
      gridTemplate: "repeat(7,1fr) /3vw repeat(7,1fr) 3vw",
    },
    "@media screen and (max-width:1023px)": {
      height: "35vh",
      padding: "3vw",
      display: "grid",
      gridTemplate: "repeat(7,1fr) /3vw repeat(7,1fr) 3vw",
    },
    "@media screen and (max-width:750px)": {
      height: "45vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  locationHeader: {
    "@media screen and (min-width:1024px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "4rem",
      letterSpacing: "0",
      fontWeight: "900",
      gridRow: "2 / 4",
      gridColumn: "2 / 3",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3rem",
      letterSpacing: "0",
      fontWeight: "900",
      gridRow: "2 / 4",
      gridColumn: "2 / 4",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "3rem",
      letterSpacing: "0",
      fontWeight: "900",
      height: "auto",
    },
  },
  locationAddressHeader: {
    color: Colors.Orange,
    "@media screen and (min-width:1024px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      gridColumn: "5 / 8",
      gridRow: "2 / 3",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      gridColumn: "5 / 8",
      gridRow: "2 / 3",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      height: "auto",
    },
  },
  locationAddress: {
    "@media screen and (min-width:1024px)": {
      ...Fonts.BodyS,
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      gridRow: "3 / 7",
      gridColumn: "5 / 8",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      gridRow: "3 / 7",
      gridColumn: "5 / 8",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1rem",
      height: "auto",
    },
  },
  locationContent: {
    "@media screen and (min-width:1024px)": {
      ...Fonts.BodyS,
      fontFamily: "Outline Light, sans-serif",
      fontSize: "2rem",
      lineHeight:"3.5vh",
      gridColumn: "5 / 8",
      gridRow: "5 / 8",
    },
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      gridColumn: "5 / 9",
      gridRow: "5 / 8",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "3.1vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.2rem",
      height: "auto",
    },
  },
  logo: {
    "@media screen and (min-width:1024px)": {
      paddingLeft: "2.12%",
      svg: {
        width: "100%",
        height: "100%",
        overflow: "visible",
        path: {
          transform: "scale(7)",
          fill: Colors.White,
          "mix-blend-mode": "difference",
        },
      },
    },
    "@media screen and (max-width:1023px)": {
      svg: {
        width: 350,
        height: 125,
        path: {
          transform: "scale(3)",
        },
      },
    },
  },
});

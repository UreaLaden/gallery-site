import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "./utils/helpers";

export const styles = mergeStyleSets({
  appContainer: {
    fontFamily: "Big Shoulders Display Black,sans-serif",
  },
  sectionOne: {
    position: "relative",
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
    "@media screen and (max-width:1023px)": {
      margin: "0 3%",
      display: "flex",
      height: "auto",
      flexDirection:'row-reverse',
      justifyContent:'space-between',
      padding:"12% 0 1% 0"
    },
    "@media screen and (max-width:750px)": {
      height: "auto",
      maxWidth: "100%",
      flexDirection:'column',    
    },
  },
  sectionThree: {
    position: "relative",
    "@media screen and (max-width:1023px)": {
      margin: "0 3%",
    },
  },
  sectionSecondary: {
    "@media screen and (max-width:1023px)": {
      height: "auto",
    },
    "@media screen and (max-width:750px)": {
      height: "68vh",
    },
  },
  footerSection: {
    "@media screen and (max-width:1023px)": {
      display: "grid",
      gridTemplate: "repeat(3,1fr) / repeat(7,1fr)",
    },
    "@media screen and (max-width:750px)": {
      height: "40vh",
      width: "100%",
    },
  },
  headerContainer: {
    "@media screen and (max-width:750px)": {
      height: "30vh",
    },
  },
  sectionContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
    "@media screen and (max-width:1023px)": {
      width: "40%",
      rowGap:"40%",
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
    "@media screen and (max-width:1023px)": {
      //   margin: "0 3%",
      height: "60vh",
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
    "@media screen and (max-width:1023px)": {
      gridColumn: "1 / 10",
      gridRow: "1 / 15",
      maxHeight: "100%",
      width: "57.5vw",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "50vh",
      marginBottom: "3vw",
    },
  },
  sectionImage3: {
    "@media screen and (max-width:1023px)": {
      gridRow: "1 / 7",
      gridColumn: "10 / 15",
      maxWidth: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "30vh",
      maxWidth: "100%",
    },
  },
  sectionImageContainer: {
    // margin: "0vw 3%",
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
    "@media screen and (max-width:1023px)": {
      gridColumn: "10 / 15",
      gridRow: "7 / 15",
      backgroundColor: Colors.AlmostBlack,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    "@media screen and (max-width:750px)": {
      margin: "3% 3% 3% 0",
      backgroundColor: Colors.AlmostBlack,
      height: "35vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  headerImage: {
    "@media screen and (max-width:1023px)": {
      width: "60%",
      maxHeight: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
    },
  },
  sectionImage: {
    "@media screen and (max-width:1023px)": {
      width: "100%",
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      maxHeight: "50vh",
    },
  },
  contentHeader: {
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      height: "auto",
    },
    "@media screen and (max-width:750px)": {
      //   transform: "scaleY(2)",
      height:'auto'
    },
  },
  titleInvert: {
    color: Colors.White,
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
      maxWidth: "90%",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "7vh",
      height: "15%",
      paddingTop: "5%",
    },
  },
  contentDescription: {
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
  },
  mapButton: {
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
    //   rowGap: "6vh",
    //   padding: "3%",
      justifyContent:'space-around'
    },
  },
  locationHeader: {
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
    //   lineHeight: "2vh",
    //   paddingTop: "11%",
      height: "auto",
    //   transform: "scaleY(1.25)",
    },
  },
  locationAddressHeader: {
    color: Colors.Orange,
    "@media screen and (max-width:1023px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
      //   lineHeight: "2vh",
      //   height: "0%",
      //   transform: "scaleY(1.25)",
      //   marginBottom: "-8%",
      gridColumn: "5 / 8",
      gridRow: "2 / 3",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingL,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      fontSize: "2.3rem",
      letterSpacing: "0",
      fontWeight: "900",
    //   lineHeight: "1.2vh",
      height: "auto",
    //   transform: "scaleY(1.25)",
    //   marginBottom: "-8%",
    },
  },
  locationAddress: {
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      //   lineHeight: "3.1vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      //   height: "0",
      //   marginBottom: "5%",
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
    "@media screen and (max-width:1023px)": {
      ...Fonts.BodyS,
      //   lineHeight: "3.1vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      //   height: "25%",
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

import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../utils/helpers";

export const styles = mergeStyleSets({
  footer: {
    "@media screen and (max-width:960px)": {
      gridColumn:"1 / -1",
      gridRow:"2 / -1",
    },
    "@media screen and (max-width:750px)": {
      height: "100%",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  footerContainer: {
    "@media screen and (max-width:960px)": {
      height: "100%",
      maxWidth: "100%",
      padding: "5% 3% 3% 3%",
      backgroundColor: Colors.AlmostBlack,
      color: Colors.White,
    },
    "@media screen and (max-width:750px)": {
      height: "40vh",
      maxWidth: "100%",
      padding: "3%",
      backgroundColor: Colors.AlmostBlack,
      color: Colors.White,
    },
  },
  footerContainerInverted: {
    "@media screen and (max-width:960px)": {
      height: "100%",
      maxWidth: "100%",
      padding: "5% 3% 3% 3%",
      backgroundColor: Colors.Orange,
      color: Colors.AlmostBlack,
    },
    "@media screen and (max-width:750px)": {
      height: "40vh",
      maxWidth: "100%",
      padding: "3%",
      backgroundColor: Colors.Orange,
      color: Colors.AlmostBlack,
    },
  },
  footerContent: {
    "@media screen and (max-width:960px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems:'center',
      justifyContent:"space-between",
      columnGap:"5%"
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  footerHeader: {
    "@media screen and (max-width:960px)": {
      height:"100%"
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingS,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "32px",
      height: "auto",
      width:"100%"
    },
  },
  footerDescription: {
    "@media screen and (max-width:960px)": {
      ...Fonts.BodyS,
      lineHeight: "2.8vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.35rem",
      height: "100%",
      width:"40%",
    },
    "@media screen and (max-width:750px)": {
      ...Fonts.BodyS,
      lineHeight: "2.5vh",
      fontFamily: "Outline Light, sans-serif",
      fontSize: "1.5rem",
      height: "35%",
      width:"100%"
    },
  },
  social: {
    "@media screen and (max-width:960px)": {
      width: "15%",
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      alignItems:'baseline'
    },
    "@media screen and (max-width:750px)": {
      width: "25%",
      display: "flex",
      alignItems: "center",
      alignSelf:'start',
      justifyContent: "space-between",
      height: "25%",
    },
  },
  icon: {
    ":hover": {
      cursor: "pointer",
      svg: {
        path: {
          fill: Colors.Orange,
        },
      },
    },
  },
  iconInverted: {
    svg: {
      path: {
        fill: Colors.AlmostBlack,
      },
    },
    ":hover": {
      cursor: "pointer",
      svg: {
        path: {
          fill: Colors.White,
        },
      },
    },
  },
});

import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../utils/helpers";

export const styles = mergeStyleSets({
  footer: {
    height: "100%",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column-reverse",
  },
  footerContainer: {
    "@media screen and (max-width:750px)": {
      height: "40vh",
      maxWidth: "100%",
      padding: "3vw",
      backgroundColor: Colors.AlmostBlack,
      color: Colors.White,
    },
  },
  footerContainerInverted: {
    "@media screen and (max-width:750px)": {
      height: "40vh",
      maxWidth: "100%",
      padding: "3vw",
      backgroundColor: Colors.Orange,
      color: Colors.AlmostBlack,
    },
  },
  footerContent: {
    "@media screen and (max-width:750px)": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  },
  footerHeader: {
    "@media screen and (max-width:750px)": {
      ...Fonts.HeadingS,
      fontFamily: "Big Shoulders Display Black, sans-serif",
      letterSpacing: "0",
      fontWeight: "900",
      lineHeight: "32px",
      height: "25%",
      paddingTop: "15%",
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

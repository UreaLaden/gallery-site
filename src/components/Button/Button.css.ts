import { mergeStyleSets } from "@fluentui/react";
import { Colors, Fonts } from "../../utils/helpers";

export const styles = mergeStyleSets({
  container: {
    width: "100%",
    height: "100%",
    color: Colors.White,
    display: "flex",
    ":hover": {
        cursor:'pointer',
      "#buttonMain": {
        backgroundColor: Colors.Orange,
      },
      "#buttonSelector": {
        backgroundColor: Colors.AlmostBlack,
      },
    },
  },
  containerInverted: {
    width: "100%",
    height: "100%",
    color: Colors.White,
    display: "flex",
    flexDirection:"row-reverse",
    ":hover": {
        cursor:'pointer',
      "#buttonMain": {
        backgroundColor: Colors.Orange,
      },
      "#buttonSelector": {
        backgroundColor: Colors.AlmostBlack,
      },
    },
  },
  buttonMain: {
    "@media screen and (min-width:1023px)": {
      backgroundColor: Colors.AlmostBlack,
      height: "100%",
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media screen and (max-width:1023px)": {
      backgroundColor: Colors.AlmostBlack,
      height: "100%",
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media screen and (max-width:750px)": {
      backgroundColor: Colors.AlmostBlack,
      height: "100%",
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonText: {
    ...Fonts.BodyS,
    fontFamily: "Big Shoulders Display Black, sans-serif",
    fontWeight: "600",
    transform: "scaleY(1.82)",
    letterSpacing: "1px",
    padding: "0 10%",
    "@media screen and (min-width:1023px)": {
      letterSpacing:"2px",
      fontSize:"1.3vw"
    }
  },
  buttonSelector: {
    "@media screen and (min-width:1023px)": {
      backgroundColor: Colors.Orange,
      height: "100%",
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media screen and (max-width:1023px)": {
      backgroundColor: Colors.Orange,
      height: "100%",
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "@media screen and (max-width:750px)": {
      backgroundColor: Colors.Orange,
      height: "100%",
      width: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  buttonIcon: {
    "@media screen and (max-width:750px)": {
      transform: "scale(1.5)",
    },
  },
});

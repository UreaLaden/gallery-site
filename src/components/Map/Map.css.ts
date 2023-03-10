import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mapContainer: {
    "@media screen and (min-width:1024px)": {
      width: "100%",
      height: "50vh",
      position: "absolute",
      "z-index": 1,
      top: 0,
      left: 0,
    },
    "@media screen and (max-width:1023px)": {
      width: "100%",
      height: "50vh",
      position: "absolute",
      "z-index": 1,
      top: 0,
      left: 0,
    },
    "@media screen and (max-width:750px)": {
      width: "100%",
      height: "65vh",
      position: "absolute",
      "z-index": 1,
      top: 0,
      left: 0,
    },
  },
});

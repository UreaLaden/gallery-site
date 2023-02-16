import { mergeStyleSets } from "@fluentui/react";

export const styles = mergeStyleSets({
  mapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "65vh",
    width: "100%",
    "z-index": 1,
  },
});

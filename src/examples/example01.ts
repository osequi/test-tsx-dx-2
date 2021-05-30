import { defaultsDeep } from "lodash";

export interface TSplitScreen {
  column: string | string[];
  gap: number | number[];
}

export const splitScreen: TSplitScreen = {
  column: "25%",
  gap: 1,
};

// hover: useSplitScreen({ column, gap }?: TSplitScreen)
// ctrl+hover: the same
// no info on types, default props
function useSplitScreen1({ column, gap }: TSplitScreen = splitScreen) {}

// hover: useSplitScreen({ column, gap }: TSplitScreen)  ALMOST THE SAME!!
// ctrl+hover: function useSplitScreen({ column = "25%", gap = 1 }
// no info on types
// useSplitScreen() is not possible with the error: Expected 1 arguments, but got 0.ts(2554)
function useSplitScreen2({ column = "25%", gap = 1 }: TSplitScreen) {}

function useSplitScreen3(props: TSplitScreen) {
  const props2 = defaultsDeep(props, splitScreen);
}

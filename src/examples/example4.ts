import { TExample, defaultProps } from "./example";
import { defaultsDeep } from "lodash";

/**
 * Task: Wrap up prop destructuring + default props
 */

/**
 * This is ugly.
 */
export function useExample4({ variant, name, number, options }: TExample) {
  const props2 = defaultsDeep({ variant, name, number, options }, defaultProps);
}

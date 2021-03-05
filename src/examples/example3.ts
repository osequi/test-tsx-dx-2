import { TExample, defaultProps } from "./example";
import { mergeProps } from "@react-aria/utils";
import { defaultsDeep } from "lodash";

/**
 * Task: display props with default props
 */

/**
 * This doesn't work
 */
export function useExample3(props: TExample = defaultProps) {
  return props;
}

/**
 * This doesn't work with nested objects
 */
export function useExample3a(props: TExample) {
  const props2 = { ...defaultProps, ...props };
  return props2;
}

/**
 * This doesn't work with nested objects
 */
export function useExample3b(props: TExample) {
  const props2 = mergeProps(defaultProps, props);
  return props2;
}

/**
 * This doesn't work. The last prop object overrides all previous ones.
 */
export function useExample3c(props: TExample) {
  const props2 = { ...props, ...defaultProps };
  return props2;
}

/**
 * This doesn't work. The last prop object overrides all previous ones.
 */
export function useExample3d(props: TExample) {
  const props2 = mergeProps(props, defaultProps);
  return props2;
}

/**
 * This works.
 */
export function useExample3e(props: TExample) {
  const props2 = defaultsDeep(props, defaultProps);
  return props2;
}

import { TExample } from "./example";

/**
 * Task: display the first two props
 */

/**
 * Compared to example1:
 * 1. all's the same
 */
export function useExample2({ variant, name }: TExample) {
  return {
    variant: variant,
    name: name,
  };
}

/**
 * Compared to example1:
 * 1. all's the same
 */
export function useExample2a({ variant, name }: TExample): object {
  return {
    variant: variant,
    name: name,
  };
}

/**
 * Compared to example1:
 * 1. on hover the type info is complete
 * ```
 * function useExample2a(props: TExample): {
    variant: TVariants;
    name: string | string[];
}
 * ```
 */
export function useExample2b(props: TExample) {
  const { variant, name } = props;
  return {
    variant: variant,
    name: name,
  };
}

/**
 * Compared to above:
 * 1. On hover all the info is lost
 * ```
 * function useExample2c(props: TExample): object
 * ```
 *
 * Compared to example1:
 * 1. On prop name hover type info is shown:
 * ```
 * const name: string | string[]
 * ```
 */
export function useExample2c(props: TExample): object {
  const { variant, name } = props;
  return {
    variant: variant,
    name: name,
  };
}

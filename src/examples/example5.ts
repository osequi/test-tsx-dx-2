import { TExample, defaultProps } from "./example";
import { defaultsDeep } from "lodash";

/**
 * Task: handle null values in props
 */

/**
 * With default props you never run in destructuring errors like `Property not defined`.
 * On iterables `?` makes all safe
 */
export function useExample5(props: TExample): TExample {
  const props2: TExample = defaultsDeep(props, defaultProps);
  const { variant, name, number, options, iterable } = props2;
  const { param1, param2 } = options;
  const { entry1 } = param1;

  const iterableMapped = iterable?.map((item) => item).join(", ");
  console.log({ iterableMapped });

  return {
    variant: variant,
    name: name,
    number: number,
    options: {
      param1: {
        entry1: entry1,
      },
      param2: param2,
    },
    iterable: iterable,
  };
}

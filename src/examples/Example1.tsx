import React from "react";
import { defaultsDeep } from "lodash";
import { TExample, defaultProps, useExample3e } from "./";

/**
 * This works
 */
export function Example1(props: TExample) {
  const example: TExample = useExample3e({ ...props });
  return <>{JSON.stringify(example, null, 2)}</>;
}

/**
 * This works
 */
export function Example1a(props: TExample) {
  const props2 = defaultsDeep({ ...props }, defaultProps);
  const example: TExample = useExample3e({ ...props2 });
  return <>{JSON.stringify(example, null, 2)}</>;
}

/**
 * This works
 */
export function Example1b(props: TExample = defaultProps) {
  const example: TExample = useExample3e({ ...props });
  return <>{JSON.stringify(example, null, 2)}</>;
}

export function Example1c(props: TExample) {
  const example: TExample = useExample3e({ ...props });
  return <>{JSON.stringify(example, null, 2)}</>;
}
Example1c.defaultProps = defaultProps;

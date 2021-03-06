import React from "react";
import { TExample, defaultProps } from "./example";
import { defaultsDeep } from "lodash";

/**
 * Task: handle null values in props
 */

export function Example5(props: TExample) {
  const props2: TExample = defaultsDeep({ ...props }, defaultProps);
  const { variant, name, number, options, iterable } = props2;
  const { param1, param2 } = options;
  const { entry1 } = param1;

  const iterableMapped = iterable?.map((item) => item).join(", ");

  return (
    <ul>
      <li>Variant: {variant}</li>
      <li>Name: {name}</li>
      <li>Options: {JSON.stringify(options, null, 2)}</li>
      <li>Iterable: {JSON.stringify(iterable, null, 2)} </li>
      <li>Iterable mapped: {iterableMapped}</li>
      <li>Entry1: {entry1}</li>
    </ul>
  );
}

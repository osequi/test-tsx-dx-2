import { TExample } from "./example";

/**
 * Task: display all props
 */

/**
 * * Successes:
 * 1. `hover` is complete:
 * ```
 * (alias) function useExample1({ variant, name, number, options }: TExample): {
    variant: TVariants;
    name: string | string[];
    number: number | number[];
    options: {
        param1: {
            entry1: string;
        };
        param2: string;
    };
}```

 * Problems:
 * 1. No return type
 * 2. `variant, name, number, options` is re-declared two times
 * 3. On `ctrl+hover` only partial info is shown:
 * ```
 * export function useExample1({ variant, name, number, options }: TExample) {
  return {
    variant: variant,
    name: name,
    number: number,
    options: options,
  };
}
```
 */
export function useExample1({ variant, name, number, options }: TExample) {
  return {
    variant: variant,
    name: name,
    number: number,
    options: options,
  };
}

/**
 * Problems:
 * 1. `variant, name, number, options` is re-declared two times
 * 2. On hover no info at all:
 * ```
 * function useExample1a({ variant, name, number, options, }: TExample): TExample
 * ```
 * 3. On `ctrl+hover` only partial info is shown:
 * ```
 * export function useExample1a({
  variant,
  name,
  number,
  options,
}: TExample): TExample {
  ```
 */
export function useExample1a({
  variant,
  name,
  number,
  options,
}: TExample): TExample {
  return {
    variant: variant,
    name: name,
    number: number,
    options: options,
  };
}

/**
 * Problems:
 * 1. No return type
 * 2. On hover no info at all:
 * ```
 * function useExample2(props: TExample): TExample
 * ```
 * 3. On `ctrl+hover` only partial info is shown:
 * ```
 * export function useExample2(props: TExample) {
  return props;
}
 * ```
 */
export function useExample1c(props: TExample) {
  return props;
}

/**
 * Problems
 * 
 * 1. On hover no info at all
 * ```
 * function useExample2a(props: TExample): TExample
 * ```
 * 2. On `ctrl+hover` only partial info is shown:
 * ```
 * export function useExample2a(props: TExample): TExample {
  return props;
}
 * ```
 */
export function useExample1b(props: TExample): TExample {
  return props;
}

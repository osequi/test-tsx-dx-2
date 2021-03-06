export type TVariants = "Variant1" | "Variant2";

export interface TExample {
  variant: TVariants;
  name: string | string[];
  number: number | number[];
  options?: {
    param1: {
      entry1: string;
    };
    param2: string;
  };
  iterable?: string[];
}

export const defaultProps: TExample = {
  variant: "Variant1",
  name: null,
  number: null,
  options: {
    param1: {
      entry1: "entry1",
    },
    param2: "param2",
  },
  iterable: null,
};

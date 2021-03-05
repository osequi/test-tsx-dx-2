import { useExample1, useExample2 } from "../examples";

export default function Home() {
  const example = {
    variant: "Variant1",
    name: "name",
    number: 1,
  };

  return (
    <ul>
      <li>Example1: {JSON.stringify(useExample1(example), null, 2)}</li>
      <li>Example2: {JSON.stringify(useExample2(example), null, 2)}</li>
    </ul>
  );
}

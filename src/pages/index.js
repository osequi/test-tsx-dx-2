import { useExample1 } from "../examples";

export default function Home() {
  const example1 = useExample1({
    variant: "Variant1",
    name: "name",
    number: 1,
  });

  return (
    <ul>
      <li>Example1: {JSON.stringify(example1, null, 2)}</li>
    </ul>
  );
}

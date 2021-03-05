import {
  useExample1,
  useExample1c,
  useExample3,
  useExample3a,
  useExample3b,
  useExample3c,
  useExample3d,
  useExample3e,
  Example1,
  Example1a,
  Example1b,
  Example1c,
  Example2,
} from "../examples";

export default function Home() {
  const example = {
    variant: "Variant1",
    name: "name",
    number: 1,
  };

  return (
    <ul>
      <li>Example1: {JSON.stringify(useExample1(example), null, 2)}</li>
      <li>Example2: {JSON.stringify(useExample1c(example), null, 2)}</li>
      <li>Example3: {JSON.stringify(useExample3(), null, 2)}</li>
      <li>
        Example3.1: {JSON.stringify(useExample3({ name: "alika" }), null, 2)}
      </li>
      <li>Example3a: {JSON.stringify(useExample3a(), null, 2)}</li>
      <li>
        Example3a.1: {JSON.stringify(useExample3a({ name: "alika" }), null, 2)}
      </li>
      <li>
        Example3a.2:
        {JSON.stringify(
          useExample3a({ name: "alika", options: { param2: "ok" } }),
          null,
          2
        )}
      </li>
      <li>
        Example3b:
        {JSON.stringify(
          useExample3b({ name: "alika", options: { param2: "ok" } }),
          null,
          2
        )}
      </li>
      <li>
        Example3c:
        {JSON.stringify(
          useExample3c({ name: "alika", options: { param2: "ok" } }),
          null,
          2
        )}
      </li>
      <li>
        Example3d:
        {JSON.stringify(
          useExample3d({ name: "alika", options: { param2: "ok" } }),
          null,
          2
        )}
      </li>
      <li>
        Example3e:
        {JSON.stringify(
          useExample3e({ name: "alika", options: { param2: "ok" } }),
          null,
          2
        )}
      </li>
      <li>
        <hr />
      </li>
      <li>
        Component example 1:
        <Example1 name="alika" options={{ param2: "ok" }} />
      </li>
      <li>
        Component example 1a:
        <Example1a name="alika" options={{ param2: "ok" }} />
      </li>
      <li>
        Component example 1b:
        <Example1b name="alika" options={{ param2: "ok" }} />
      </li>
      <li>
        Component example 1c:
        <Example1c name="alika" options={{ param2: "ok" }} />
      </li>
      <li>
        Component example 2:
        <Example2 />
      </li>
    </ul>
  );
}

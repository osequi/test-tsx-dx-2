# test-tsx-dx-2

Finding a good DX for `props` in Typescript and React.

## Best practices

See [Typescript wiki](https://github.com/microsoft/TypeScript/wiki/Performance).
See [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

### 1. Preferring Interfaces Over Intersections

> Interfaces/extends is suggested over creating intersection types.

### 2. Using Type Annotations (especially return types)

- Adding type annotations, especially return types, can save the compiler a lot of work.

### 3. Preferring Base Types Over Unions

- instead `Interface1 | Interface2` use `extend`

## Function signature

### Bad news

- The perfect hover (destructured signature) duplicates two times the interface definition and should have no return type. (example1)
- Return types always break the hover info both when props in the signature are destructured or not. (example1)

### Good news

- When signature is not destructured but later `props` is destructured we got proper type info on hover. (example2)
- This is good news only when starting to write code. Hovering in another file gives no hints...

### Solution

- perfect hover is not achievable => don't rush for it => don't destructure in signature => use `props` and avoid duplication

## Default props

- `useExample3(props: TExample = defaultProps)` this doesn't work (with deep objects).
- This doesn't works: https://react-spectrum.adobe.com/react-aria/mergeProps.html
- This works (from lodash):

```
export function useExample3e(props: TExample) {
  const props2 = defaultsDeep(props, defaultProps);
  return props2;
}
```

## Components

- Function signature, Default props should follow the rule above.

However:

### Return type

- By default `JSX.Element` is added to function return type. (See it when hover on a component declared without return type like `export function Example1(props: TExample) {}`)
- So when we don't add a return type still don't break Best practices rules. (???) The code looks inconsistent compared to `.ts` but inferring works fine.

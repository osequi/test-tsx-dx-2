# test-tsx-dx-2

Finding a good DX for `props` in Typescript and React.

## Best practices

See [Typescript wiki](https://github.com/microsoft/TypeScript/wiki/Performance).

### 1. Preferring Interfaces Over Intersections

> Interfaces/extends is suggested over creating intersection types.

### 2. Using Type Annotations (especially return types)

- Adding type annotations, especially return types, can save the compiler a lot of work.

## Problems

- The perfect hover duplicates two times the interface definition and should have no return type.

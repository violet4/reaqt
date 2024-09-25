# reaqt

react layout components

This library is meant to make it easy to structure the layout of your app:

1. Without relying on disjointed CSS files; all the code is directly in the component as inline styles
2. With a user-friendly API similar to Qt

For example:

```typescript
<FixedFooterLayout
  mainContent={<AppRouter />}
  footerContent={<NavBar />}
  footerHeight={60}
/>

```

Or:

```typescript
<FlexGridLayout elementsPerRow={4}>
  {children}
</FlexGridLayout>
```

Although this project depends upon React, it is meant to otherwise be as minimal as possible, and thus has no other dependencies.

`npm i violet4/reaqt.git`

It can be directly built using the TypeScript compiler:

`npm build` or `npx tsc`

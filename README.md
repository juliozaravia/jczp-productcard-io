# JCZP-PRODUCTCARD-IO

This is a sample package used to practice deployment into NPM

## Example:

```
import {ProductCard, ProductTitle, ProductImage, ProductButtons} from 'jczp-productcard-io'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

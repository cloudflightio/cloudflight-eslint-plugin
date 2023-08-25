# img-uses-ngsrc

Using [`NgOptimizedImage`](https://angular.io/guide/image-directive) provides a lot of optimizations to improve the Largest Contentful Paint. Therefore, making your application more performant and responsive.

## ❌  Invalid code

```html
<img src="test.jpg" />

<img [src]="imageUrl" />

<img [ngSrc]="imageUrl" [src]="imageUrl" />
```

## ✔ Valid code

```html
<img ngSrc="test.jpg">

<img [ngSrc]="imageUrl">
```

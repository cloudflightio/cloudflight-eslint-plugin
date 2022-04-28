### @typescript-eslint/ban-types

#### String, Boolean, Number, Symbol:

It is considered better to use literals instead of explicitly instantiating these types.

#### Function:

The Function type does not support proper typing, therefore it is better to use Lambda-Types instead. `(): void => string`

#### Object, {}:

The Object type only means 'any non-nullish value', therefore it is only a little better then `unknown`. Prefer to use a `Record<string, unknown>` instead.

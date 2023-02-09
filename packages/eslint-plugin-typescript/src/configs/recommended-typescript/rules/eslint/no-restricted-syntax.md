### eslint/no-restricted-syntax

Prevent labeled statements and `with` statements.

-   Labeled statements: Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.
-   with statements: `with` is disallowed because it makes code impossible to predict and optimize.

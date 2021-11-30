### eslint/prefer-promise-reject-errors

When awaiting a Promise the catch-clause gets triggered when a Promise gets rejected. Since you should only throw `Error` object this is to keep the consistency.

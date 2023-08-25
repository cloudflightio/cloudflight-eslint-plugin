# no-moment-js

MomentJs is [deprecated](https://momentjs.com/docs/#/-project-status/) and should be replaced by one of the recommended replacements. [Luxon and date-fns](https://momentjs.com/docs/#/-project-status/recommendations/) are the most complete alternatives.

## ❌ Invalid Code

```ts
import('moment').then(()=>{});

const fn = await import('moment');

import moment from 'moment';

const moment = require('moment');
```

## ✔ Valid Code

```ts
const fn = await import('date-fns');

import { isSameDay } from 'date-fns';

const dateFns = require('date-fns');
```

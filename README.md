# Mailify
Validate emails by checking if they are disposed or not.

> The types of disposable email addresses

- Throwaway 
- Forwarding 
- Alias 

*Disposable Email Addresses are exactly what they sound like: email addresses that individuals use once and then discard. The use of these email addresses isn't against the law. You may entirely safeguard your real mailbox against the loss of personal information by using temporary mail.*

> How do you detect these?

By going through a huge list of email services provided by [kickbox.com](https://kickbox.com/).

<hr>

## 💁🏼‍♂️ Get started

First install mailify by running:
```
npm i mailify
```

- A basic check that returns JSON 
> TypeScript
```ts
import { disposable } from "mailify";

const email = "lol@yopmail.com";

disposable(email).then(console.log);
```

> JavaScript
```js
const { disposable } = require("mailify");

const email = "lol@yopmail.com";

disposable(email).then(console.log);
```

Returns either:

`{ disposable: true }` or `{ disposable: false`

<hr>

- An advanced query without JSON (production)

> TypeScript
```ts
import { disposable } from "mailify";

const data = "the@email.com";

(async () => {
    const check = await disposed(data);
    if (check.disposable) {
      console.log("Email is disposed!");
      // do something 
    } else {
      console.log("Email is NOT disposable.");
      // do something else
    }    
})();
```

> JavaScript
```js
const { disposable } = require("mailify");

const data = "the@email.com";

(async () => {
    const check = await disposable(data);
    if (check.disposable) {
      console.log("Email is disposable!");
      // do something
    } else {
      console.log("Email is NOT disposable.");
      // do something else
    }    
})();
```

### 🤷🏼‍♂️ Why?

- Filter accounts on your website by denying 
fake/temp emails.
- Less bot or spam accounts 
- More security for your service
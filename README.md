# Mailify
Validate emails by checking if they are a disposable email or not.

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
### Usage

> TypeScript
```ts
import { disposable } from "mailify";

const data = "the@email.com";

(async () => {
    const check = await disposable(data);
    if (check.disposable) {
      console.log("Email is a disposable email, watch out!");
      // do something 
    } else {
      console.log("Email is fine.");
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
      console.log("Email is dirty, keep it out here!");
      // do something
    } else {
      console.log("Email is fine.");
      // do something else
    }    
})();
```

If you log the check, it returns one of the following: 

`{ disposable: true }` or `{ disposable: false`

### 🤷🏼‍♂️ Why?

- Filter accounts on your website by denying 
fake/temp emails.
- Less bot or spam accounts 
- More security for your service
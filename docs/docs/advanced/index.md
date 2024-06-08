---
sidebar_position: 4
---

# Advanced

<small>_hello i guess you are here cuz the basics were too ez for u. feel free to read this section and have a go at it during the workshop, don't need listen if u don't wanna. but help ur team if they need help yea._</small>

In this section, we'll cover more good practices and additional features to give your API more flavour. (yummy).

Ya it might get overwhelming, like why even need to have testing, why need authentication, why need to do this do that. it's too many things for 1 person to do.

But just do it for funsies and for practice.

**The advanced section is not arranged in any order, feel free to pick and choose whichever section you want to view first.**

### Don't know where to start? Here's a lil guide to determine what to do first.

1. **Always, always, always do the task that delivers the most value first (up to you how you want to reason that to yourself). Don't do things that no one cares about.**
   - Is it more important for your server to get hosted, or for your APIs to have good documentation??
   - Is it more important for your server to have a database, or for it to be well tested?
   - Is it more important for your code to be clean, or for it to hosted?
2. **Don't fall into the trap of over optimisation. Work iteratively, we don't need to have the absolutely best solution now**

   - If you remember, there was this piece of code in `app.js` that does not guarantee that the generated `id` would be unique.

   ```javascript
   id: randomInt(0, 999999999),
   ```

   The odds of repeated `id`s in this case are quite low. And it's not like there's gonna be that much todo tasks being created anyway. (this API would probably just collect dust somewhere on your computer.)

   We could've spent another 5mins on this workshop explaining how to guarantee that the `id` field would not repeat, or we could spend just 10s explaining that
   a randomly generated number would work well enough for now.

<small>_aight let's get to it._</small>

# Self Study Guide

It's not like school is gonna teach you all these anyways. you might as well help urself.

## Roadmaps to guide you

- Get started here: https://roadmap.sh/get-started
- Full Stack Roadmap - https://roadmap.sh/full-stack
- Frontend Roadmap - https://roadmap.sh/frontend
- Backend Roadmap - https://roadmap.sh/backend

Quote from a principal Software Engineer from GovTech:

> Looking at the list.. think I still have a long way to go too.
>
> What I’m trying to say is .. that it doesn’t end. Somebody will always point out more important things that we don’t know yet, and that they know. So don’t feel “behind”; feel energised instead, that there’s so much to learn (How boring would it be to know all that there’s to know)
>
> If your time is precious, learn things that have longevity though. Approaches and algorithms are usually as evergreen as their constraints. Tools and esp frameworks, not so much.

## A lil guide to help you prioritise things you need to do.

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

# Secret Agent Supply

School assignment: same site in **SSR** (`SSR.html`) and **CSR** (`CSR.html` + `resources/js/csr.js`).

---

## SSR vs CSR – Short Comparison

### Performance

- **Time to first content:** SSR = content in HTML, paints right away. CSR = empty at first, then content after JS runs.
- **Perceived speed:** SSR feels fast (content immediately). CSR can feel slow (blank, then content).
- **JS impact:** SSR doesn’t need JS to show the page. CSR needs JS for everything visible.

### SEO

- **Initial HTML:** SSR has full content; CSR has almost none (just a container).
- **Search engines:** SSR is easy to index from HTML. CSR is weak unless they run JavaScript.
- **Metadata:** SSR has title/meta in the first response. CSR may only have content after JS runs.

### User Experience

- **Blank vs content:** SSR shows content as soon as HTML/CSS load. CSR shows blank until JS runs.
- **JavaScript:** SSR works without JS. CSR is broken without JS.
- **If JS fails/slow:** SSR still shows content. CSR stays empty or loads late.

---

## Summary Table

| Aspect                | SSR                   | CSR                   |
| --------------------- | --------------------- | --------------------- |
| First visible content | Fast                  | Slower (waits for JS) |
| Perceived speed       | Fast                  | Can feel slow         |
| JS impact             | Low                   | High                  |
| Content in HTML       | Full                  | Almost none           |
| Search engines        | Good (HTML only)      | Weaker (needs JS)     |
| Needs JavaScript      | No                    | Yes                   |
| If JS fails           | Content still visible | Page empty            |

---

**Switch between versions:** Use the link in the footer of each page (“View page in CSR” on SSR, “View page in SSR” on CSR).

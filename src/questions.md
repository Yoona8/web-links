# Questions
## HTML
## CSS
<details>
<summary>Grids (floats)</summary>

  <details>
  <summary>Why to use floats?</summary>

  - Basically used for float elements with text

  </details>

  <details>
  <summary>How to use floats?</summary>

  - `float: left / right / none;`

  </details>

  <details>
  <summary>What about element sizes with floats?</summary>

  - works even for inline elements
  - shrinks to content

  </details>

  <details>
  <summary>How different boxes behave with floats?</summary>

  - block elements after float stop react on it, goes up like with absolute
  - inline elements float around the empty side of float element
  - if all blocks are floats, parent shrinks to 0

  </details>

  <details>
  <summary>What is clear property?</summary>

  - `clear: left / right / both / none;`forbids floating, if after float, sees it

  </details>

  <details>
  <summary>What is clearfix and why do we need it?</summary>

  - using pseudo-element with clear prop to avoid parent shrinking to 0

  </details>
</details>
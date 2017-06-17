# Debugging
## General tips
- F9 - add/remove breakpoint to a line
- F5 - run in the debug mode
- F5 - also to continue to the next breakpoint
- Ctrl+F5 - run without debug
- F10 - step over - next line in debug mode (one line at a time)
- We can also drag yellow arrow (current line) and F10 again
- F11 - to step into a method
- When there is no errors till some poin, we could add there another breakpoint
- Shift+F11 - step out from current method
- Shift+F5 - stop debugger
- Ctrl+Shift+F5 - restart app after manipulations with breakpoints
## Watch window tips
- Watch window for debug mode is a very useful tool (Debug => Windows => Watch => Watch 1)
- We can put there variables, which we want to watch (instead of hovering it any time)
- Red means that the value has just changed
## Autos window
- Works like a watch window, but with automatically selected variables, which we might need
## Locals window
- Same to Autos window, but doesn't show any variations (like Autos) - only vars from local scope
## Breakpoints
- We can use an option to delete all breakpoints
- And also open a window with set breakpoints and remove from there
## Call Stack Window
- Shows what methods app called till the moment where we are now
# Collection of Links
I've created this repository to sort all my tips, tricks, rules, links etc. related to <b>web development</b>. It's not finished yet, actually I'm planning to fill it with new information at least once a week.
As it was basically made for personal usage, information could still not be full or clear for anybody else. But if you want to use it, feel free.

## A11y

<details>
<summary>View links</summary>

- [x] [Spec: ARIA](https://www.w3.org/TR/wai-aria-1.1/)
- [x] [Article: Accessibility Strategies for Your Content Team](https://www.deque.com/blog/accessibility-strategies-for-your-content-team/)

    <details>
    <summary>Notes:</summary>

    - add good text to links (not just "click here" or "show more")
    - add alt to image with important information
    - use the full name and (abbreviation) in brackets on first occurrence, if the abbreviation is less known

    </details>

- [x] [Article: Tips for making interactive elements accessible on mobile devices](https://bitsofco.de/tips-for-making-interactive-elements-accessible-on-mobile-devices/)

    <details>
    <summary>Notes:</summary>

    - place interactive elements where easily accessible
    - `inputmode="numeric"` for special keyboard even if `type="text"`

    </details>

- [x] [Article: Happier HTML5 Form Validation](https://daverupert.com/2017/11/happier-html5-forms/)

    <details>
    <summary>Notes:</summary>

    - `color: currentColor` to reset color to normal text color
    - `a[aria-disabled="true"]` not good to disable a link, but sometimes needed (hint to use a CSS selector)
    - `output.value = ''` accessible in JS for `<output>`

    </details>

- [x] [Article: UX Optimizations For Keyboard-Only And Assistive Technology Users](https://www.smashingmagazine.com/2019/06/ux-optimizations-keyboard-only-assistive-technology-users/)

    <details>
    <summary>Notes:</summary>

    - skip links
    - shortcut menus
    - user education
    - modal focusing
    - navigation menus
    - logical focus after some user events

    </details>

- [x] [Article: Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/?source=post_page---------------------------)

    <details>
    <summary>Notes:</summary>

    - What is a menu?
    - What is a navigation system?
    - What are ARIA menus actually for?
    - What is the difference between top-level menu button and nav top-level link?
    - On what state does menu open?
    - What are the problems with with dropdowns for touch screens?
    - When and why to use content pages?
    - What is the most popular navigation button example (on web)?
    - Why do we use both `hidden` and `[hidden] {display: none;}`?
    - What are WAI ARIA roles for true menus and why don't we use it on lists of links?
    - What are true menus?
    - How to create a true menu with ARIA?
    - Why should we use JS solution instead of non-JS solution?
    - What should be added for a proper keyboard navigation for true menus?

    </details>

- [x] [App: Accessibility Insights](https://accessibilityinsights.io/)

</details>

## HTML and CSS

<details>
<summary>View links</summary>

- [x] [Spec: HTML Specification](https://www.w3.org/TR/html52/)
- [x] [Spec: CSS Standards](https://www.w3.org/Style/CSS/)
- [x] [Article: Alternative Text and Images](https://bitsofco.de/alternative-text-and-images/)

    <details>
    <summary>Notes:</summary>
    
    * a11y for complex images (graphs or alike)
        1. use short and long descriptions 
            ```html
            <img src="#" alt="short description" longdesc="#long-desc">
            <!--or-->
            <img src="#" alt="short description" aria-labelledby="#long-desc">
            <p id="long-desc">Long description here.</p>
            ```
        2. use figure
            ```html
            <figure>
             <img src="#" alt="short description">
             <figcaption>Long description here.</figcaption>
            </figure>
            ```
    * groups of images (like star rating) - fill alt only for one, for others leave empty
        ```html
        <img src="#" alt="4 out of 5 stars">
        <img src="#" alt="">
        ```
    * for super unique cases like clickable schemes `<map>` and `<area>` could be useful
    
    </details>

- [x] [Article: Селектор обобщенных родственных элементов](https://habrahabr.ru/post/150720/)
- [x] [Article: CSS-селекторы](https://learn.javascript.ru/css-selectors)

    <details>
    <summary>Notes:</summary>

    * `:lang(ko)` styling on lang attributes

    </details>

- [x] [Article: Centering: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [ ] [Article: Fighting the Space Between Inline Block Elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [x] [Article: A Complete Guide to the Table Element](https://css-tricks.com/complete-guide-table-element/)
- [ ] [Article: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] [Article: Harnessing Flexbox For Today's Web Apps](https://www.smashingmagazine.com/2015/03/harnessing-flexbox-for-todays-web-apps/)
- [ ] [Article: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [ ] [Article: Creating smooth CSS animations — even with a heavy DOM](https://medium.com/purpledesign/creating-smooth-css-animations-even-with-a-heavy-dom-212cb80441a9)
- [x] [Article: Understanding the Range Input](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [x] [Article: SO, CAN WE USE CSS VARIABLES YET?](https://www.webdesignerdepot.com/2017/10/so-can-we-use-css-variables-yet/)
- [x] [Article: Intriguing CSS Level 4 Selectors](https://webdesign.tutsplus.com/tutorials/intriguing-css-level-4-selectors--cms-29499)
- [ ] [Video: Refactoring (the way we talk about) CSS](https://noti.st/rachelandrew/VqOEAa/refactoring-the-way-we-talk-about-css)
- [ ] [Video: Jen Simmons. CSS Grid videos on YouTube](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
- [x] [Info: Слова, часто используемые в CSS-классах](https://github.com/yoksel/common-words)
- [ ] [Info: Flexbugs](https://github.com/philipwalton/flexbugs#flexbugs)
- [x] [Info: CSS Reference](https://tympanus.net/codrops/css_reference/)
- [x] [Info: State of CSS 2019](https://2019.stateofcss.com/)
- [ ] [Info: Layouts](https://every-layout.dev/)
- [ ] [Info: CSS Grid Layout on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [ ] [Info: Grid by example](https://gridbyexample.com/resources/)
- [ ] [Info: Houdini](https://css-houdini.rocks/js-in-css/)
- [ ] [Practice: Flexbox Froggy](http://flexboxfroggy.com/)
- [x] [Practice: Grid Garden](http://cssgridgarden.com/)
- [ ] [Practice: Griddy. Learn the CSS Grid!](http://griddy.io/)
- [x] [Service: HTML symbols](https://dev.w3.org/html5/html-author/charref)
- [x] [Service: CSS Triggers](https://csstriggers.com/)
- [x] [Code: CSS Effects Snippets](https://emilkowalski.github.io/css-effects-snippets/)
- [x] [Code: CSS Animations Snippets](https://daneden.github.io/animate.css/)
- [ ] [Code: CSS Radio Button Styles From CodePen](https://freebiesupply.com/blog/css-radio-buttons/)
- [ ] [Book: Cascading Style Sheets: The Definitive Guide](http://shop.oreilly.com/product/9780596005252.do) by Eric Meyer
- [ ] [Book: CSS3: The Missing Manual](http://shop.oreilly.com/product/0636920036357.do) by David McFarland

</details>

## JavaScript

<details>
<summary>View links</summary>

- [x] [Article: What is `this`? The Inner Workings of JavaScript Objects](https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a)

    <details>
    <summary>Notes:</summary>

    - if `obj.getThis4 = obj.getThis2.bind(obj);` then here `obj.getThis4.call(a);` we get `this === obj` instead of `a` (respects the first binding)
    - if created like that, always returns `undefined` (arrow functions have never their own `this`, only lexical scope's `this`, even if we use `call` or `bind`)
        ```JavaScript
        const obj = {
            getThis: () => this;
        };
        ```
    - if we use `new` keyword to create an instance, lexical `this` will be the object (binds `this` in the constructor)
      

    </details>

- [x] [Article: Removing duplicate objects from an Array](https://bitsofco.de/removing-duplicate-objects-from-an-array-is-hard/)

    <details>
    <summary>Notes:</summary>
    
    - not very good, but also some comments are helpful
    - consider: maybe add some decisions here
    
    </details>

- [ ] [Article: What is the Shadow DOM?](https://bitsofco.de/what-is-the-shadow-dom/)
- [ ] [Article: Build anything you want with JavaScript](https://learnjavascript.today/)
- [ ] [Article: JavaScript Template Literals and styled-components](https://medium.com/@celsius/javascript-template-literals-and-styled-components-d18f97500ffd)
- [ ] [Article: Machine Learning with JavaScript](https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5)
- [ ] [Article: JavaScript — Learn & Understand Closures](https://codeburst.io/javascript-learn-understand-closures-8ab35586b0c0)
- [ ] [Article: Reactive UIs with VanillaJS](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)
- [ ] [Article: How to keep your JavaScript code simple and easy to read](https://www.freecodecamp.org/news/how-to-keep-your-javascript-code-simple-and-easy-to-read-bff702523e7c/)
- [ ] [Article: ES5 to ESNext — here’s every feature added to JavaScript since 2015](https://medium.com/free-code-camp/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e)
- [ ] [Article: Promises: The Definitive Guide](https://itnext.io/promises-the-definitive-guide-6a49e0dbf3b7)
- [ ] [Article: 4 Modern JavaScript (ES6+) Features You Should Be Using Now](https://programmingwithmosh.com/javascript/essential-modern-javascript-features/)
- [ ] [Article: List of books](https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3)
- [x] [Article: How I added Dark Mode to my website](https://www.freecodecamp.org/news/how-i-added-dark-mode-to-my-website-33611d246425/) - case study.
- [ ] [Info: Учебник JavaScript](https://learn.javascript.ru/)
- [ ] [Info: JavaScript Garden](http://shamansir.github.io/JavaScript-Garden/)
- [ ] [Info: ES6 - New Features: Overview & Comparison](http://es6-features.org/#ExpressionBodies)
- [x] [Lib: Flatpickr](https://flatpickr.js.org/getting-started/)
- [x] [Lib: Moment.js](https://momentjs.com/)
- [ ] [Book: You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson
- [x] Book: Head First JavaScript Programming (O'Reilly, by Elisabeth Robson, Eric Freeman)
- [x] Book: JavaScript: The Definitive Guide (O'Reilly, by David Flanagan)
- [ ] Book: JavaScript: The Good Parts (O'Reilly, by Douglas Crockford)
- [ ] Book: JavaScript Patterns (O'Reilly, by Stoyan Stefanov)

</details>

## TypeScript

<details>
<summary>View links</summary>

- [x] [Article: Types: Generics and Augmentation will Make You a TypeScript Wizard](https://medium.com/iqoqo-engineering/two-advanced-techniques-to-make-you-a-typescript-wizard-df42e00b1cf8)

</details>

## Angular

<details>
<summary>View links</summary>

- [ ] [Article: Angular Optimization. Memoized pipe functions in templates.](https://blog.usejournal.com/angular-optimization-memoized-pipe-functions-in-templates-75f62e16df5a)
- [ ] [Article: Introducing to NG-VDOM: A new way to write Angular application](https://blog.angularindepth.com/introducing-to-ng-vdom-a-new-way-to-write-angular-application-60a3be805e59)
- [ ] [Article: Designing scalable Angular applications](https://medium.com/@OlegVaraksin/designing-scalable-angular-applications-6629b5158277)
- [ ] [Article: Make Your Angular Form’s Error Messages Magically Appear](https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5)
- [ ] [Article: Angular Revisited: Tree-shakable Components and Optional NgModules](https://blog.angularindepth.com/angular-revisited-tree-shakable-components-and-optional-ngmodules-329a4629276d)
- [ ] [Article: Why & How to Lazy Load in Angular](https://medium.com/@kylerjohnson26/why-how-to-lazy-load-in-angular-f86b987cd528)
- [ ] [Article: Tooltip with Angular CDK](https://blog.angularindepth.com/building-tooltips-for-angular-3cdaac16d138)
- [ ] [Article: How to configure Webpack 4 with Angular 7: a complete guide](https://www.freecodecamp.org/news/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471/)

</details>

## React

<details>
<summary>View links</summary>

- [ ] [Article: JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)
- [ ] [Article: How I integrated CSS Modules with SCSS into my React application](https://www.freecodecamp.org/news/how-i-integrated-css-modules-with-scss-into-my-react-application-32f473e1bb51/)

</details>

## Git

<details>
<summary>View links</summary>

- [x] [Info: Git Book](https://git-scm.com/book/en/v2)

    <details>
    <summary>Notes:</summary>

    - setup git
        - download git (both mac and win)
        - download terminal
        - for ru version (if needed): environment => `set LC_ALL=ru_RU.UTF-8` and `set LANG=ru_RU.UTF-8`
    - git line endings
        - set inside `.gitattributes` file
        - `*.md text` for text file to be converted CRLF (win) => LF (macOS, linux)
        - `*.png binary` for `-text -diff` macros
    - config git
        - `git config --global user.name "<name>"`
        - `git config -g user.email "<email>"`
        - `git config --list` stored in the user's dir `.gitconfig` file path: `~/.gitconfig`
        - `git init` to add git to current folder
    - git commands (general)
        - `git help <command>`
        - `git status`
        - `git add .` dir current add to index files for commit
        - `git add <path-to-file>` add particular file(s)
        - `git commit -m "<message>"` creates a save
        - `git commit --amend -m "<message>"` to correct the last commits message (amend changes hash)
        - `git checkout <commit hash>` switches to commit, shows log till this commit
        - `git cat-file -p <commit hash>` shows commit file content `-p` readable format
        - `git diff`
        - `git diff --staged` indexed files
        - `git log` history
        - `git log --oneline`
        - `git log --all` shows the whole log
        - `git log --graph`
        - `git log -1<2/3/4...>` shows only 1/2/3/4/... last commits
        - `git show <commit hash>` to show the content of the commit
        - `git checkout <file>` for not commited, reset file to last commit, even if the file was deleted, can't reverse this command
        - `git checkout <commit hash> <file>` resets file to the state in the commit
        - `git reset HEAD <file>` to unstage indexed, but not yet commited file
        - `git rm <file>` and `git commit --amend --no-edit` removes file from commit and deletes from folder
        - `git rm --cached <file>` and `git commit --amend --no-edit` removes file from commit and keeps unstaged in folder
    - git branches
        - `git checkout -b <pointer name> <comment hash>` or without hash for current commit, creates a pointer to commit
        - `HEAD` indicates current state (where we currently are)
        - when we create a new commit in a branch, the pointer jumps to the last commit
        - `git merge <pointer-to-merge> -m "<message>"` creates a merge commit, the pointer will be current branch
        - `git push origin <what-to-push>:<where-to-push>`
        - `git push :<where-to-push>` to remove branch
        - `git branch -m <name>` to rename current branch
        - `git fetch origin` to get all branches from repo
        - `git checkout -b <new-pointer-name> origin/<branch-name>` to create a new branch from existing pointer
        - `git branch --set-upstream-to=origin/<name>` to link current branch to repo branch
        - `git branch -vv` to show links between branches
    - set SSH and integrations
        - `git remote add origin <git@github.com...>` to link remote and local repos
        - `git remote -v` shows remote repos
        - `git push -u origin master`
        - `mkdir ~/.ssh` creates a folder in user's folder, create an SSH key in this folder
        - `ssh-keygen -t rsa -b 4096 -C "<email@email.com>"` where `-t rsa` sets key type and `-b 4096` sets key length (bit)
            - store private key only on your computer
            - load public key to repo
        - `cat <key>.pub` copy content to github
        - `ssh -T -i ~/.ssh/<key> git@github.com` to check if the key works
        - `ssh -T git@github.com` permission denied?
            - `~/.ssh/config` for settings (also using the appropriate private key)
            - add to the file
                ```
                Host github.com
                    IdentityFile ~/.ssh/key
                ```

    </details>

- [ ] [Info: Git How To](https://githowto.com/)
- [ ] [Info: Git FAQ](http://firstaidgit.ru/#/)
- [ ] [Info: The Art of Command Line](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md)

    <details>
    <summary>Notes:</summary>

    - `pwd` full path to current dir
    - `cd` change dir
        - `cd -` to previous folder
    - `mkdir name` and `touch name` creates a dir or file
    - `ls <path/to>`
        - `ls -1` vertically
        - `ls -a` +hidden
    - `open .` or `start .` or instead of `.` add path to open dir or file
    - `cat <file>` shows the content

    </details>

- [ ] [Info: Как использовать консоль в Windows](http://nicothin.pro/page/console-windows)

</details>

## Workflow

<details>
<summary>View links</summary>

- [ ] [Article: Browser Developer Tools Explained By Training To Become a Chef](https://medium.freecodecamp.org/browser-developer-tools-explained-by-training-to-become-a-chef-edfaa82b740c)
- [ ] [Article: Excluding Files and Folders from Deployment](https://docs.microsoft.com/en-us/aspnet/web-forms/overview/deployment/advanced-enterprise-web-deployment/excluding-files-and-folders-from-deployment)
- [x] [Article: Mind the End of Your Line](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
- [x] [Article: The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/) - browser rendering.
- [x] [Article: Как зарегистрировать свой домен](https://htmlacademy.ru/blog/48-how-to-register-domain)
- [x] [Article: Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [x] [Article: Bringing A Healthy Code Review Mindset To Your Team](https://www.smashingmagazine.com/2019/06/bringing-healthy-code-review-mindset/)
- [x] [Info: How Browsers Work: Behind the scenes of modern web browsers](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
- [x] [Info: БЭМ-методология](https://ru.bem.info/)
- [ ] [Info: HTML Academy Code style for HTML, CSS and JS](http://codeguide.academy/)
- [ ] Book: Code Complete (by Steve McConnell)

</details>

## Optimization

<details>
<summary>View links</summary>

- [ ] [Article: What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- [ ] [Article: Front-End Performance Checklist 2019](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)
- [ ] [Article: История одной оптимизации](http://chikuyonok.ru/2010/11/optimization-story/) старая, но интересная статья
- [ ] [Article: Front-end performance for web designers and front-end developers](https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/)
- [ ] [Article: Анализ скорости загрузки сайта: от пользовательских проблем к их решению](https://www.searchengines.ru/analiz_skorosti.html)
- [ ] [Article: Introducing RAIL: A User-Centric Model For Performance](https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/)
- [ ] [Article: Gone In 60 Frames Per Second: A Pinterest Paint Performance Case Study](https://www.smashingmagazine.com/2013/06/pinterest-paint-performance-case-study/)
- [ ] [Article: CSS performance revisited: selectors, bloat and expensive styles](https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/)
- [ ] [Article: High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- [ ] [Article: A Tale of Animation Performance](https://css-tricks.com/tale-of-animation-performance/)
- [x] [Article: Preload, prefetch and other <link> tags](https://3perf.com/blog/link-rels/)
- [ ] [Info: Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
- [ ] [Info: Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en)
- [ ] [Info: Animations and Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
- [x] [Service: Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [x] [Service: The Front-End Checklist](https://frontendchecklist.io/) great checklist on what to check before deployment

    <details>
    <summary>Notes:</summary>

    - `-webkit-overflow-scrolling: touch;` scroll native to iPhone (not sure, read more)
    - for blocks, which could be empty, add `:empty { display: none; }`
    - `will-change` for animations, but don't use often
    - `<link rel="prefetch">` if needed

    </details>

</details>

## Fonts

<details>
<summary>View links</summary>

- [ ] [Article: SuperSearch — Find Fonts by Contrast, X-Height, Weight and More!](https://fontba.se/blog/super-search)
- [ ] [Article: Typography can make or break your design: a process for choosing type](https://medium.freecodecamp.org/typography-can-make-your-design-or-break-it-7be710aadcfe)
- [ ] [Article: System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)
- [ ] [Article: Web Font Loading Patterns](https://www.bramstein.com/writing/web-font-loading-patterns.html)
- [ ] [Article: Optimizing Google Fonts Performance](https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/)
- [ ] [Article: How to start with variable fonts on the web](https://www.zeichenschatz.net/typografie/how-to-start-with-variable-fonts-on-the-web.html)
- [ ] [Article: Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables)
- [ ] [Info: Variable Fonts](https://variablefonts.dev/)
- [ ] [Info: Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- [x] [Service: Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts)
- [x] [Service: CSS Font Stack](https://www.cssfontstack.com/) collection of web safe CSS fonts
- [x] [Service: Fonts storage](https://fontstorage.com/)
- [ ] [App: FontForge](https://fontforge.github.io/en-US/)

</details>

## SVG

<details>
<summary>View links</summary>

- [x] [Article: Optimizing SVG for Web Use](https://medium.com/larsenwork-andreas-larsen/optimising-svgs-for-web-use-part-1-67e8f2d4035)

    <details>
    <summary>Notes:</summary>

    - use fewer nodes
    - fewer handles
    - integers instead of floats
    - grid not too big

    </details>

- [x] [Article: An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/) by Sara Soueidan
    
    <details>
    <summary>Notes:</summary>

    - HTML inline sprites `<svg><symbol>...</symbol></svg>`
    - SVG sprite file (for IE add plugin svg4everybody)
    - CSS inline SVG sprite (svg+xml, fallback base64, fallback images) can't change CSS props that way
    - using SVG fragment ids and views (some bugs in Safari)

    </details>

- [x] [Article: How to use SVG as a Placeholder, and Other Image Loading Techniques](https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c) from FCC
    
    <details>
    <summary>Notes:</summary>

    - nothing - just add sizes for browser not to re-render
    - placeholder static - ex. a person svg for a person avatar
    - solid color or gradient most suitable colors for the image
    - svg simple shapes (vary 10-100), could be heavy
    - svg simple shapes + blur filter more light and smooth
    - svg silhouettes even with 2 colors look nice

    </details>

- [x] [Article: Of SVG, Minification and Gzip](https://blog.usejournal.com/of-svg-minification-and-gzip-21cd26a5d007)
    
    <details>
    <summary>Notes:</summary>

    The conclusion from the article:
    1. Compressing smaller raw data would probably produce smaller compressed data.
    2. Fewer distinct characters means less entropy. Less entropy is better compression.
    3. More frequently found characters are compressed with less number of bits. Getting rid of less common characters and making the more common chars to be even more common would most probably improve the compression.
    4. Long runs of duplicated code are compressed with a few bits. DRY is not always the best option. Sometimes you’d like to repeat yourself to get better results.
    5. Sometimes more raw data will produce smaller compressed data. Removing entropy will allow the compressor to better remove what is redundant.

    </details>

</details>

# Design
- [ ] [Bottom Navigation Interface](https://blog.prototypr.io/bottom-navigation-interface-fa4bff52065f)
- [ ] [Design articles and courses](https://designacademy.io/)
- [ ] [Sketch master courses](http://sketchmaster.com/)
- [ ] [8 Crazy Ideas For Building a Web Site](https://medium.com/@kevink/8-crazy-ideas-for-building-a-web-site-a25b3f69c517)
- [ ] [Unraveling the JPEG](https://parametric.press/issue-01/unraveling-the-jpeg/)
- [ ] [Image Formats: the nerdy parts](https://speakerdeck.com/lara/image-formats-the-nerdy-parts)
- [ ] [Форматы изображений](https://htmlacademy.ru/blog/113-image-formats)
- [ ] [Про PNG](https://www.artlebedev.ru/technogrette/img/png-1/)
- [x] [Making the Switch Away from Icon Fonts to SVG: Converting Font Icons to SVG](https://www.sarasoueidan.com/blog/icon-fonts-to-svg/) by Sara Soueidan
- [x] [Color Picker](https://colorsupplyyy.com/app)
- [ ] [An Intro to Color Theory: How to combine colors and set the mood of your designs](https://medium.freecodecamp.org/an-intro-to-color-theory-how-to-combine-colors-and-set-the-mood-of-your-designs-79bf5a45b3d)
- [x] [Resource: Undraw](https://undraw.co/)
- [x] [UI8](https://ui8.net/?rel=leda)
- [x] [Unsplash](https://unsplash.com/)
- [x] [Pexels](https://www.pexels.com/)
- [x] [Pages](https://www.pages.xyz/)
- [x] [Land-book](https://land-book.com/)
- [x] [Lapa](https://www.lapa.ninja/)
- [x] [Behance](https://www.behance.net/) different designs (not only web)
- [x] [Dribbble](https://dribbble.com/) so many different cool things
- [x] [Templates](https://colorlib.com/wp/templates/)
- [ ] [Templates: Freebiesbug](https://freebiesbug.com/)
- [ ] [National park designs](https://nationalparktypeface.com/)
- [ ] [Book: Art Direction for the Web](https://www.smashingmagazine.com/printed-books/art-direction-for-the-web/)

## Regex

<details>
<summary>View links</summary>

- [x] [Article: 8 полезных регэкспов с наглядным разбором](https://habr.com/ru/post/66931/)
- [x] [Service: Regex](https://regex101.com/)
- [x] [Service: A Collection of different regex](http://html5pattern.com/)
- [ ] Book: Mastering Regular Expressions (O'Reilly, by Jeffrey Friedl)

</details>

## Algorithms

<details>
<summary>View links</summary>

- [ ] [Article: Improving your Algorithms & Data Structure Skills](https://medium.com/coderbyte/how-to-get-good-at-algorithms-data-structures-d33d5163353f)
- [ ] [Course: Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)
- [ ] [Course: Algorithms Specialization](https://www.coursera.org/specializations/algorithms?authMode=login)
- [x] Book: Introduction To Algorithms (by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein)

</details>

## Design Patterns

<details>
<summary>View links</summary>

- [ ] [Article: GRASP](https://ru.wikipedia.org/wiki/GRASP)
- [ ] [Info: Design patterns, anti-patterns, refactoring](https://sourcemaking.com/)

</details>

## Serverless

<details>
<summary>View links</summary>

- [ ] [Article: A crash course on Serverless APIs with Express and MongoDB](https://hackernoon.com/a-crash-course-on-serverless-apis-with-express-and-mongodb-77774f7730fe)

</details>

## C-sharp

<details>
<summary>View links</summary>

- [x] [Info: Уроки по C# и платформе .NET Framework](https://professorweb.ru/)

</summary>

## Node JS

<details>
<summary>View links</summary>

</details>

## PHP

<details>
<summary>View links</summary>

- [ ] [Info: PHP Standards Recommendations](https://www.php-fig.org/psr/)

</details>

## Docker

<details>
<summary>View links</summary>

- [ ] [Article: How to create your first Docker application](https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-your-first-docker-application-cc03de9b639f/)

</details>

## Machine Learning

<details>
<summary>View links</summary>

- [x] [Article: Machine Learning For Front-End Developers With Tensorflow.js](https://www.smashingmagazine.com/2019/09/machine-learning-front-end-developers-tensorflowjs/) September 2019

</details>

# Tests
- [ ] [Why Use Test-Driven Development?](https://news.codecademy.com/test-driven-development/)
- [ ] [Тестирование: гайд от "чайников"](http://slides.com/elizaveta_s/deck#/)
- [ ] [Visual Regression Testing with PhantomCSS](https://css-tricks.com/visual-regression-testing-with-phantomcss/)
- [ ] [Автоматические тесты при помощи chai и mocha](https://learn.javascript.ru/testing)
- [ ] [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [ ] [Black-box Testing a Node.js Web API](https://medium.com/@grantcarthew/black-box-testing-a-node-js-web-api-d626f7d651be)
- [ ] [Tool: Yandex Gemini](https://tech.yandex.ru/gemini/) - регрессионное тестирование отображения веб-страниц
- [ ] [Tool: Mocha](https://mochajs.org/)
- [ ] [Tool: Chai](http://www.chaijs.com/)
- [ ] [Tool: Emmet Re:view](http://re-view.emmet.io/)
- [ ] [Tool: Standalone test spies, stubs and mocks for JavaScript](http://sinonjs.org/)

## Helpers

<details>
<summary>View links</summary>

- [x] [Service: SNILS generator](https://ortex.github.io/snils-generator/)

</details>

# People and Resources
- [x] [Addy Osmani](https://addyosmani.com/)
- [x] [Rob Dodson](https://robdodson.me/)
- [x] [Heydon works](http://www.heydonworks.com/)
- [x] [Sara Soueidan](https://www.sarasoueidan.com/)
- [x] [Zell](https://zellwk.com/)
- [x] [Una Kravets](https://una.im/)
- [x] [Lea Verou](http://lea.verou.me/)
- [x] [Jen Simmons](https://jensimmons.com/)
- [x] [Yoksel](http://css.yoksel.ru/)
- [x] [Николай Громов](https://nicothin.pro/)
- [x] [Евгений Закурдаев](https://eugeno.ru/)
- [x] [Coding Heroes](https://codingheroes.io/resources/)
- [x] [Frontend Developer Handbook](https://frontendmasters.com/books/front-end-handbook/2019/)
- [x] [Htmlacademy blog](https://htmlacademy.ru/blog)
- [x] [Google developers](https://developers.google.com/)
- [x] [MDN Web docs](https://developer.mozilla.org/en-US/)
- [x] [Front-end Architecture and Performance Engineering](https://csswizardry.com/)
- [x] [Conf list](https://confs.tech/javascript)
- [x] [Checklist Design](https://www.checklist.design/) a collection of the best UX and UI practices
- [x] [Dev](https://dev.to/)
- [x] [Codrops](https://tympanus.net/codrops/)
- [x] [Info: Web Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap)

# Courses and Practice
- [x] [Practice: Codewars](https://www.codewars.com/dashboard)
- [x] [Practice: HackerRank](https://www.hackerrank.com/dashboard)
- [x] [Practice: w3resource](https://www.w3resource.com/)
- [x] [Practice: CodeSignal](https://app.codesignal.com/)
- [x] [Practice: CodinGame](https://www.codingame.com/)
- [x] [Practice: TopCoder](https://www.topcoder.com/challenges)
- [ ] [Practice: LeetCode](https://leetcode.com/)
- [ ] [Practice: CodeChef](https://www.codechef.com/)
- [ ] [Practice: CodeForces](http://codeforces.com/)
- [x] [Practice: FreeCodeCamp](https://www.freecodecamp.org/)
- [ ] [Practice and Courses: GeeksForGeeks](https://www.geeksforgeeks.org/)
- [ ] [Practice and Courses: CoderByte](https://www.coderbyte.com/)
- [x] [Courses: Code with Mosh](https://codewithmosh.teachable.com/)
- [ ] [Courses: Springboard](https://www.springboard.com/)
- [ ] [Courses and Library: SitePoint](https://www.sitepoint.com/)
- [x] [Flatiron School](https://flatironschool.com/)
- [ ] [List of courses](https://medium.freecodecamp.org/515-free-online-programming-computer-science-courses-you-can-start-in-april-8b0ce1817d61)
- [x] [List of (Advanced) JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
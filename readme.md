# Content
I've created this repository to sort all my tips, tricks, rules, links etc. on how to do web. It's not finished yet, actually I'm planning to fill it with new information at least once a week.
This collection is just about everything connected to web development. As it was basically made for personal usage, information could still not be full or clear for anybody else. But if you want to use it, feel free.
- [General](#general)
- [A11y](#a11y)
- [People](#people)
- [Resources](#resources)
- [Courses and practice](#cources-and-practice)
- [HTML](#html)
- [CSS](#css)
- [SASS](#sass)
- [Fonts](#fonts)
- [SVG](#svg)
- [Design](#design)
- [Optimization](#optimization)
- [Automatization](#automatization)
- [Workflow](#workflow)
- [Programming](#programming)
- [JavaScript](#javascript)
- [TypeScript](#typescript)
- [Angular](#angular)
- [React](#react)
- [Serverless](#serverless)
- [C#, .NET](#dotnet)
- [NodeJS](#node-js)
- [PHP](#php)
- [Docker](#docker)
- [Tests](#tests)
- [Helpers](#helpers)
- [Unsorted](#unsorted)

# General
- [x] [BEM: БЭМ-методология](https://ru.bem.info/)
- [x] [Browsers: The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/) - browser rendering.
- [x] [Case: How I added Dark Mode to my website](https://www.freecodecamp.org/news/how-i-added-dark-mode-to-my-website-33611d246425/) - case study.
- [x] [Guide: Как зарегистрировать свой домен](https://htmlacademy.ru/blog/48-how-to-register-domain)
- [x] [Guide: Web Developer Roadmap](https://github.com/kamranahmedse/developer-roadmap)
- [x] [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [x] [Bringing A Healthy Code Review Mindset To Your Team](https://www.smashingmagazine.com/2019/06/bringing-healthy-code-review-mindset/)
- [x] [Book: How Browsers Work: Behind the scenes of modern web browsers](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) book

# A11y
- [x] [Spec: ARIA](https://www.w3.org/TR/wai-aria-1.1/)
- [x] [Resource: Deque](https://www.deque.com/) tools and articles about a11y.
- [x] [Mobile: Tips for making interactive elements accessible on mobile devices](https://bitsofco.de/tips-for-making-interactive-elements-accessible-on-mobile-devices/)

    <details>
    <summary>Notes:</summary>

    - place interactive elements where easily accessible
    - `inputmode="numeric"` for special keyboard even if `type="text"`

    </details>

- [x] [Forms: Happier HTML5 Form Validation](https://daverupert.com/2017/11/happier-html5-forms/)

    <details>
    <summary>Notes:</summary>

    - `color: currentColor` to reset color to normal text color
    - `a[aria-disabled="true"]` not good to disable a link, but sometimes needed (hint to use a CSS selector)
    - `output.value = ''` accessible in JS for `<output>`

    </details>

- [x] [Optimization: UX Optimizations For Keyboard-Only And Assistive Technology Users](https://www.smashingmagazine.com/2019/06/ux-optimizations-keyboard-only-assistive-technology-users/)

    <details>
    <summary>Notes:</summary>

    - skip links
    - shortcut menus
    - user education
    - modal focusing
    - navigation menus
    - logical focus after some user events

    </details>

# People
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

# Resources
- [x] [Coding Heroes](https://codingheroes.io/resources/)
- [x] [Frontend Developer Handbook](https://frontendmasters.com/books/front-end-handbook/2019/)
- [ ] [Htmlacademy blog](https://htmlacademy.ru/blog)
- [ ] [Google developers](https://developers.google.com/)
- [ ] [MDN Web docs](https://developer.mozilla.org/en-US/)
- [ ] [Front-end Architecture and Performance Engineering](https://csswizardry.com/)
- [ ] [Conf list](https://confs.tech/javascript)
- [ ] [Checklist Design](https://www.checklist.design/) a collection of the best UX and UI practices
- [ ] [Dev](https://dev.to/)
- [ ] [Codrops](https://tympanus.net/codrops/)

# Courses and practice
- [x] [Codewars](https://www.codewars.com/dashboard)
- [x] [HackerRank](https://www.hackerrank.com/dashboard)
- [x] [JavaScript functions - Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php)
- [x] [The 10 Best Coding Challenge Websites for 2018](https://medium.com/coderbyte/the-10-best-coding-challenge-websites-for-2018-12b57645b654)
- [x] [Code with Mosh](https://codewithmosh.teachable.com/)
- [x] [FreeCodeCamp](https://www.freecodecamp.org/)
- [ ] [SitePoint](https://www.sitepoint.com/)
- [x] [Flatiron School](https://flatironschool.com/)
- [ ] [List of courses](https://medium.freecodecamp.org/515-free-online-programming-computer-science-courses-you-can-start-in-april-8b0ce1817d61)
- [x] [List of (Advanced) JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
- [ ] [Springboard](https://www.springboard.com/)

# HTML
- [x] [Specification](https://www.w3.org/TR/html52/)
- [x] [Alternative Text and Images](https://bitsofco.de/alternative-text-and-images/)

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
  
- [x] [HTML symbols](https://dev.w3.org/html5/html-author/charref)

# CSS
- [x] [Standards](https://www.w3.org/Style/CSS/)
- [x] [CSS Reference](https://tympanus.net/codrops/css_reference/)
- [x] [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [x] [CSS Triggers](https://csstriggers.com/)
- [x] [Селектор обобщенных родственных элементов](https://habrahabr.ru/post/150720/)
- [x] [CSS-селекторы](https://learn.javascript.ru/css-selectors)
    * `:lang(ko)` styling on lang attributes
- [x] [Intriguing CSS Level 4 Selectors](https://webdesign.tutsplus.com/tutorials/intriguing-css-level-4-selectors--cms-29499)
- [x] [Слова, часто используемые в CSS-классах](https://github.com/yoksel/common-words)
- [x] [State of CSS 2019](https://2019.stateofcss.com/)
- [x] [SO, CAN WE USE CSS VARIABLES YET?](https://www.webdesignerdepot.com/2017/10/so-can-we-use-css-variables-yet/)
- [ ] [Layouts](https://every-layout.dev/)
- [ ] [Layouts: Refactoring (the way we talk about) CSS](https://noti.st/rachelandrew/VqOEAa/refactoring-the-way-we-talk-about-css)
- [ ] [CSS Grid Layout on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [ ] [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [x] [Grid Garden](http://cssgridgarden.com/)
- [ ] [Grid template builder](https://codepen.io/anthonydugois/)
- [ ] [Griddy. Learn the CSS Grid!](http://griddy.io/)
- [ ] [Grid by example](https://gridbyexample.com/resources/)
- [ ] [Jen Simmons. CSS Grid videos on YouTube](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
- [ ] [Flexbox Froggy](http://flexboxfroggy.com/)
- [ ] [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] [Flexbugs](https://github.com/philipwalton/flexbugs#flexbugs)
- [ ] [Harnessing Flexbox For Today's Web Apps](https://www.smashingmagazine.com/2015/03/harnessing-flexbox-for-todays-web-apps/)
- [ ] [Fighting the Space Between Inline Block Elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [x] [A Complete Guide to the Table Element](https://css-tricks.com/complete-guide-table-element/)
- [x] [Understanding the Range Input](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [x] [CSS Effects Snippets](https://emilkowalski.github.io/css-effects-snippets/)
- [x] [CSS Animations Snippets](https://daneden.github.io/animate.css/)
- [ ] [CSS Radio Button Styles From CodePen](https://freebiesupply.com/blog/css-radio-buttons/)
- [ ] [Creating smooth CSS animations — even with a heavy DOM](https://medium.com/purpledesign/creating-smooth-css-animations-even-with-a-heavy-dom-212cb80441a9)
- [ ] [Cascading Style Sheets: The Definitive Guide](http://shop.oreilly.com/product/9780596005252.do) by Eric Meyer
- [ ] [CSS3: The Missing Manual](http://shop.oreilly.com/product/0636920036357.do) by David McFarland
- [ ] [Finally, a CSS only solution to :hover on touchscreens](https://blog.usejournal.com/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c)
- [ ] [Houdini](https://css-houdini.rocks/js-in-css/)

# Fonts
- [x] [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts)
- [ ] [SuperSearch — Find Fonts by Contrast, X-Height, Weight and More!](https://fontba.se/blog/super-search)
- [ ] [Variable Fonts](https://variablefonts.dev/)
- [ ] [Typography can make or break your design: a process for choosing type](https://medium.freecodecamp.org/typography-can-make-your-design-or-break-it-7be710aadcfe)
- [x] [CSS Font Stack](https://www.cssfontstack.com/) collection of web safe CSS fonts
- [ ] [Fonts: FontForge](https://fontforge.github.io/en-US/)
- [x] [Fonts storage](https://fontstorage.com/)
- [ ] [System Font Stack](https://css-tricks.com/snippets/css/system-font-stack/)
- [ ] [Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
- [ ] [Web Font Loading Patterns](https://www.bramstein.com/writing/web-font-loading-patterns.html)
- [ ] [Fonts: Optimizing Google Fonts Performance](https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/)
- [ ] [How to start with variable fonts on the web](https://www.zeichenschatz.net/typografie/how-to-start-with-variable-fonts-on-the-web.html)
- [ ] [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables)

# SVG
- [x] [Optimizing SVG for Web Use](https://medium.com/larsenwork-andreas-larsen/optimising-svgs-for-web-use-part-1-67e8f2d4035)

    <details>
    <summary>Notes:</summary>

    - use fewer nodes
    - fewer handles
    - integers instead of floats
    - grid not too big

    </details>

- [x] [An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/) by Sara Soueidan
- [ ] [How to use SVG as a Placeholder, and Other Image Loading Techniques](https://medium.freecodecamp.org/using-svg-as-placeholders-more-image-loading-techniques-bed1b810ab2c) from FCC
- [ ] [Of SVG, Minification and Gzip](https://blog.usejournal.com/of-svg-minification-and-gzip-21cd26a5d007)

# Design
- [ ] [“UX trends”. Don’t believe the hype.](https://blog.prototypr.io/ux-trends-dont-believe-the-hype-f4334dfbc2f0)
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
- [x] [Undraw](https://undraw.co/)
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

# Optimization
- [ ] [Front-End Performance Checklist 2019](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)
- [ ] [The Front-End Checklist](https://frontendchecklist.io/) great checklist on what to check before deployment
- [ ] [Чек-лист вёрстки  что можно отдавать клиенту, а что надо переделывать](https://habrahabr.ru/post/114256/)
- [ ] [Что поправить в верстке перед выпуском в продакшн?](http://arinagavrilova.ru/skills-up/frontend/chto-popravit-v-verstke-pered-vypuskom-v-prodakshn/)
- [ ] [Производительность верстки](http://h4.github.io/intensive-adaptive-lesson-7/#cover) слайды
- [ ] [История одной оптимизации](http://chikuyonok.ru/2010/11/optimization-story/) старая, но интересная статья
- [ ] [Front-end performance for web designers and front-end developers](https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/)
- [ ] [Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
- [ ] [Анализ скорости загрузки сайта: от пользовательских проблем к их решению](https://www.searchengines.ru/analiz_skorosti.html)
- [ ] [Introducing RAIL: A User-Centric Model For Performance](https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/)
- [ ] [Gone In 60 Frames Per Second: A Pinterest Paint Performance Case Study](https://www.smashingmagazine.com/2013/06/pinterest-paint-performance-case-study/)
- [ ] [CSS performance revisited: selectors, bloat and expensive styles](https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/)
- [ ] [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en)
- [ ] [Animations and Performance](https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance)
- [ ] [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- [ ] [A Tale of Animation Performance](https://css-tricks.com/tale-of-animation-performance/)
- [ ] [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

# Workflow
- [ ] [Git Book](https://git-scm.com/book/en/v2)
- [ ] [Git How To](https://githowto.com/)
- [ ] [Git FAQ](http://firstaidgit.ru/#/)
- [ ] [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line/blob/master/README.md)
- [ ] [Command Line courses](https://www.vikingcodeschool.com/web-development-basics/a-command-line-crash-course)
- [ ] [Command Line courses adv](https://learncodethehardway.org/unix/)
- [ ] [Как использовать консоль в Windows](http://nicothin.pro/page/console-windows)
- [ ] [HTML Academy Code style for HTML, CSS and JS](http://codeguide.academy/)
- [ ] [Кодгайд: почему, зачем и как?](https://htmlacademy.ru/blog/62-codeguide-why-what-and-how)
- [ ] [Browser Developer Tools Explained By Training To Become a Chef](https://medium.freecodecamp.org/browser-developer-tools-explained-by-training-to-become-a-chef-edfaa82b740c)
- [ ] [Excluding Files and Folders from Deployment](https://docs.microsoft.com/en-us/aspnet/web-forms/overview/deployment/advanced-enterprise-web-deployment/excluding-files-and-folders-from-deployment)
- [x] [Mind the End of Your Line](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
- [ ] Book: Code Complete (by Steve McConnell)

# Programming
- [x] [8 полезных регэкспов с наглядным разбором](https://habr.com/ru/post/66931/)
- [x] [Regex](https://regex101.com/)
- [x] [A Collection of different regex](http://html5pattern.com/)
## Algorithms
- [ ] [Improving your Algorithms & Data Structure Skills](https://medium.com/coderbyte/how-to-get-good-at-algorithms-data-structures-d33d5163353f)
### Courses
- [ ] [Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)
- [ ] [Algorithms Specialization](https://www.coursera.org/specializations/algorithms?authMode=login)
## Data structures
- [ ] [Patterns: Pyramid of Doom — the Signs and Symptoms of a common anti-pattern](https://itnext.io/pyramid-of-doom-the-signs-and-symptoms-of-a-common-anti-pattern-c716838e1819)
- [ ] [Patterns: Design patterns, anti-patterns, refactoring](https://sourcemaking.com/)
- [ ] [Patterns: Software Architecture - The Difference Between Architecture and Design](https://medium.com/@maladdinsayed/software-architecture-the-difference-between-architecture-and-design-7936abdd5830)
- [ ] [Patterns: GRASP](https://ru.wikipedia.org/wiki/GRASP)
- [ ] Book: Mastering Regular Expressions (O'Reilly, by Jeffrey Friedl)
- [x] Book: Introduction To Algorithms (by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein)

# JavaScript
- [ ] [What is the Shadow DOM?](https://bitsofco.de/what-is-the-shadow-dom/)
- [ ] [Учебник JavaScript](https://learn.javascript.ru/)
- [ ] [Introducing JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
- [ ] [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- [ ] [Build anything you want with JavaScript](https://learnjavascript.today/)
- [ ] [JavaScript Template Literals and styled-components](https://medium.com/@celsius/javascript-template-literals-and-styled-components-d18f97500ffd)
- [ ] [JavaScript Frameworks, Performance Comparison](https://medium.com/@ajmeyghani/javascript-frameworks-performance-comparison-c566d19ab65b)
- [ ] [How to Write Accessible JavaScript](https://medium.com/dailyjs/4-javascript-techniques-for-building-accessible-web-interfaces-348f820c157f)
- [ ] [The Magic Of this Keyword](https://medium.com/@js_tut/the-magic-of-this-keyword-2ed897d6033b)
- [ ] [11 JavaScript Tricks You Won’t Find in Most Tutorials](https://medium.com/@bretcameron/12-javascript-tricks-you-wont-find-in-most-tutorials-a9c9331f169d)
- [ ] [Understanding Prototypes in JavaScript](https://itnext.io/understanding-prototypes-in-javascript-e466244da086)
- [ ] [Machine Learning with JavaScript](https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5)
- [ ] [JavaScript — Learn & Understand Closures](https://codeburst.io/javascript-learn-understand-closures-8ab35586b0c0)
- [ ] [Reactive UIs with VanillaJS](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)
- [ ] [How to keep your JavaScript code simple and easy to read](https://www.freecodecamp.org/news/how-to-keep-your-javascript-code-simple-and-easy-to-read-bff702523e7c/)
- [ ] [JavaScript: Array Methods Cheatsheet](https://medium.com/@timhancodes/javascript-array-methods-cheatsheet-633f761ac250)
- [ ] [A perfect guide for cracking a JavaScript interview (A developer’s perspective)](https://medium.com/@SilentHackz/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-cb1716d35381)
- [ ] [JavaScript Garden](http://shamansir.github.io/JavaScript-Garden/)
- [x] [Things You Didn’t Know You Could Do With The Console in JavaScript](https://medium.com/the-non-traditional-developer/things-you-didnt-know-you-could-do-with-the-console-in-javascript-6eed68ccf534)
- [ ] [ES5 to ESNext — here’s every feature added to JavaScript since 2015](https://medium.com/free-code-camp/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e)
- [ ] [ES6: New Features: Overview & Comparison](http://es6-features.org/#ExpressionBodies)
- [ ] [ES6: Классы](https://learn.javascript.ru/es-class)
- [ ] [ES6: Promise](https://learn.javascript.ru/promise)
- [ ] [ES6: Promises: The Definitive Guide](https://itnext.io/promises-the-definitive-guide-6a49e0dbf3b7)
- [ ] [ES6: Наследование классов в JavaScript](https://learn.javascript.ru/class-inheritance)
- [ ] [ES6: Javascript Classes and Inheritance ES6, ES5](https://medium.com/@_jmoller/javascript-clases-and-inheritance-1f8de29c845c)
- [ ] [ES6: 4 Modern JavaScript (ES6+) Features You Should Be Using Now](https://programmingwithmosh.com/javascript/essential-modern-javascript-features/)
- [ ] [ES6: Handling errors with async/await and promises](https://medium.com/@cvitullo/handling-errors-with-async-await-and-promises-cd2fea534f08)
- [ ] [ES6: Why don’t we use var anymore?](https://blog.usejournal.com/awesome-javascript-no-more-var-working-title-999428999994)
- [ ] [ES6: How to make your code faster using JavaScript Sets](https://medium.com/@bretcameron/how-to-make-your-code-faster-using-javascript-sets-b432457a4a77)
- [x] [Lib: Flatpickr](https://flatpickr.js.org/getting-started/)
- [x] [Lib: Moment.js](https://momentjs.com/)
- [ ] [List of books](https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3)
- [ ] [Book: You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson
- [x] Book: Head First JavaScript Programming (O'Reilly, by Elisabeth Robson, Eric Freeman)
- [x] Book: JavaScript: The Definitive Guide (O'Reilly, by David Flanagan)
- [ ] Book: JavaScript: The Good Parts (O'Reilly, by Douglas Crockford)
- [ ] Book: JavaScript Patterns (O'Reilly, by Stoyan Stefanov)

# TypeScript
- [x] [Types: Generics and Augmentation will Make You a TypeScript Wizard](https://medium.com/iqoqo-engineering/two-advanced-techniques-to-make-you-a-typescript-wizard-df42e00b1cf8)

# Angular
- [ ] [Angular Optimization. Memoized pipe functions in templates.](https://blog.usejournal.com/angular-optimization-memoized-pipe-functions-in-templates-75f62e16df5a)
- [ ] [Introducing to NG-VDOM: A new way to write Angular application](https://blog.angularindepth.com/introducing-to-ng-vdom-a-new-way-to-write-angular-application-60a3be805e59)
- [ ] [Designing scalable Angular applications](https://medium.com/@OlegVaraksin/designing-scalable-angular-applications-6629b5158277)
- [ ] [Make Your Angular Form’s Error Messages Magically Appear](https://netbasal.com/make-your-angular-forms-error-messages-magically-appear-1e32350b7fa5)
- [ ] [Angular Revisited: Tree-shakable Components and Optional NgModules](https://blog.angularindepth.com/angular-revisited-tree-shakable-components-and-optional-ngmodules-329a4629276d)
- [ ] [Why & How to Lazy Load in Angular](https://medium.com/@kylerjohnson26/why-how-to-lazy-load-in-angular-f86b987cd528)
- [ ] [Tooltip with Angular CDK](https://blog.angularindepth.com/building-tooltips-for-angular-3cdaac16d138)
- [ ] [Piercing the Angular style encapsulation](https://medium.com/ng-gotchas/piercing-the-angular-style-encapsulation-c7030caeb519)
- [ ] [An Angular Roadmap — The Past, Present, and Future of Angular](https://medium.com/grapecity/an-angular-roadmap-the-past-present-and-future-of-angular-7af4cd4ec6e7)
- [ ] [Webpack: How to configure Webpack 4 with Angular 7: a complete guide](https://www.freecodecamp.org/news/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471/)
- [ ] [JS>2: Upgrading AngularJS](https://www.upgradingangularjs.com/)
- [ ] [Book: Pro Angular 6](https://www.apress.com/gp/book/9781484236482#aboutBook)

# React
- [ ] [JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/)
- [ ] [How I integrated CSS Modules with SCSS into my React application](https://www.freecodecamp.org/news/how-i-integrated-css-modules-with-scss-into-my-react-application-32f473e1bb51/)

# Serverless
- [ ] [A crash course on Serverless APIs with Express and MongoDB](https://hackernoon.com/a-crash-course-on-serverless-apis-with-express-and-mongodb-77774f7730fe)

# Dotnet
- [x] [Lessons: Уроки по C# и платформе .NET Framework](https://professorweb.ru/)
- [ ] [Book: Essential Angular for ASP.NET Core MVC](https://www.apress.com/gp/book/9781484229156#aboutAuthors)

# Node JS
- [ ] [Discovering Your Local Node Meetups, Events, and Speakers](https://medium.com/@nodejs/discovering-your-local-node-meetups-events-and-speakers-60cf0d04a878)

# PHP
- [ ] [PHP Standards Recommendations](https://www.php-fig.org/psr/)

# Docker
- [ ] [How to create your first Docker application](https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-your-first-docker-application-cc03de9b639f/)

# Tests
- [ ] [Why Use Test-Driven Development?](https://news.codecademy.com/test-driven-development/)
- [ ] [Тестирование: гайд от "чайников"](http://slides.com/elizaveta_s/deck#/)
- [ ] [Visual Regression Testing with PhantomCSS](https://css-tricks.com/visual-regression-testing-with-phantomcss/)
- [ ] [Автоматические тесты при помощи chai и mocha](https://learn.javascript.ru/testing)
- [ ] [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [ ] [Black-box Testing a Node.js Web API](https://medium.com/@grantcarthew/black-box-testing-a-node-js-web-api-d626f7d651be)
## Services
- [ ] [Yandex Gemini](https://tech.yandex.ru/gemini/) - регрессионное тестирование отображения веб-страниц
- [ ] [Mocha](https://mochajs.org/)
- [ ] [Chai](http://www.chaijs.com/)
- [ ] [Emmet Re:view](http://re-view.emmet.io/)
- [ ] [Standalone test spies, stubs and mocks for JavaScript](http://sinonjs.org/)

# Helpers
- [x] [SNILS generator](https://ortex.github.io/snils-generator/)
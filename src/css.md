# CSS

# Links

## Selectors
- [Selectors](https://learn.javascript.ru/css-selectors)
- [Selectors weight](https://canonium.com/articles/css-understanding-weight-selectors)
- [Селектор обобщенных родственных элементов](https://habrahabr.ru/post/150720/)

## O
- [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css)
- [SMACSS](https://smacss.com/)
- [BEM](https://ru.bem.info/)
- [Article: Meaningful CSS: Style Like You Mean It](http://alistapart.com/article/meaningful-css-style-like-you-mean-it)
- [Article: Способы организации CSS-кода](https://habrahabr.ru/post/256109/)
- [Normalize](https://necolas.github.io/normalize.css/)
- [Box-sizing](https://css-tricks.com/box-sizing/)
- [Artivle: Центрирование в CSS: полное руководство](http://frontender.info/centering-css-complete-guide/)
- [Article: Проблемы CSS. Часть 1](https://habrahabr.ru/post/189118/)
- [Article: Проблемы CSS. Часть 2](https://habrahabr.ru/post/189252/)
- [The Shapes of CSS](https://css-tricks.com/examples/ShapesOfCSS/)
- [Слова, часто используемые в CSS-классах](https://github.com/yoksel/common-words)
- http://softwaremaniacs.org/blog/2005/12/01/css-layout-float/
- https://habrahabr.ru/post/136588/
- https://css-tricks.com/all-about-floats/
- https://htmlacademy.ru/blog/21-fighting-the-space-between-inline-block-elements
- https://css-tricks.com/centering-css-complete-guide/
- http://softwaremaniacs.org/blog/2005/09/05/css-layout-flow-margins/
- http://codepen.io/carolineartz/full/ogVXZj/

- http://frontender.info/a-guide-to-flexbox/
- https://vimeo.com/67011034
- https://pepelsbey.net/pres/flexbox-gotcha/
- http://yoksel.github.io/flex-cheatsheet/
- https://philipwalton.github.io/solved-by-flexbox/
- https://www.smashingmagazine.com/2015/03/harnessing-flexbox-for-todays-web-apps/
- http://codepen.io/enxaneta/full/adLPwv/
- http://www.flexboxdefense.com/
- http://flexboxfroggy.com/
- http://flexboxin5.com/

- http://frontender.info/starting-css/
- http://frontender.info/organizing-your-css-code-for-preprocessors/
- https://csswizardry.com/2016/02/mixins-better-for-performance/

- http://frontender.info/a-guide-to-flexbox/
- https://philipwalton.github.io/solved-by-flexbox/
- https://www.smashingmagazine.com/2015/03/harnessing-flexbox-for-todays-web-apps/
- https://medium.com/@ckor/make-full-screen-sections-with-1-line-of-css-b82227c75cbd#.5o4xgukb7
- http://codepen.io/ckor/full/cf2134280cd25e8ac7e57f1b05bb0b49/

# Способы подключения
```html
<a style="color: red;">link</a> <!-- в атрибуте -->
<style></style> <!-- глобально в теле html -->
<link rel="stylesheet" href="css.css"> <!-- глобально из внешнего файла -->
```

# Селекторы

## Универсальные селекторы
```css
* {}
p + a {} /* Соседние селекторы (сосед снизу) */
p ~ a {} /* Все a после p */
p > a {} /* На всех детей родителя */
```

## Селектор атрибутов
```css
p[attr] {}
p[attr="smth"] {}
p[attr$="smth"] {} /* Заканчивается значением */
p[attr^="smth"] {} /* Начинается значением */
p[attr*="smth"] {} /* Содержит */
p[attr~="smth"] {} /* Отдельное слово в значении */
p[attr|="smth"] {} /* - и значение */
```

## Псевдоклассы для ссылок
```css
a:link {} /* не посещенная ссылка, всегда первая в коде */
a:visited {} /* посещенная ссылка, вторая */
anyselector:hover {} /* наведение, третья */
anyselector:active {} /* нажатие, четвертая */
anyselector:target {} /* при переходе по якорю, стили для элемента, к которому перешли */
```

## Псевдоклассы по счету
```css
/* считает все селекторы в родителе */
anyselector:firts-child {}
anyselector:last-child {}
anyselector:only-child {}
anyselector:nth-child(even) {}
anyselector:nth-child(odd) {}
anyselector:nth-child(2) {}
anyselector:nth-child(an+b) {} /* a - число повторений для n, b - точка отсчета */
anyselector:nth-last-child(an+b) {} /* отсчет с последнего */

/* считает только свои селекторы в родителе */
anyselector:only-of-type {} /* единственный по типу у родителя */
anyselector:nth-of-type(even) {}
anyselector:nth-of-type(odd) {}
anyselector:nth-of-type(3) {}
anyselector:nth-of-type(an+b) {}
anyselector:nth-last-of-type(an+b) {}
```

## Псевдокласс :not
```css
anyselector:not(anyselector) {}
```

## Псевдоэлементы
```css
anyselector::first-letter {}
anyselector::first-line {}

anyselector::before {
  content: '';
}
anyselector::after {
  content: '';
}
```

## Other
- Внутри флекса не работают float & inline-block
- Псевдо-элементы по умолчанию строчные
- Чтобы прятать input можно использовать, например, opacity: 0;

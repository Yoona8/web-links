# CSS

# Links
- [Selectors weight](https://canonium.com/articles/css-understanding-weight-selectors)
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
# CSS

# Links
- [Selectors weight](https://canonium.com/articles/css-understanding-weight-selectors)
- [OOCSS](http://www.slideshare.net/stubbornella/object-oriented-css)
- [SMACSS](https://smacss.com/)
- [BEM](https://ru.bem.info/)

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

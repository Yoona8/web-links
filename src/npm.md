- -g - модули пойдут либо в (usr/local), либо туда, где установлен node.js
- локально - require();
- globally - console!

```bash
$ npm -version
$ npm config get prefix # куда установлены модули -g
$ npm init
$ npm i -S jquery@1.6 # -S = --save, выбор версии, bower устарел
$ npm outdate # (-g) проверить устаревшие версии
$ npm update -S # обновит все версии
$ npm uninstall -S package-name
$ npm list # (-g)
$ npm list --depth=0 # (-g) только сами пакеты
$ npm link jquery # используется редко, прилинкует к проекту ссылку на глобально установленный пакет
```

```bash
$ node # перейти в среду, где можно работать с js
$ node index.js # run js file
```

## JSON
- ^1.6.3 - не выше следующей версии (в данном случае не выше 2)
- ~1.6.3 - до 1.7
- latest
- npm outdate
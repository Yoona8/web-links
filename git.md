# Git Console Commands
Клонировать из удаленного репозитория к себе локально, в текущей директории создает папку с таким же названием, как и удаленный репозиторий, по умолчанию клонируется только ветка master:
```
$ git clone _URL_
```
Скопировать ветку удаленного репозитория (origin/_branch-name_) к себе локально в _branch-name_:
```
$ git checkout origin/_branch-name_ -b _branch-name_
```
origin - короткое название ссылки, которую мы клонировали с GitHub
```
$ git push origin master
```
забрать изменения с удаленного репозитория
```
$ git pull _pseudo-name_ _branch-name_
```
переключиться на ветку, с флагом "-b" создать новую ветку
```
$ git checkout _branch-name_
```
слить _branch-name_ в текущую ветку
```
$ git merge _branch-name_
```
посмотреть, с какими удаленными репозиториями связан локальный
```
$ git remote -v
```
привязать другой удаленный репозиторий, _pseudo-name_ - название псевдонима
```
$ git remote add _pseudo-name_ _URL_
```

# Git

## Links
- https://git-scm.com/book/ru/v2
- https://githowto.com/ru
- http://firstaidgit.ru/#/
- https://habrahabr.ru/company/Voximplant/blog/276695/
- [Git lessons by LoftSchool](https://www.youtube.com/playlist?list=PLY4rE9dstrJyTdVJpv7FibSaXB4BHPInb)
- [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)

## General
```bash
$ git --version # git -v
$ git init
```

## Configurations (-g or --global for global settings)
1. System settings /etc/gitconfig
2. Global user settings ~/.gitconfig
3. Local repo settings .git/gitconfig
```bash
$ git config --list
$ git config --list --show-origin
$ git config user.name "user-name"
```
```bash
$ git clone URL # clones from remote repo to local (by default only master branch is cloned)
```
Скопировать ветку удаленного репозитория (origin/branch) к себе локально в branch:
```
$ git checkout origin/branch -b branch
```
origin - короткое название ссылки, которую мы клонировали с GitHub
```
$ git push origin master
```
забрать изменения с удаленного репозитория
```
$ git pull pseudo-name branch
```
переключиться на ветку, с флагом "-b" создать новую ветку
```
$ git checkout branch
```
слить branch в текущую ветку
```
$ git merge branch
```
посмотреть, с какими удаленными репозиториями связан локальный
```
$ git remote -v
```
переназначить репозиторий
```
$ git remote set-url pseudo-name URL
```
привязать другой удаленный репозиторий, _pseudo-name_ - название псевдонима
```
$ git remote add pseudo-name URL
```

```bash
$ git commit -am "msg" # -a add, -m message
$ git init
$ git log
$ git reset # remove from indexed files for commit
$ git reset --hard # rollback to previous commit
$ git rm --cached file # deletes file from indexed list for commit
$ git push -u pseudo-name branch # sets defaul push link
```

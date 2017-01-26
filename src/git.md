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
$ git --version # version
$ git -v # version
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

## Clone
```bash
$ git clone URL folder # by default only master branch is cloned
$ git checkout origin/branch -b branch # clone branch
```

## Workflow
- origin - короткое название ссылки, которую мы клонировали с GitHub
```bash
$ git init # initialise
$ git add
$ git commit
$ git push origin master
$ git pull pseudo-name branch
$ git checkout branch
$ git merge branch # слить branch в текущую ветку
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

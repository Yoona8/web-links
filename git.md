# Git Console Commands
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

# Git
- Merge result is always a new commit
- Merge (for branches) works the same way as for commits in one branch
- Origin is a short name of remote repository URL
## Check version (or existence)
```bash
$ git --version # version
$ git -v # version
```
## Configurations
1. System settings /etc/gitconfig
2. Global user settings ~/.gitconfig
3. Local repo settings .git/gitconfig
```bash
$ git config --list
$ git config --list --show-origin
$ git config user.name "%user-name%" # -g (--global) for global settings
$ git config user.email "%user@mail.com%" # -g
```
## Clone
```bash
$ git clone %URL% %folder% # by default only master branch is cloned
$ git checkout %origin/branch% -b %branch% # creates new branch with remote repo's branch
```
## Workflow
```bash
$ git init # initialise
$ git add
$ git commit
$ git push %origin% %master%
$ git push %origin% %adaptive% # if there is no adaptive branch in remote repo, it'll be created with push command
$ git pull %origin% %branch%
```
## Branches
```bash
$ git checkout %branch% # switch to branch
$ git checkout -b %branch% # create a new branch
$ git merge %branch% # merge branch into current branch
$ git branch # list of local branches
$ git branch -r # list of remote branches
```
## Remote repositories
```bash
$ git remote -v # list of remote repositories
$ git remote add %name% %URL% # add another remote repo
```
переназначить репозиторий
```bash
$ git remote set-url pseudo-name URL
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

# Console

## Links
- [Con Emu](https://conemu.github.io/)
- [Terminal video lessons by LoftSchool](https://www.youtube.com/playlist?list=PLY4rE9dstrJy5P2z0sr8K3Nzr7l_UAN2b)
- [ConEmu video lesson by LoftSchool](https://www.youtube.com/watch?v=x0hw8llIZkY)
- [ConEmu habr article](https://habrahabr.ru/post/164687/)
- [Emacs wiki](https://ru.wikipedia.org/wiki/Emacs)
- [Emacs hotkeys](http://ss64.com/osx/syntax-bashkeyboard.html)
- [VIM wiki](https://ru.wikipedia.org/wiki/Vim)
- [VIM hotkeys](http://bullium.com/support/vim.html)
- [Commands list for OSX](http://osxh.ru/content/spisok-terminalnyh-komand-os-x)
- [Commands list cmd](http://cmd-command.ru/komandy-cmd)

## Hotkeys
- Сtrl + K - to clear

## Commands

### General:
```bash
$ [command] --help
$ !! # runs last entered command
$ set -o # to check terminal settings
$ pwd # current path
$ cd - # go back
$ cd ~ # windows> cd /d %userprofile% go to root user directory
$ cd d:folder/folder1 # windows> d:
$ mkdir folder
$ cd !$ # go to new folder, !$ could be used with any command
$ mkdir -p app/{css,js} # -p means recursively
$ touch app/{css/main.css,js/main.js,index.html}
$ ls # windows> dir
$ ls -f
$ ls -a
$ ls -t # from the newest
$ ls folder1/folder2/.../
$ ls folder1 folder2 # displays the contents of both folders
$ ls "folder one" # displays the contents of folder one
$ ls folder\ one # the same
$ mv file folder # moves file to folder
$ mv file* folder # moves all files (named file*) to folder
$ mv file file2 # renames file into file2
$ cp file file2.txt # copies file to file2.txt
$ cp -r folder folder2 # copies folders
$ clear # windows> cls
$ rm
$ rmdir # for empty folders
$ rm -r # for folders with content
$ rm -rf # recursively force
$ ln -s file softlink # makes soft link to file (when file is removed, link doesn't work)
$ ln file hardlink # makes hard link (when file is removed, link still works)
$ cat file # displays the content of a file
$ vim file # i - print, esc - block print, :w - save, :q - quite
$ explorer .
$ subl .
$ atom .
$ echo $PATH # to change: win + break > settings > for user
$ echo text > file # rewrites
$ echo text >> file # adds text to file
$ find . # search in current directory
$ find ~/folder/... # search in root directory
$ find . -type f # by file types
$ find . -name "file" # by file name
$ find . -name "*.txt"
$ find . -name "file*"
$ find . -iname "file*" # register doesn't matter
$ find . -size +2 # by size (more than 2Kb)
$ find . -size -2 # by size (less than 2Kb)
$ find . -mtime +1 # by modification time (more than 1 day)
$ find . -ctime +1 # by create time
$ find . -iname "*.txt" -or -iname "*.doc" -and -ctime +1
$ find . -iname "*.txt" -print -or -iname "folder" -prune # -prune means to exclude, -print to print till this command
$ grep "Lorem" file # search by content
$ grep -li "Lorem" * # to print file name
$ grep -lir "Lorem" * # to search in all folders in current dir
```

## Access rules

### Information
1. d - dir, - - file, l - link
2. access rules: r - read, w - write, x - execute
3. groups: 1-3 - user, 4-6 - group (mentioned after user-name), 7-9 - others

### Changing rules
```bash
$ chmod u+x,o+w file
$ chmod uo+rw file
$ chmod g+wx file # for user add write and execute rules to file
$ chmod o-w file # to remove rules
$ chmod u=rwx,g=rw,o= file # for o all rules will be deleted
$ chmod 764 file # u - rwe, g - rw, o - r (0 - no rights, 4 - read, 2 - write, 1 - execute)
```

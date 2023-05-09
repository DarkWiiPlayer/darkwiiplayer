---
tags: terminal history 
---
> [Atuin](https://atuin.sh) is a command-line tool that enables you to make better use of your shell, by giving ctrl-r superpowers.

Replaces shell built-in history with an SQLite-powered one.

To disable the up-arrow binding, but leave Ctrl+R for advanced search:

```sh
eval "$(atuin init zsh --disable-up-arrow)"
```
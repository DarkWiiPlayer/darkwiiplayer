---
tags: automation terminal
---
# entr
Runs a command when files change:

```sh
find -type f -name '*.c' | entr make
```

Use `-s` to interpret the first argument as a shell command:

```sh
find -type f | entr -s "clear && ls"
```

## Services
Use `-r` to monitor and automatically restart services:

```sh
find -name "*.lua" | entr -r lua server.lua
```
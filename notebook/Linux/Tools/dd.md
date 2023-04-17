---
tags: image terminal
---

Flashing an image to a USB drive:

```sh
dd if=file.img of=/dev/sdx bs=64M status=progress
```
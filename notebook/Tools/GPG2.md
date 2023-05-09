---
tags: terminal security encryption
---
## Creating a key

To get all the options, run:
```sh
gpg --expert --full-generate-key
```

Chose a key type with `(set your own capabilities)` and disable signing.

Then add additional signing and encryption keys with

```
gpg --edit-key <email>
```

and the `addkey` command
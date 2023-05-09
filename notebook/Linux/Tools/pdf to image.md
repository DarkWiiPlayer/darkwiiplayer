---
tags: pdf
---
## `pdfimages`

To extract individual original images from a PDF document:

```sh
pdfimages -png input.pdf prefix
```

## `pdftoppm`

To convert the actual document to images (so kinda like taking screenshots, but better)

```sh
pdftoppm -png input.pdf output -r 300
```
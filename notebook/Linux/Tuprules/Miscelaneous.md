# Miscelaneous
Random stuff that can be made easier with tup

## Convert WebP to PNG
```tup
: foreach *.webp |> vips pngwrite %f %o |> %B.png
```
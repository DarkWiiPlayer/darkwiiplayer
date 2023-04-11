# Advanced System & Process Monitor

```sh
atop 1
```
Monitor system resources with a 1 second interval.

```sh
atop -w /path/to/log/file 60
```
Record performance stats to a given file once per minute.
> [!WARNING]
> Keep intervals reasonably long to prevent report files from growing too large over time.

```sh
atop -r /path/to/file
```
Open a previously recorded log to evaluate its contents.

```sh
atopsar -A -b 8:00 -e 12:00
```
Print performance reports for a given time span.

>[!HINT]
>Use the `z` key to pause atop and evaluate the current snapshot of system resoures.
>The update interval can be changed with the `i` key.

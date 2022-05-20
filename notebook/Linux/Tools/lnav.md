---
tags: debugging logs terminal
---

# LNav
[lnav](https://lnav.org) is a #terminal logfile viewer based on #curses.

## Custom Formats:
lnav supports adding [custom format descriptions](https://docs.lnav.org/en/latest/formats.html) to parse Log formats that lack built-in support.
```json
{
	"$schema": "https://lnav.org/schemas/format-v1.schema.json",
	"example": {
		"title": "Example Format",
		"description": "A generic example for how to make a custom lnav Format",
		"url": "https://example.org/",
		"regex": {
			"line": {
				"pattern": "^(?<timestamp>[\\d-]{10} [\\d:]{8}) [-+]\\d{4} \\[(?<level>[A-Z]+)\\] (?<src_file>[^:]+):(?<src_line>\\d+) -- (?<body>.*)$"
			}
		},
		"timestamp-format": "%Y-%m-%d %H:%M:%S %z",
		"level-field": "level",
		"level": {
			"fatal": "FATAL",
			"error": "ERROR",
			"warning": "WARNING",
			"info": "INFO",
			"debug": "DEBUG"
		},
		"value": {
			"src_line": {
				"kind": "integer",
				"foreign-key": true
			},
			"src_file": {
				"kind": "string",
				"identifier": true,
				"foreign-key": true
			}
		},
		"sample": [
			{ "line": "2022-05-20 11:10:54 +0200 [FATAL] test.lua:8 -- Fatal" },
			{ "line": "2022-05-20 11:10:54 +0200 [ERROR] test.lua:9 -- Error" },
			{ "line": "2022-05-20 11:10:54 +0200 [WARN] test.lua:10 -- Warn" },
			{ "line": "2022-05-20 11:10:54 +0200 [INFO] test.lua:11 -- Info" },
			{ "line": "2022-05-20 11:10:54 +0200 [DEBUG] test.lua:12 -- Debug" }
		]
	}
}

```
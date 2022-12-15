# ffmpeg
## Linux Commandline tool for Video Editing
Basic commandline: `ffmpeg -i input.mp4 output.mp4`
- Remove Audio: `-an`
- Video Bitrate: `-b:v 32M`
- Start time: `-ss 3:00`
- Duration: `-t 1:00`
- Duration (absolute): `-to 4:00`
- Framerate: `-r 60`

## ffmpeg buddy
An [online tool](https://evanhahn.github.io/ffmpeg-buddy/) to interactively set up `ffmpeg` commands.
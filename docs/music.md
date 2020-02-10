# Music
The Skeppy bot can play music from YouTube, Twitch, Soundcloud, MP3 files, and many more.

## Playing songs

### YouTube

```
skeppy play <YouTube search/URL>
```
![skeppy video](/images/playingSkeppyVideo.gif)

### Twitch

```
skeppy play <Twitch URL>
```
![twitch stream](/images/playingTwitch.gif)

### (live) MP3
```
skeppy play <MP3 URL>
```
![MP3](/images/playingMP3.gif)

## Music commands

### Basic music commands
<MusicCommands />

### Lyrics

To get the lyrics of the currently playing song, type
::: warning
This does not work when playing MP3's
:::

```
skeppy lyrics
```
![lyrics command](/images/lyricsWhilePlaying.gif)

To search for lyrics, type
```
skeppy lyrics <search query>
```

### Lock

::: warning
You must have started the session!
:::

You can use the lock command to lock the commands to only you.
```
skeppy lock <enable/disable>
```

### Move

To move an item in the queue, type
```
skeppy move <firstpos> <secondpos>
```
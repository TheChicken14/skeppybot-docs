# Settings

## Song updates
```
skeppy np <on/off>
```

## Levels
```
skeppy settings levels <on/off>
```

## Welcoming users

### Welcome messages
```
skeppy settings welcome <on/off>
```
### Setting the welcome message
::: v-pre
::: tip
Put `{{user}}` where you want to mention the new user
:::
```
skeppy settings welcome setmessage <your welcome message>
```
for example:
```
skeppy settings welcome setmessage Welcome {{user}} to the server!
```
## Setting the welcome channel
```
skeppy settings welcome setchannel [#channelname]
```
for example:
```
skeppy settings welcome setchannel #welcome
```
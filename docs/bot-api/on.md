# 接收 / `On`

## `reject_join`

加入房间申请被拒绝。

含有两个参数：`title, message`，为拒绝理由（Gennia 只设计了一个玩家队列，不允许在游戏开始后加入房间）。

## `server_info`

服务器信息，含两个参数：`name, version`。分别为服务器名，版本号。通过发送 `query_server_info` 获取。

## `connect`

连接到服务器房间。

## `set_player_id`

含一个参数，为在加入房间后 Gennia 向你提供的 `playerId`。

## `room_message`

接收系统/玩家发布的聊天信息。

## `game_started`

含一个参数：`playerColor`，为你的颜色代号 $(0\sim 7)$ 。

## `game_update`

游戏更新。每个游戏刻都会下传。参数列表：

```javascript
{
  gameMap: Stringified Array,
  width: Number,
  height: Number,
  turn: Number,
  leaderBoard: Array
}
```

### `width` 与 `height`

与原含义颠倒。`width` 代表竖向格子数，`height` 代表横向格子数。

### `gameMap` 数据结构

`String` 化的二维 `Array`。使用时需用 `JSON.parse()` 方式还原。

### `leaderBoard` 数据结构

一维 `Array`。拥有如下属性：

```javascript
{
  color: Number,
  username: String,
  land: Number,
  army: Number
}
```

## `attack_failure`

你发送的上一条 `attack` 请求不满足要求。

## `game_over`

含一个参数：`player`，表示你被该玩家攻占。通常需要与 `leave_game` 配合使用。

`player` 为 `player Class`。

一个 `player Class` 含有以下属性：

```javascript
{
  id: Number,
  socket_id: String,
  username: String,
  color: Number,
  isRoomHost: Boolean,
  forceStart: Boolean,
  isDead: Boolean,
  operatedTurn: Number
}
```

## `game_ended`

整场游戏结束。含一个参数：`player`，表示最后赢家。

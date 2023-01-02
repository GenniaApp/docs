# 发送 / `Emit`

## `query_server_info`

向 Gennia 请求服务器信息。服务器会返回 `server_info`。

## `set_username`

这个是你愿意加入游戏的标志。

发送一个参数 `username`（可以与他人重复）。发送后您会接收到 `set_player_id`。就是您的 `playerId`。

## `player_message`

发送一个参数 `message`。

::: warning 注意
您只能在游戏**开始前**发送聊天请求
:::

## `attack`

需要包含三个参数：

```javascript
{
  from: Point,
  to: Point,
  half: Boolean
}
```

其中 `Point` 类含两个属性：`x, y`。

`half` 代表你是否希望进行半数攻击。

::: tip 提示
您 $1$ 游戏刻内只能进行一次攻击。后面几次 Gennia 不会接收，而是返回 `attack_failure`。
:::

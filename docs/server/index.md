# GenniaServer
这是从 Gennia 中移植出来的一个单独的服务器模块。

它不依赖图形界面，只需要一个命令行，和 Node.js 相关套件即可运行。

```sh
$ git clone git@github.com:GenniaApp/GenniaServer.git
$ cd GenniaServer
$ npm install
$ node app.js [roomName] [port]
```

* `roomName`: 您的服务器房间名（默认 `GenniaServer`）
* `port`：端口号（默认 `8080`）

服务器会占用您的 `[port]` 端口，请确保该端口没有任务占用，并配置相关安全组策略保证该端口对外开放。

## 建立持续运行的 `systemctl` 服务

```sh
sudo vim /lib/systemd/system/gennia-server.service
```

```ini
[Unit]
Description=Gennia Server Backend Service
After=network.target network-online.target syslog.target
Wants=network.target network-online.target

[Service]
Type=simple
ExecStart=node /path/to/GenniaServer/main.js GenniaLobby1 8080
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

# 游戏速度 (Game Speed)

取值：$0.25, 0.5, 0.75, 1, 2, 3, 4$

一个游戏刻 = $500ms \times val^{-1}$

`Turn` 跳动的周期 = 游戏刻 $\times 2$

`King/City` 增兵的周期 = 游戏刻 $\times 2$

已占领的 `Plain` 增兵的周期 = 游戏刻 $\times 50$

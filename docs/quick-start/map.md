# 地图和地形

## 地图大小 (Width / Height)

::: warning 注意
根据编写者的习惯，这里的 $width$ 为地图的竖向格子数，$height$ 为地图的横向格子数（（
:::

取值：$0\sim 1$。

计算公式：

$$val_w=\lfloor kings \times 2.7 + 10 \times width\rfloor$$

其中 $kings$ 为玩家数量。 $height$ 计算公式类似。

## 地形 (Terrain)

一共有 `King`、`Plain`、`Mountain`、`City`、 `Swamp` 五类。

其中 `Mountain`、`City`、 `Swamp`  生成参数可调。

Mountain 计算公式：

$$val_m=\lfloor \frac{1}{4}\times size \times \frac{mountain}{mountain+city}\rfloor$$

City 计算公式：

$$val_c=\lfloor \frac{1}{6}\times size \times \frac{city}{mountain+city}\rfloor$$

**特别地**，当 $mountain+city=0$ 时，$val_m=val_c=0$

Swamp 计算公式：

$$val_s=\lfloor \frac{1}{3}(size-val_m-val_c)\times swamp\rfloor$$

**其中** $size=val_w\times val_h$

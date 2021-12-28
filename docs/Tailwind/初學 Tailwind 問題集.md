

# 初學 Tailwind 問題集

## 問題

### (一) coding style 相關
1. 使用 Tailwind 之後，幾乎所有元素的 class 都爆炸，為甚麼不會影響到效能?
2. 以前會在一個 class 裡面寫下任何有關於該元件的 Style，像是 height、width、color、border...等等的，如果再專案中有類似的原件的話，重用性很高，在 tailwind 的話所有 style 都非常分散，要怎麼解決?
3. RWD 也一樣是寫在 inline，這樣維護起來會不會很困難?
4. Tailwind 是 PostCSS 的一個 plugin，如果脫離 PostCSS 的話可以使用嗎?

### (二) colors 相關問題
#### 1. 在 Vue 安裝好 tailwind 之後，我將裡面字體調成橘色卻發現完全無效，其他顏色卻 ok，為甚麼呢?
tailwind 並沒有將所有顏色全部包含在 default 的 package 裡面，有些顏色需要自己手動在 config 裡面加進去! 下面的資料可以 reference:

[官方文件]("https://tailwindcss.com/docs/customizing-colors#color-palette-reference")
[stackoverflow]("https://stackoverflow.com/questions/66932642/tailwindcss-is-not-changing-the-text-colour-correctly")

最後有個要注意的地方，不管完成任何的設定最後一定要重新 npm run serve，vue 才會將新的設定納入 ! 
 
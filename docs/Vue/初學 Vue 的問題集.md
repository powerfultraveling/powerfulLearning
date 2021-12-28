

# 初學 Vue 的問題集

## 前言
在剛學習一個新的技術時，常會遇到很多小問題，這些問題可能很基本可能還怕看起來很笨，卻很可能碰觸到這項新技術的核心概念、解決的核心痛點；甚至是這個技術的弱點。一個個理解這些小問題後，不單是解決這些問題本身，也讓我們對這項技術有更透徹的了解，奠定扎實的基礎。

因此，我決定在未來學習新技術時，記錄下我在學習過程中遇到的問題及解答，不單幫助自己，也幫助同樣剛接觸這個技術的人們 !

## 問題開始囉!

### (一) coding style 相關
#### 1. 相對於 React，Vue 有很多邏輯都很 inline，要怎麼提升城市的可讀性?
#### 2. 在 React，method 及 props 都是由上到下傳遞，在 Vue props 是向下傳遞沒錯，method 卻要從 child component emit。對於事後維護其實比較難抓到整個專案的 data flow，要怎麼解決這個問題?
#### 3. 如何在 Vue 裡面維持乾淨的程式碼?
[SOLID in Vue]("https://itnext.io/https-medium-com-manuustenko-how-to-avoid-solid-principles-violations-in-vue-js-application-1121a0df6197")

[create reusable component in Vue with Tailand]("https://markus.oberlehner.net/blog/reusable-functional-vue-components-with-tailwind-css/)

兩篇文章提供了很好的切入點，讓我們思考該怎麼去寫一個乾淨好維護的 code。但是這兩篇都提到了一個還不熟悉的概念叫做 functional component，下一個任務就是研究這個技術。

另外
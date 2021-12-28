# 初探 Nuxt.js

## 甚麼是 Nuxt.js?
簡單來講， Nuxt.js 是一款讓 Vue.js 更好易於開發的框架。

## 為甚麼需要  Nuxt.js
Vue 最主要的核心概念是為了讓介面開發更加容易，而不是用來開發一個完整的 web application，因此他也延伸出幾個問題(不限於 vue， react angular 也一樣有這些問題):

1. 因為是 SPA 所以在 js 正是跑起來之前，整個頁面基本上是空的，很不利於 SEO。
2. Head 裡面的 tag 沒辦法客製化
3. routing 需要再下載其他 module 才有辦法使用
4. deployment 要再另外用

Nuxt.js 的出現就是為了解決上面的這些問題，而出現的框架。他可以 Preload HTML file；自訂義 Head；超簡易 routing；支援 sass; 支援 vuex，還可以快速 deployment，解決 vue 的所有痛點。

簡言之，vue 是為了讓介面開發更容易而出現的框架，Nuxt.js 則是讓我們可以用 vue 開發一個完整的 application 的框架。

## SSR 的運作機制
1. 用戶發送請求
2. server 收到請求
3. 在 server 端先把用戶端請求的 HTML 解析
4. 回傳解析好的檔案以及其他 vue app
5. client 收到 response，請求的頁面是已經 prerender 好的
6. 其他 component 和 page 則跟之前一樣採用 SPA 的方式。

![nuxt](/img/nuxt.png)

從上面的運作模式我們可以觀察到他同時保有 SPA 的靈活運作，也保有 SSR 在 SEO 上的優點。 
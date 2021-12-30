# Vue Composition API

## Vue 3 最大的變化: composition API
Vue 3 的修正其實大部分對於開發者並沒有很直接有感的影響，主要都是環繞在效能、TypeScript 支援度，這些比較內部的改造。唯獨 composition API 算是對開發過程有重大改變的新功能，講到這我們不禁要問一個問題，為甚麼我們須要這個新功能呢?

### 解決 option API 所造成的混亂
相對於新出的 composition API，原本的寫法叫做 option API(下面簡稱 OA)。OA 有個很致命的缺點，就是相關聯的資料、方法都是完全分開寫的，專案如果規模小的話到還好，但是規模一大起來，維護非常的痛苦。資料在最上面，相關的 computed、methods、props 可能在最下面，要釐清邏輯非常麻煩。

因此，Vue 3 推出 composition API，讓我們可以將相關的資料都寫在一起，而之前的 data、computed、watch 這些功能則改為 function 的形式，有需要再 import 進來就好(寫起來很有 react hook 的感覺)，

[相關的資料可以看這裡](https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/vue-vue3-%E5%8D%B3%E5%B0%87%E6%AD%A3%E5%BC%8F%E4%B8%8A%E7%B7%9A-%E5%AE%83%E8%A7%A3%E6%B1%BA%E4%BA%86vue2%E7%9A%84%E4%BB%80%E9%BA%BC%E5%95%8F%E9%A1%8C-%E5%8F%88%E8%B7%9F-react-hooks-%E6%9C%89%E4%BB%80%E9%BA%BC%E9%97%9C%E4%BF%82-4331524fe986)

## 一些實用的小技巧

### Watch
```
<template>
    <div>
        <input type="text" v-model="me">
    </div>
</template>
<script>
import {watch, ref} from "vue";

export default {
    name: "Watch",
    setup(){
        const me = ref("charles");
        watch(me, function(newValue, oldValue){
            console.log(newValue);
            console.log(oldValue);
        },{
            immediate: true//enable watcher on initial value
        })


        return{
            me,
        }
    }    
}
</script>
<style lang="">
    
</style>
```

### Watch and reactive
```
<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="id">
        <input type="text" v-model="job">
        <input type="text" v-model="hobby.sport">
    </div>
</template>
<script>
import {reactive, toRefs, watch} from "vue";

export default {

    name: "WatchReactive",
    setup(){
        const state = reactive({
            id:0,
            name: "charls",
            job: "hallo",
            hobby:{
                sport:"walk"
            }
        })

        // 對於 reactive watch 沒辦法拿到 olddata
        //所以這邊要 deep duplicate reactive 的值 才有辦法 access olddata 

        watch(()=>{return {...state}}, (newData, oldData)=>{
            console.log("new", newData);
            console.log("old", oldData);
        },{
            deep: true
        })

        return toRefs(state)
    }    
}
</script>
<style lang="">
    
</style>
```


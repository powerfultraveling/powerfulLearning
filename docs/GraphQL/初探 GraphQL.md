# 初探 GraphQl

## 為甚麼要有 GraphQL?
在 GraphQL 出現之前，restful API 是最主要的型態。後端會將資料打包再一起，提供一個 endpoint，讓前端可以從這邊獲取資料。但是這樣的方法有幾個問題:

1. endpoint 並不是為了任一個 client 量身打造的，所以後端會盡量將相關的資料打包在一起，對前端而言會拿到很多根本不需要的資料。
2. 如果要獲取不一樣的資料，後端都要重新修改打包內容，很沒效率。

因此，GraphQL 出現了，GraphQL 並不是一種框架或是技術，而是跟 RESTful 一樣是一種設計架構，因此我們可以透過任何語言、技術去實現這個架構。

而這個架構的核心概念很簡單，就是希望前端可以像後端一樣，自由地跟資料庫拿資料。

比如說我在某個頁面裡可能須要拿文章的標題做文章列表，如果我用傳統的 RESTful API 的話，可能會同時拿到文章內容、作者、時間、這類我不需要的資料。但是呢，假如我用 GraphQL 的話就有辦法限定只拿文章標題。不拿其他資料。

## 來用 express 實作一個 GraphQl 吧
```
//modules
const express = require('express') 
const {graphqlHTTP} = require('express-graphql')//用來搭配 express 開發 graphql 用的模組
var cors = require('cors');//可以設定 cors 
const graphql = require("graphql");

//用來測試的資料
const users = [
    {id:1, name:"james"},
    {id:2, name:"charles"},
    {id:3, name:"cheistine"}
]


//general
const app = express();//express app
const {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphql


const UserType = new GraphQLObjectType({
    name: "user",
    fields:()=>({
        id: {type: GraphQLInt},
        name:{type: GraphQLString}
    })
})

//rootquery 
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    //fields 裡面包含要回傳的資料以及描述
    fields: ()=>({
        //回傳一個叫做 name 的資料
        //資料型態是 Usertype 的 list
        //Usertype 是個別的 user 資料
        //users 會回傳 users array
        //而 users array 裡面的資料長甚麼樣，則是在 usertype 定義 
        users:{
            type: new GraphQLList(UserType),
            resolve(){
                return users
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQuery
})

//當有人在這個 endpoint 請求的時候，會跑後面的 Callback
//而這個 Callback function 可以用的資料是 Schema 裡的資料
//這邊的 Schema 是 rootquery

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('Server is running at port 3000')
})
```

## 前端怎麼接?
```
fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers:{ "Content-Type": "application/json" },
    body: JSON.stringify({
        query: `
            query{
                users{
                    name
                }
            }                
        `
        })
})
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.data)
})
.catch((err)=>{
    console.log(err)
})
```
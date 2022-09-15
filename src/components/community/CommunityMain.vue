<template>
    <div class="listmain">
        <div class="top">
            <ul>
                <li v-for="item in array" :key="item" @click="chooseClick(item)">
                    <a :class="{ active: currentitem === item.type }">{{
            item.type
          }}</a>
                </li>
            </ul>
        </div>
        <div class="bottom">
            
                <template v-for="item in lastestarray" :key="item">
                    <article-con :data="item"></article-con>
                </template>
            
        </div>
        <div class="words">
            <a href="javascript:;" @click="btnClick">{{ showbtnClick }}</a>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import ArticleCon from './ArticleCon.vue'
    import {
        ref
    } from "vue";

    export default {
       components:{
        ArticleCon
       },
        setup() {
            let arraylist = ref([]);
           
            let counter = ref(10);
            const array = [{
                    type: "所有",
                    path: "recommendation"
                },
                {
                    type: "分享",
                    path: "share"
                },
                {
                    type: "问答",
                    path: "ask"
                },
            ];
          
           
            
            let lastestarray = ref([])
            let arraylistlength = ref(0);
            axios.get("http://127.0.0.1:3007/api/article").then((res) => {
             
                arraylist.value = res.data.data;
                arraylistlength.value = arraylist.value.length;
                currentarray.value = arraylist.value
                for(let i=0;i<10;i++){
                lastestarray.value[i] = arraylist.value[i]
               }
            });

            let showbtnClick = ref("点击加载更多");
           
             let currentitem = ref(array[0].type)
             let currentarray = ref([])
            
             const chooseClick = (item) => {
                showbtnClick.value = "点击加载更多"
                currentitem.value = item.type;
                counter.value = 10
                lastestarray.value = []
                if(item.path!="recommendation"){
                currentarray.value = []
                let newarray = ref([])
                
                for(let i=0;i<arraylistlength.value;i++){
                    if(arraylist.value[i].type === item.path){
                      
                      newarray.value.push(arraylist.value[i])
                      
                    }
                }
               for(let i=0;i<newarray.value.length;i++){
                currentarray.value[i] = newarray.value[i]
               }
               console.log(currentarray.value)
                
                }
                else{
                    currentarray.value = arraylist.value
                    console.log(currentarray.value)
                }
               for(let i=0;i<10;i++){
                    lastestarray.value.push(currentarray.value[i])
                }
                console.log(counter.value)
                
            };
             const btnClick = () => {
                
                let length = counter.value + 10;
                for (let n = counter.value; n < length; n++) {
                    // curretarray.value.push(arraylist.value[n])
                    if(currentarray.value[n]==undefined){break}
                    lastestarray.value.push(currentarray.value[n]);
                    counter.value++;
                    console.log(counter,lastestarray.value[n])
                }
                if (counter.value >= currentarray.value.length) {
                    showbtnClick.value = "已经到底了";
                }
            };
            return {
                array,
                arraylist,
                btnClick,
               
                showbtnClick,
                chooseClick,
                lastestarray,
                currentitem
            };
        },
    };
</script>

<style lang="less" scoped>

    .listmain {
        height: 100%;
        width: 100%;
    }

    .top {
        width: 100%;
        height: 46px;
        border-bottom: 1px solid #eeee;

        ul {
            margin-left: 10px;
            list-style: none;
            display: flex;
            align-items: center;

            li:last-child a {
                border: 0;
            }

            li {
                a {
                    padding: 0 15px;
                    border-right: 1px solid #eee;
                    text-align: center;
                    text-decoration: none;
                    color: #919192;
                    font-size: 14px;
                    line-height: 46px;
                }

                a:hover {
                    color: #3491d2;
                }

                a.active {
                    color: #3491d2;
                }
            }
        }
    }

    .bottom {
        width: 100%;
    }

    .words {
        text-align: center;
        padding: 20px;

        a {
            color: #919192;
            font-size: 12px;
        }
    }
</style>
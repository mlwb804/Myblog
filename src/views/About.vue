<template>
  <div class="container-fluid no-gutters">
    <div class="row">
    <div class="pic col- col-md-4 col-xl-3 padding-0">
      <div class="pic-control">
         <img src="@/assets/me.jpg" alt="">
      </div>
    </div>
    <div class="txt col- col-md-7 col-xl-8 padding-0">
      <h1>謝政霖</h1>
      <h4>一個初入前端的菜鳥</h4>
      <p>我是一位前端新手,大學畢業前沒有任何寫程式的經驗,當兵時認識了兩個資工好友,<br />
      當時的我對於未來有些迷惘,並不清楚自己想做什麼,於是在他們的建議下決定踏入前端這個廣闊的世界。 <br /><br />
      
      我學習程式的方法主要是靠網路上的資源以及書籍來自學, <br />
      用影片的講解以及書本的理論來理解程式的邏輯,並透過練習以加深記憶。<br /><br />
      
      平時的興趣除了寫寫code以外,也喜歡調酒,攝影以及電影。<br />
      喜歡拍攝風景照,也喜歡在假日的晚上小酌一杯,因為酒吧太貴所以學會了簡單的調酒(笑)。

      </p>
    </div>
    <Icon class="iconBox col-"></Icon>
    </div>
  </div>
  
</template>
<script>
import Icon from "@/components/Icon.vue"
export default {
  components: {
    Icon,
  }
}
</script>

<style lang="scss" scoped>
  template{
    background-color: #f8f;
  }
  .container-fluid{
    .padding-0{
      padding-right: 0;
      padding-left: 0; 
    }
    .row{
      position: relative;
    .pic{
      width: 100%;
      height: 300px;
      .pic-control{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .txt{
      text-align: left;
      width: 80%;
      margin:0 auto 80px;
      h1{
        text-align: left;
        margin-top: 1rem;
        color:#aaa;
        position: relative;
        font-weight: bold;
      }
      h1::after{
        content:'';
        display: block;
        width: 11rem;
        height: 2px;
        background-color: #aaa;
        position: absolute;
        left: 4%;
      }
      h4{
        text-align: left;
        margin-left: 7rem;
        font-size:1.3rem ;
        color:#aaa;
        margin-bottom: 2rem;
        font-weight: bold;
      }
      p{
        font-size: 1.2rem;
    
      }
    }
    .iconBox{
      position: absolute;
      right: 30px;
      bottom: 25px;
    }
  }
    
  }
  @media screen and (min-width:768px){
    .container-fluid{
      .row{
        .pic{
          .pic-control{
            width: 200px;
            height: 200px;
            margin:60px auto;
            img{
              border-radius: 100%;
            }
          }
        }
      .txt{
        margin-top: 40px;
        h1{
          font-size: 4rem;
        }
        h4{
          font-size: 2rem;
        }
      }
      }
    }
  }

  @media screen and (min-width:1140px) {
    .container-fluid{
      .row{
        .pic{
          .pic-control{
            width: 280px;
            height: 280px;
          }
        }
        .iconBox{
          right: 235px;
          bottom: 19px;
        }
      }
    }  
    
  }
</style>
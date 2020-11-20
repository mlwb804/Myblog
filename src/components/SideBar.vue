<template>
    <div>
        <h4>最新文章</h4>
        <hr>
        <ul>
            <li
                v-for="(art, index) in articles"
                :key="index"
                @click="routerToArticle(art.id)"            
            >{{ art.title }} </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        articles: Array
    },
    methods: {
        routerToArticle: function(id) {
            this.$router.push({ name: "Article", params: { id: id} });
        }
    }
};
</script>

<style lang="scss" scoped>
    div{
        width: 20vw;
        right: 0;
        position: fixed;
        background-color: #eee;
        border-radius: 16px;
        height: 100%;
        padding-top:1rem;
      
      h4{
          width: 100%;
          display: inline-block;
          text-indent: 1rem;
          line-height: 1.5rem;

      }
      
      hr{
          margin: 5px;
          margin-bottom: 1rem;
      }
      ul{
          li{
            list-style: none;
            text-align: left;
            margin: 5px 0 5px -1.3rem;
            transition: .3s;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;


            &:hover{
                text-decoration-line: underline;
                color:rgb(15, 184, 43);
            }
        }
        }
    }    
</style>
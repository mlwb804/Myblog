<template>
    <div>
    <article v-if="articles">
        <h2> {{ filterById.title }} </h2>
        <i>{{filterById.date | toDate}}</i>
        <span v-html="filterById.content" ></span>
    </article> 
    </div>     
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import axios from 'axios';



export default {
    mounted() {
        const id = this.$route.params.id;
        this.artId = id;
        this.$store.dispatch('changeFocusId', id)
        // const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
        // axios.get(api)
        // .then(result=>{
        //     this.articles = result.data.data
        // })
    },
    data() {
        return{
            artId: null,
            articles: [],
        }
    },
    computed: {
        ...mapGetters([ 'filterById' ]),
        // filterById: function() {
        //     return this.articles.filter(art => art.id === this.artId)[0]
        // }
    },
    filters: {
      toDate: timestamp => {
        const date = new Date(timestamp);
        let Y = date.getFullYear();
        let M = date.getMonth();
        let D = date.getDate();
        let H = date.getHours();
        let min = (Array(2).join("0") + date.getMinutes()).slice(-2);
        return `${Y}/${M + 1}/${D} ${H}:${min}`;
      }
    },
  
}
</script>

<style lang="scss" scoped>
    article {
        display: flex;
        flex-direction: column;
        padding: 4rem 4rem;

        i {
            margin-top: 1rem;
        }
        span{
            margin-top: 2rem;
            text-align: left;
        }
    }
</style>
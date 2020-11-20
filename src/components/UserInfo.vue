<template>
    <div class="row">
        <h3 class="col-6">User name:</h3>
        <h3 class="col-4"> {{ userName }} </h3>
        <b-button 
        class="col-2"
        @click.prevent="loginOut">登出</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: 'Lynn'
        }
    },
    methods:{
        loginOut(){
            localStorage.removeItem('token');
            this.$router.push({name:"Login"})
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
  
      
    }
</style>
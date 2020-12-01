<template>
    <div>
            <h5>User name:</h5>
            <h5> {{ userName }} </h5>
            <button 
            @click.prevent="loginOut">登出
            </button>
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
        display: flex;
        
        h5{
            margin-right: 10px;
        }
        >button{
            border: none;
            border-radius: 10px;
            background-color: #fff;
            height: 20px;

        }
    }
</style>
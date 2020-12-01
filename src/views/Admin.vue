<template>
    <div>
        <router-link to="/admin" class="home"><b-button>文章列表</b-button></router-link>
        <router-link to="/admin/add" class="add"><b-button>新增文章</b-button></router-link>
        <UserInfo class="user"></UserInfo> 
        <router-view />
    </div>
    
</template>

<script>
    import UserInfo from '@/components/UserInfo';
export default {
    
    components:{
        UserInfo,
    }
}
</script>

<style lang="scss" scoped>
    div{
      position: relative;
       .home{
           margin-right: .2rem;
       }
        .user{
            position: absolute;
            right: 50px;
            top: 10px;
        }
    }
</style>
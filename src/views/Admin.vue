<template>
    <div>
        <router-link to="/admin" class="home"><b-button>文章列表</b-button></router-link>
        <router-link to="/admin/add" class="add"><b-button>新增文章</b-button></router-link>
        <router-view />
    </div>
    
</template>

<style lang="scss" scoped>
    div{
      
       .home{
           margin-right: .2rem;
       }
    }
</style>
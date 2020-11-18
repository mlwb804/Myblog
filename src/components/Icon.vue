<template>
    <div class="box-control">
      <div class="box">
        <a :href="instagramUrl">
          <img width="50px" src="@/assets/instagram.svg" alt="instagram">
        </a>
      </div>
      <div class="box">
        <a :href="faceUrl">
          <img width="50px" src="@/assets/facebook.svg" alt="facebook">
          </a>
      </div>
      <div class="box">
        <a :href="gitUrl">
            <img width="50px" src="@/assets/github.svg" alt="github">
        </a>
      </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            faceUrl: 'https://www.facebook.com/profile.php?id=100000313497680',
            instagramUrl: 'https://www.instagram.com/mlwb804/',
            gitUrl: 'https://github.com/mlwb804',
        }
    },
}
</script>

<style lang="scss" scoped>
     .box-control{
      margin-top: 2rem;
      display: flex;

      .box{
        margin-left: 1.2rem;
      }
    }
</style>
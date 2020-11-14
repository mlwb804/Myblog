<template>
  <div>
    <h1>管理員登入</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.account"
          type="text"
          required
          placeholder="Enter Account"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="登入密碼" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button @click.prevent="routerToAdmin" type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
    export default {
        data() {
            return{
                form:{
                    account: "",
                    password: ""
                }
            }
        },
      methods:{
        routerToAdmin: function(){
            this.$router.push({name:"Admin-Home"})
        }
      }
    }
</script>
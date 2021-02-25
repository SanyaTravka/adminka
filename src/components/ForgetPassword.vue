<template>
  <div>
    <div class="feedback">
      <div class="container">
        <h2 class="section-title">Забыли пароль?</h2>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form class="feedback-form">
          <div class="feedback-form-group">
            <label for="fullname">Электронная почта:</label>
            <input type="email" name="email" id="email"/>
          </div>
          <div style="text-align:center">
            <input type="submit" class="btn" value="Отправить" />
            <br />
          </div>
          <div class="reset-password">
            <router-link to="/login">Вспомнили пароль?</router-link>
          </div>
          <div class="reset-password">
            <router-link to="/register">Еще не зарегистрированы?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Register',

  }

</script>

<style scoped>

</style>
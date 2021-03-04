<template>
  <div>
     <ul>
      <li v-for="item in mas" :key="item">
          {{ item }}
      </li>
  </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'VideoList',
  data: function(){
      return {
          mas: []
      }
  },
  created: function () {
    const user = window.localStorage.getItem('user') 
    console.log(user)
    if (user === null){
      this.$router.replace({ name: "Login" });
    }
     let db = firebase.firestore();
    db.collection(user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        console.log(this.mas, " => ", doc.data());
        this.mas.push(doc.data());
    });
});
  }
}
</script>

<style scoped>

</style>

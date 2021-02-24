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
     let db = firebase.firestore();
    db.collection("feedback").get().then((querySnapshot) => {
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

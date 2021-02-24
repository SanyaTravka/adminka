<template>
  <div class="hello">
    <input type="file">
    <br>
    <input type="time" v-model="mess">
    <br>
    <button class="add" v-on:click="add">Отправить</button>
    <ul>
      <li v-for="(item, idx) in mas" :key="item">
          {{ item.time }}
          <input type="text" v-model="item.question" />
          <answers :addAnswer="addAnswer" :idx="idx" />
          <div>
            <button class="delete" v-on:click="del(idx)">X</button>
          </div>
      </li>
  </ul>
  <button v-on:click="send">Отправить на сервер</button>
  </div>
</template>

<script>
import Answers from './Answers.vue'
import firebase from "firebase";

export default {
  name: 'Video',
  components: {
    Answers
  },
  data: function(){
      return {
          mess: '',
          mas: []
      }
  },
methods: {
      add: function(){
    this.mas.push({ 'time': this.mess, 'question': '', 'answers': [] });
      },
       del: function(index){
         this.mas.splice(index,1);
      }, 
      addAnswer: function(question, value){
        this.mas[question].answers.push(value)
      },
      send: function(){
        console.log(this.mas);
        //------
        let db = firebase.firestore();
         db.collection("feedback")
        .add({
          name: this.mas
        })
        .then(function() {
          console.log('OK');
          alert('OK');
        })
        .catch(function() {
          console.log('NOT OK');
          alert('NOT OK');
        });
      }
}
}
</script>

<style scoped>

</style>

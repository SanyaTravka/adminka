<template>
  <div class="hello">
    <input type="file" @change="uploadFile($event)" accept="video/mp4,video/x-m4v,video/*">
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
          mas: [],
          file: ""
      }
  },
methods: {
      uploadFile: function(event){
        console.log(event.target.files)
        let storageRef = firebase.storage().ref();
        let massWords = 'qwertyuiopasdfghjklzxcvbnm1234567890';
        let name = '';
        for (let i = 0; i < 20; i++) {
        name += massWords[Math.floor(Math.random() * Math.floor(massWords.length))];
        }
        name +='.mp4';
        this.file = name
        let mountainsRef = storageRef.child(name);
        mountainsRef.put(event.target.files[0]).then((snapshot) => {
          console.log(snapshot);
        });
      },
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
            const user = window.localStorage.getItem('user')
        //------
        let db = firebase.firestore();
         db.collection(user).add({
          meta: this.mas,
          file: this.file,
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

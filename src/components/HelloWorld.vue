<template>
  <div class="hello">
    <input type="file">
    <br>
    <input type="time" v-model="mess">
    <br>
    <button class="add" v-on:click="add">Отправить</button>
    <ul>
      <li v-for="(item, idx) in mas" :key="item">
          {{ item }}
          <div>
            <button class="delete" v-on:click="del(idx)">X</button>
          </div>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
      return {
          mess: '',
          mas: []
      }
  },
methods: {
      add: function(){
    this.mas.push( this.mess );
      },
       del: function(index){
         this.mas.splice(index,1);
      }
}
}
</script>

<style scoped>

</style>

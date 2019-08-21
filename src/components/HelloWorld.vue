////////////////////////// TEMPLATE ////////////////////////// 
<template>
  <div>
    Hello World
  </div>
</template>


////////////////////////// SCRIPT ////////////////////////// 

<script lang="ts">

// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  props: {
    // name: String,
    // age: Number
  }
  data () {
    return {
      // newTodo: '',
      // todos: []
    }
  },
  methods: {
    // removeTodo(index) {
    //   this.todos.splice(index, 1)
    // },
  }
  computed: {
    // remaining() {
    //   return this.todos.filter(todo => !todo.completed).length
    // },
  }
}

</script>


////////////////////////// STYLE ////////////////////////// 

<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
</style>

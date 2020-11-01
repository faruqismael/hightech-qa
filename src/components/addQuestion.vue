<template>
  <div class="p-3 container">
      <h2>Add Question</h2>
      <form class="form-group">
          <label>Question</label>
          <textarea v-model="question" type="text" class="form-control"></textarea>
          <button @click.prevent="addQuestion" class="btn btn-primary p-2 mr-3 mt-4 w-100">Add</button>
      </form>
  </div>
</template>

<script>
export default {
    props:['questions'],
    data(){
        return {
            question:''
        }
    },
    methods:{
        addQuestion(){
            this.questions.push(this.question)
        }
    }
}
</script>

<style>

</style>
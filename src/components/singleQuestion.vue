<template>
  <div class="p-3 mt-5 container">

      <div v-if="!questionLoaded" class="loader d-flex text-center justify-content-center">
          <div style="position:absolute; top:20%;" class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div>

      <div v-else class="form-group">
          <h1>{{question.question}}</h1>
          <h1>{{question.answer}}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis accusamus voluptatem pariatur quia dolor iure iste eaque. Aut, vero necessitatibus porro ab, totam corporis sint quod amet est non quaerat?</p>
          <!-- <button class="btn btn-primary p-2 mr-3 mt-4 w-100">Add</button> -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            question:{},
            questionLoaded : false
        }
    },
    created(){
         this.$http.get('')
            .then(
                response =>{
                    return response.json();
                }
            ) .then(data=> {
                const resultQuestions = [];
                for (let key in data){
                    this.questionLoaded =true
                    resultQuestions.push(data[key])
                }
                this.question = resultQuestions[this.id];
        })
    }
}
</script>

<style>
    .loader{
        min-height: 100px !important;
    }
</style>
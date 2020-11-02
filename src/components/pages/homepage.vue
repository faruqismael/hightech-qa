<template>
  <div class="homepage top">
    <main role="main">
        
        <div class="container mt-5 welc-cont">
            <div class="row">
                <div v-if="addQ" class="p-3 container">
                        <h2>Add Question</h2>
                        <form class="form-group">
                            <label>Question</label>
                            <textarea v-model="question.question" type="text" class="form-control"></textarea>
                            <a href="#questions" @click="addQuestion" class="btn btn-primary p-2 mr-3 mt-4 w-100">Add</a>
                        </form> 
                        <!-- https://hightech-qa.firebaseio.com/ -->
                    </div>
                <div class="col-sm-9 " >
                    <section class="jumbotron mt-5  welcome text-center ">
                        <div class="container">
                        <h1><span class="brand">HighTech</span>QA <hr></h1>
                        <div v-for="(question, index) in questions" :key="index" class="brdr mb-3 text-left">
                            <div class="card-header">
                                <p id="questions ">
                                    [&check;] {{ question }} 
                                </p>
                                    <button class="float-right btn btn-success"> View</button>
                            </div>
                        </div>
                        </div>
                
                    </section>
                </div>
                <div class="col-sm-3 mt-5">
                    <side-bar></side-bar> 
                </div>
                <div class="m-3 text-right fixed-bottom">
                    <a href="#top" @click="addQ = true" class="brdr btn btn-warning">Add Question</a>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import sidebar from "./sub-pages/sidebar.vue"

export default {
    components:{
        'sideBar':sidebar
    },
    data(){
        return{
            question:{
                question:''
            },
            questions:[
                'what is firebase?',
                'how to use react with my django?',
                'which is the best from react and angular?',
                'what is firebase?',
                'how to use react with my django?',
                'which is the best from react and angular?',
                'what is firebase?',
                'how to use react with my django?',
                'which is the best from react and angular?',
                'what is firebase?',
                'how to use react with my django?',
                'which is the best from react and angular?',
                'what is firebase?'
            ],
            addQ:false
        }
    },
    methods:{
        addQuestion(){
            this.questions.push(this.question.question);
            this.$http.post("https://hightech-qa.firebaseio.com/data.json", this.question).then(response =>{
                    console.log(response);
                }, error =>{
                    console.log("error => " + error)
                });
            
            this.addQ = false;
        }
    }
}
</script>

<style>
    .brand{
        background-color: rgb(10, 107, 197);
        color: white;
    }
    .welcome{
        /* margin-top: 40px; */
        background: linear-gradient(32deg, #0d4a91, #1fb185);
        /* background-color: #243575; */
        color: white;
        min-height: 500px;
    }
    .counter-jumb{
        background-color: teal;
        min-height: 600px !important;
    }
    .brdr{
        box-shadow: 0 1rem 3rem black !important;
    }
</style>
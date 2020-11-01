<template>
  <div class="">
      <h2 class="back" @click="profile">back</h2>
      <div class="card brdr">
            <div class="card-header pro-header">
                <h2>{{team[index].name}}</h2>
                <p class="dev-role">{{team[index].role}}</p>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="container ">
                        <img class="m-3 w-75 rounded-circle brdr" :src="team[index].imgSrc" alt="" >
                    </div>  
                </div>
                <div class="col-md-8">
                    <div class="m-2 ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, praesentium eveniet? Dolor beatae delectus quidem assumenda odio sit similique sapiente animi, id ad velit officiis rerum maxime expedita magnam nulla.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae deleniti magnam blanditiis eum modi maxime unde! Illo, esse molestias. At a et beatae itaque quasi odit necessitatibus porro obcaecati aliquam.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, doloremque ullam blanditiis beatae, non reprehenderit ad quisquam consectetur tenetur, minus ipsam! Ullam praesentium, ipsum voluptates officiis ipsam odio cumque magni.
                        </p>
                    </div>  
                </div>
            </div>
            
            
        </div>
  </div>
</template>

<script>
export default {
    props:['team','index', 'profile']
}
</script>

<style>
    .pro-header{
        background: tomato;
        color: white;
        text-align: right;
    }
    .back{
        cursor: pointer;
    }
</style>
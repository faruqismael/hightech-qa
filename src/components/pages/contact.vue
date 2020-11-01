<template>
  <div class="container">
        <h1>Contact Us Here</h1>
        <noscript>{{title}}</noscript>
        <div class="card " id="map">
            <div style="min-height:345px;">
                <div class="d-flex text-center justify-content-center">
                    <div style="position:absolute; top:45%" class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <!-- <iframe style="height:445px;" class="map w-100" src="https://google.com"></iframe> -->
            </div>
        </div>
        <div class="row mt-5 mb-5">
            <div class="col-md-5"> 
                <div class="card">
                    <div class="card-body">
                        <h3>address &ast;</h3><br>
                        <div id="info">
                            <p style="border:none;" class=" contact-header"> &check; Piassa, Addis Ababa</p>
                            <p style="border:none;" class=" ">4343 Adwa Road</p>
                        </div>
                        <div id="info">
                            <p style="border:none;" class=" contact-header"> &check; +251(920 406 087)</p>
                            <p style="border:none;" class=" ">Mon to Fri 9am to 6 pm</p>
                        </div>
                        <div id="info">
                            <p style="border:none;" class=" contact-header"> &check; feedback@hightech.com</p>
                            <p style="border:none;" class=" ">Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7"> 
                <div class="card">
                    <div class="card-body">
                        <h3>Send us feedback &ast;</h3><br>
                        <form>
                            <div class="form-group">
                                <label for="">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="">Your Message</label>
                                <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">positive feedback</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:"contact"
        }
    }
}
</script>

<style>
    .contact-header{
        font-family: verdana;
        font-size: 20px;
    }
    .p{
        font-size:10px;
    }
    #info{
        /* color: white; */
        
    }
</style>
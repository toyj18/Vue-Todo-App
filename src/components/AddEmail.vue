<template>
    <div class="card-body">
        <!-- <form @submit="addEmail" class="form-inline">
            <div class="form-group col-md-12 m-3 ">
                <input type="text" class="form-control" v-model="email" name="email" placeholder="Enter Email...">
            </div>
            
            <div class="form-group col-md-12">
                <input type="submit" value="Login" class="btn btn-info mr-md-3">
            </div>
        </form> -->



        <form @submit="addEmail">
            <div class="form-group my-3">
                <label for="email">Please enter a valid email address to login</label>
                <input
                 type="email" 
                 class="form-control m-2" 
                 id="email"
                 placeholder="abc@todo.com"
                 v-model="email"
                 name="email"
                >
            </div>  
            <div class="form-group my-3">
                <input
                 type="submit" 
                 value="Login" 
                 class="btn btn-info btn-block my-4 mx-2"
                >
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddEmail",
        data(){
            return {
                email: '',
            }
        },
        methods: {
            addEmail(e){
                e.preventDefault();
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                //add new item
                if (!this.email) {
                    alert("Please Email can not be empty")
                }else if(!this.email.match(mailformat)){
                    alert("Please enter A valid email address")
                }
                else{
                    const newEmail = {
                    email: this.email,
                    }
                    //send to parent
                    this.$emit('add-email-event', newEmail);
                    //clear the field
                    this.email='';
                }
            }
        },
        
    }
</script>

<style scoped>
   @media only screen and (min-width: 601px) {
        label {
            font-size: 30px;
        }
        .form-control {
            font-size: 30px;
        }
        .btn {
            font-size: 30px;
        }
    }

    /* If the screen size is 600px or less, set the font-size of <div> to 30px */
    @media only screen and (max-width: 600px) {
         label {
            font-size: 13px;
        }
        .form-control {
            font-size: 13px;
        }
        .btn {
            font-size: 13px;
        }
    }
</style>
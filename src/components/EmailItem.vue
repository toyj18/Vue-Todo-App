<template>
    <div class="row bg-white border">
        <div class="col-md-8 col-12 mt-3 text-center">
            <span class="">
                {{email_item.email}}
            </span>
        </div>
        <div class=" col-md-3 col-12 m-2">
            <button class="btn btn-danger btn-block" @click="$emit('del-email-item', email_item.id)">Sign Out</button>    
        </div>
    </div>
</template>

<script>
    export default {
        name: "EmailItem",
        props : ["email_item"]
    }
</script>

<style scoped>
    @media only screen and (min-width: 601px) {
        span {
            font-size: 20px;
        }
        button {
            font-size: 20px;
        }
    }

    /* If the screen size is 600px or less, set the font-size of <div> to 30px */
    @media only screen and (max-width: 600px) {
        
        span {
            font-size: 13px;
        }
        

        button {
            font-size: 13px;
        }
    }
</style>
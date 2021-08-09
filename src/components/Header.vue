<template>
    <header class="card-title bg-primary header">
        <h2>Joshua Todos Project</h2>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    /* If the screen size is 601px or more, set the font-size of <div> to 80px */
    @media only screen and (min-width: 601px) {
        h2 {
            font-size: 30px;
        }
    }

    /* If the screen size is 600px or less, set the font-size of <div> to 30px */
    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 15px;
        }
    }
    .header{
        color: #ffffff;
        text-align: center;
        padding: 7px;
    }
    
</style>


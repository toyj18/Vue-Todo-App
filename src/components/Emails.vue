<template>
    <div class="card-body m-2">
        <div v-bind:key="email_item.id" v-for="email_item in emails">
            <EmailItem v-bind:email_item="email_item" v-on:del-email-item="delEmailMethod"></EmailItem>
        </div>
    </div>
</template>
<script>
import EmailItem from './EmailItem.vue';
    export default {
        name: "Email",
        props: ["emails"],
        components: {
            EmailItem
        },
        methods: {
            delEmailMethod(id){
                //send to parent
                this.$emit('del-email-event', id);
            }
        }
    }
</script>

<style scoped>

</style>
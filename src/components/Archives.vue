<template>
    <div class="card-body mb-2 list-group ml-3">
        <p class="card-text" v-if="!archive_stores.length">Your Archive storage is empty. Add something! </p>
        <div :key="arc.id" v-for="arc in archive_stores">
         <Archive
         @unarchive-todo-item="unArchiveMethod" :arc="arc"></Archive>
        </div>

        <!-- <div v-bind:key="todo_item.id" v-for="todo_item in pageOfItems" class="list-group-item mb-2">
            <TodoItem
             v-bind:todo_item="todo_item" 
             v-on:del-todo-item="delTodoMethod" 
             v-on:mark-todo-item="markTodoMethod" 
             v-on:edit-todo-item="editTodoMethod"
             @archive-todo-item="archiveTodoMethod"
             ></TodoItem>
        </div> -->
    </div>
</template>
<script>
import Archive from './Archive.vue';
    export default {
        name: "Archives",
        props: ["archive_stores"],
        components: {
            Archive
        },
        methods: {
            unArchiveMethod(id){
                this.$emit('unarchive-todo-item', id);
            }
        }
    }
</script>

<style scoped>

</style>
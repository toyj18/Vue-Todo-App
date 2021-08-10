<template>
    <div class="">
        <p class="" v-if="!pageOfItems.length">Your Todo List is empty. Add something! </p>

        <div v-bind:key="todo_item.id" v-for="todo_item in pageOfItems" class="">
            <TodoItem
             v-bind:todo_item="todo_item" 
             v-on:del-todo-item="delTodoMethod" 
             v-on:mark-todo-item="markTodoMethod" 
             v-on:edit-todo-item="editTodoMethod"
             @archive-todo-item="archiveTodoMethod"
             @notify-todo="notifyTodo"

             ></TodoItem>
        </div>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
    export default {
        name: "Todos",
        props: ["pageOfItems"],
        components: {
            TodoItem
        },
        methods: {
            delTodoMethod(id){
                //send to parent
                this.$emit('del-todo-event', id);
            },
            markTodoMethod(id){
                //send to parent
                this.$emit('mark-todo-event', id);
            },
            editTodoMethod(id){
                //send to parent
                this.$emit('edit-todo-event', id);
            },
            archiveTodoMethod(id){
                //send to parent
                this.$emit('archive-todo-event', id);
            },
            notifyTodo(id){
                //send to parent
                this.$emit('notify-todo', id);
            }
            
        }
    }
</script>

<style scoped>

</style>
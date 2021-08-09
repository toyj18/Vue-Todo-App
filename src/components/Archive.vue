<template>
    <div class="float-left">
         <span>{{ arc.title }} {{ arc.day }} </span>
          <button
          @click="$emit('unarchive-todo-item', arc.id)">Unarchive</button>
    </div>
</template>

<script>
    export default {
        name: "Archive",
        props : ["arc"]
    }
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete{
        text-decoration:line-through;
    }

    .del-icon{
        color: #bd2130;
        border-color: #b21f2d;
        vertical-align: middle;
        cursor: pointer;
    }
    .edit-icon{
        color: #117a8b;
        border-color: #10707f;
        vertical-align: middle;
        cursor: pointer;
        margin-left: 5px;
        margin-right: 10px;
    }
    .custom-checkbox{
        vertical-align: middle;

    }

</style>
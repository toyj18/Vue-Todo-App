<template>
    <div class="row m-auto border py-md-2 py-sm-3 ">
        <div class="col-md-1 col-sm-1 text-left mt-4">
            <span class="custom-control custom-checkbox">
                <input
                 type="checkbox" 
                 class="custom-control-input" 
                 v-bind:id="'id'+todo_item.id" 
                 v-on:change="$emit('mark-todo-item', todo_item.id)" 
                 v-if="todo_item.completed" checked
                />
                <input
                 type="checkbox" 
                 class="custom-control-input" 
                 v-bind:id="'id'+todo_item.id" 
                 v-on:change="$emit('mark-todo-item', 
                 todo_item.id)" 
                 v-else
                />
                <label
                 class="custom-control-label" 
                 v-bind:for="'id'+todo_item.id"
                ></label>
            </span>
        </div>

        <div class=" col-md-9 col-sm-11 text-left mt-4">notify-todo
            <span
             class="" 
             v-bind:class="{'is-complete':todo_item.completed}"
            >
                {{todo_item.title}}/ {{  todo_item.day  }}
                <span v-show="todo_item.notify"></span>
                <span
                 @click="$emit('notify-todo', todo_item.id)"
                 class="btn btn-link text-danger"
                 v-if="todo_item.notify"
                 >un-untifiy
                </span>
                <span
                 @click="$emit('notify-todo', todo_item.id)"
                 class="btn btn-link text-primary"
                 v-else
                 >
                 Notifiy
                </span>
            </span>
        </div>
        
        <div class="col-md-1 col-sm-12 text-right ml-md-3 ">

            <span
                class="material-icons edit-icon px-3" 
                @click="$emit('edit-todo-item', todo_item.id)" 
                v-if="!todo_item.completed"
            >
                edit
            </span>

            <button
                class="btn btn-link px-3"
                @click="$emit('archive-todo-item', todo_item.id)"
            >
                Archive
            </button>

            <i
                class="material-icons del-icon px-3" 
                @click="$emit('del-todo-item', todo_item.id)"
            >
                delete
            </i>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props : ["todo_item"]
    }
</script>

<style scoped>
     @media only screen and (min-width: 601px) {
        span {
            font-size: 20px;
        }
    }

    /* If the screen size is 600px or less, set the font-size of <div> to 30px */
    @media only screen and (max-width: 600px) {
        span {
            font-size: 15px;
        }
    }
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
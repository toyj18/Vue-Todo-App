<template>
    <div class="card-body">
        <form @submit="addTodo" class="">
            <div class="row bg-white p-2 border m-3">
                <div class="form-group col-md-3 col-sm-5 col-12 m-1">
                    <input type="text" class="form-control" v-model="title" name="title" placeholder="Add Todo item...">
                </div>
                <div class="form-group col-md-3 col-sm-5 col-12 m-1">
                    <input type="datetime-local" class="form-control" v-model="day" name="day">
                </div>
                <div class="form-check col-md-3 col-12 m-1">
                    <input class="form-check-input" type="checkbox" v-model="notifiy" value="" name="notifiy" id="notifiy">
                    <label class="form-check-label" for="notifiy">
                        Notify
                    </label>
                </div>
                <div class="form-group col-md-2 col-12">
                    <input type="submit" value="Submit" class="btn btn-info btn-block">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import uuid from 'uuid/v4';
    export default {
        name: "AddTodoItem",
        props: ['edit_data'],
        data(){
            return {
                title: '',
                day: '',
                notifiy: false,
                id: '',
                edit: false
            }
        },
        methods: {
            addTodo(e){
                e.preventDefault();
                if (!this.title) {
                    alert('Title can not be empty')
                }else if (!this.day){
                    alert('day can not be empty')
                }else {
                    if(this.edit === false){
                        //add new item
                        const newTodoItem = {
                            title: this.title,
                            day: this.day,
                            notify: this.notifiy,
                            id: uuid(),
                            archive: false,
                            completed: false
                        }
                        //send to parent
                        this.$emit('add-todo-event', newTodoItem);
                        //clear the field
                        this.title='';
                        this.day='';
                        this.notifiy=false
                    }else{
                        //edit item
                        const todoItem = {
                            title: this.title,
                            day:this.day,
                            notify: this.notifiy,
                            id: this.id,
                            archive: false,
                            completed: false
                        }
                        //send to parent
                        this.$emit('edit-todo-event', todoItem);
                        //clear the field
                        this.title='';
                        this.day='',
                        this.notifiy=false
                        this.edit === false;
                    }
                }
            }
        },
        watch: {
            edit_data: {
                handler() {
                    this.title = this.edit_data.title;
                    this.day = this.edit_data.day;
                    this.notifiy = this.edit_data.notifiy
                    this.id = this.edit_data.id;
                    this.edit = true;
                },
                deep: true,
            },
            title:{
                handler(){
                    if(this.title === '' && this.day == ''){
                        this.edit = false;
                    }
                }
            }
        },
    }
</script>

<style scoped>
    /* input[type="text"]{
        flex:10;
        padding: 5px;
    }
    input[type="datetime-local"]{
        flex:5;
        padding: 2px;
    }

    input[type="submit"]{
        flex: 2;
    } */
</style>
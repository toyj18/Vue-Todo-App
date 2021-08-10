<template>
  <div id="app" class="card center_div">
    <div class="bg-light">
      <Header></Header>
      <notifications group="foo" />
      <div v-if="!emails.length">

        <!--------------------------------- Start Adding Email Component --------------------------------------->
        <AddEmail
          @add-email-event="addEmilMethod"
        ></AddEmail>
        <!---------------------------------End Adding Email Component ------------------------------------------>
        
      </div>
      <div v-else>
        
        <!--------------------------------- Start Display Email Component --------------------------------------->
        <Emails
        v-bind:emails="emails" 
        v-on:del-email-event="deleteEmailItem" 
        ></Emails>
           

        <!--------------------------------- End Display Email Component --------------------------------------->

        <!--------------------------------- Start Adding Todo Component --------------------------------------->
        <AddTodoItem
        v-on:add-todo-event="addTodoMethod" 
        v-on:edit-todo-event="editTodoItemEvent" 
        v-bind:edit_data="edit_data"
        ></AddTodoItem>
        <!--------------------------------- End Adding Todo Component --------------------------------------->
      </div>
    </div>
    <div v-show="emails.length">
      
      <!--------------------------------- Start Display Todos Component --------------------------------------->
      <div class="">
        <Todos
        v-bind:pageOfItems="pageOfItems" 
        v-on:del-todo-event="deleteTodoItem" 
        v-on:mark-todo-event="markComplete" 
        v-on:edit-todo-event="editTodoItem"
        @archive-todo-event="archiveTodoMethodEvent"
        @notify-todo="notifyTodoItem"></Todos>
      </div>
      
      <!--------------------------------- End Display Todo Component --------------------------------------->

      <!--------------------------------- Start Todo Pagination Component --------------------------------------->
      <div class="card text-center m-3">
          <div class="card-footer pb-0 pt-3">
              <jw-pagination :pageSize=2 :items="todo_items" @changePage="onChangePage"></jw-pagination>
          </div>
      </div>
       
      <!--------------------------------- End Todo Pagination Component --------------------------------------->
      
      
      <!--------------------------------- Start SocialShare Component --------------------------------------->
      <div>
        <!-- <input type="datetime-local" name="date" v-model="date"> -->
        <SocialShare></SocialShare>
      </div>
      <!--------------------------------- End SocialShare Component --------------------------------------->

    
    <!--------------------------------- Start archive Component --------------------------------------->
    <div v-show="archiveShow">
      <Archives 
        @unarchive-todo-item="unArchiveMethod" 
        :archive_stores="archive_stores">
      </Archives>
    </div>
    <button class="btn btn-link" @click="archiveShowMethod">
      <span v-if="!archiveShow">Show archive</span> 
      <span v-if="archiveShow" style="color: red;">Close archive</span> 
    </button>
    <!--------------------------------- End archive Component --------------------------------------->
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import AddTodoItem from './components/AddTodoItem.vue'
  import Todos from './components/Todos.vue'
  import AddEmail from './components/AddEmail.vue'
  import Emails from './components/Emails.vue'    
  import Archives from './components/Archives.vue'
  import SocialShare from './components/SocialShare.vue'

export default {
  name: 'app',
  components: {
      Header,
      Todos,
      AddTodoItem,
      AddEmail,
      Emails,
      Archives,
      SocialShare,
  },
    data() {
      return {
          todo_items : [],
          pageOfItems: [],
          emails: [],
          archive_stores: [],
          josh_title: '',
          josh_day: '',
          current_date: Date.now(),
          archiveShow: false,
          date: '',
          edit_data : {
              title: '',
              day: '',
              notifiy: '',
              id: ''
          },
          
      }
    },
    methods: {
      
      archiveShowMethod(){
        this.archiveShow = !this.archiveShow
      },

      datePlay(){
        this.$notify({
            group: 'foo',
            title: 'Important message',
            text: 'Hello user! This is a notification!'
          });
        // if (this.current_date == (new Date(this.date).getTime())){
        //   alert('time to notify')
          
        // }
          // return true
        // }else{
        //   return false
        // }  
      },

      onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },

        addEmilMethod(newEmail) {
          this.emails.unshift(newEmail);
        },
        addTodoMethod(newTodoItem){
            //spread operator adds value to the end of the array
            //this.todo_items = [...this.todo_items, newTodoItem]
            //Use unshift: modifies the existing array by adding the value to the front:
            this.todo_items.unshift(newTodoItem);
        },
        deleteEmailItem(id) {
          this.emails = this.emails.filter(email_item => email_item.id !== id);
        },
         
        deleteTodoItem(id){
            this.todo_items = this.todo_items.filter(todo_item => todo_item.id !== id);
        },
        notifyTodoItem(id){
            //find index of this id's object
            var objIndex = this.todo_items.findIndex(obj => obj.id === id);
            //reverse true <> false
            this.todo_items[objIndex].notify = !this.todo_items[objIndex].notify;
        },
        markComplete(id){
            //find index of this id's object
            var objIndex = this.todo_items.findIndex(obj => obj.id === id);
            //reverse true <> false
            this.todo_items[objIndex].completed = !this.todo_items[objIndex].completed;
        },
        editTodoItem(id){
            //find index of this id's object
            var objIndex = this.todo_items.findIndex(obj => obj.id === id);
            console.log(objIndex);
            this.edit_data.title = this.todo_items[objIndex].title;
            this.edit_data.day = this.todo_items[objIndex].day;
            this.edit_data.notifiy = this.todo_items[objIndex].notifiy;
            this.edit_data.id= id;
        },
        editTodoItemEvent(todoItem){
            //find index of this id's object
            var objIndex = this.todo_items.findIndex(obj => obj.id === todoItem.id);
            //update the item
            this.todo_items[objIndex].title = todoItem.title;
            this.todo_items[objIndex].day = todoItem.day;
            this.todo_items[objIndex].notifiy = todoItem.notifiy;
        },
        joshFunction(one='I Love you', two='Thank you Jesus') {
          this.$notify({
            group: 'foo',
            title: one,
            text: two
          });
        },
        alertNotification(id) {
          var objIndex = this.todo_items.findIndex(obj => obj.id === id);
            // this.todo_items[objIndex].day = !this.todo_items[objIndex].completed;
            
            var myDate = new Date(this.todo_items[objIndex].day).getTime()
            // if (myDate === Date.){

            // }
            if (Date.now() != myDate) {
              this.joshFunction(myDate, this.todo_items[objIndex].title)
              return true
            }
            // function myFunction() {
            //   setInterval(function(){ alert("Hello"); }, 3000);
            // }
            // this.$notify({
            //     group: 'foo',
            //     title: myDate,
            //     text: Date.now()
            //   });
        },
        myFunction(){
          for (var i=0; i<this.todo_items.length; i++){

            const myNew =new Date(this.todo_items[i].day).getTime()
            const myNewPlus = myNew + 1000;
            if (this.todo_items[i].notify === true && Date.now() >= myNew && Date.now() <= myNewPlus){
              this.joshFunction(this.todo_items[i].day, this.todo_items[i].title)
              this.markComplete(this.todo_items[i].id)
            }
            // alert(myNewPlus)
          }
          
        },

        archiveTodoMethodEvent(id){
          //  var objIndex = this.todo_items.findIndex(obj => obj.id === id);
          //   console.log(objIndex);

          var objIndex = this.todo_items.findIndex(obj => obj.id === id);
            console.log(objIndex);

            this.edit_data.title = this.todo_items[objIndex].title;
            this.edit_data.day = this.todo_items[objIndex].day;
            this.edit_data.notifiy = this.todo_items[objIndex].notifiy;
  
            const newArc = {
              title: this.todo_items[objIndex].title,
              day: this.todo_items[objIndex].day,
              notifiy: this.todo_items[objIndex].notifiy,
              id: this.todo_items[objIndex].id,
              archive: true
            }
            this.archive_stores.unshift(newArc);
            this.deleteTodoItem(id)
        },

        unArchiveMethod(id){
          this.archive_stores = this.archive_stores.filter(arc => arc.id !== id);
        }
    },
    mounted(){
      console.log('App Mounted');
        if (localStorage.getItem('todo_items'))
            this.todo_items = JSON.parse(localStorage.getItem('todo_items'));
        
        if (localStorage.getItem('archive_stores'))
            this.archive_stores = JSON.parse(localStorage.getItem('archive_stores'));
        
        if (localStorage.getItem('emails'))
            this.emails = JSON.parse(localStorage.getItem('emails'));
        
        setInterval(this.myFunction, 1000);  
      
    },
    watch: {
        todo_items: {
            handler() {
                console.log('Todo Items array changed!');
                localStorage.setItem('todo_items', JSON.stringify(this.todo_items));
            },
            deep: true,
        },

        archive_stores: {
            handler() {
                console.log('Archive Deleted succesfully');
                localStorage.setItem('archive_stores', JSON.stringify(this.archive_stores));
            },
            deep: true,
        },

        emails: {
            handler() {
                console.log('emails array changed!');
                localStorage.setItem('emails', JSON.stringify(this.emails));
            },
            deep: true,
        },
    },
}
</script>

<style>
    @media only screen and (min-width: 601px) {
        .center_div{
          margin: 0 auto;
          width: 80%
        }
    }

    /* If the screen size is 600px or less, set the font-size of <div> to 30px */
    @media only screen and (max-width: 600px) {
        .center_div{
          margin: 0 auto;
          width: 95%
        }
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}


</style>

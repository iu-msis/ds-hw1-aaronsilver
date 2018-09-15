var profileApp = new Vue({
  el: '#profile',
  data: {

    tasks: [
      {


      }
    ]
  },

computed: {
age: function () {

  return moment().diff(moment(this.tasks.results[0].dob.date), 'years')
},

},
  methods: {

    fetchTasks () {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {profileApp.tasks = json} )
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },

  },
  created () {
    this.fetchTasks();
  }
})

var commentApp = new Vue({
  el: '#commentMain',
  data: {
    newCommentForm: {},
    commentArray: [],
  },


  methods: {
    handleNewCommentForm(e) {

      // TODO: Check validity in a better way


      const s = JSON.stringify(this.newCommentForm);

      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( json => {this.commentArray.push(json)})
        .catch( err => {
     console.error('COMMENT POST ERROR:');
     console.error(err);
   })

      // Reset workForm
      this.newCommentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        comment: this.commentArray.comment
    }
  },
  created () {

    // Do data fetch
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log('id: '+ id);
    this.id = id;

    if (!id) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // Populate workForm with default values
    this.newCommentForm = this.getEmptyCommentForm();

    // TODO: Fetch comment-specific data
    // fetch('api/comment?id=4')


    // Fetch all teams, for the form
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.commentArray = json} )
    .catch( err => {
      console.log('Comment Array ERROR:');
      console.log(err);
    })
  }

}
})

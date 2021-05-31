document.addEventListener('DOMContentLoaded', function() {
    const loadEl = document.querySelector('#load');
    try {
      let app = firebase.app();
      window.googleLogin = () =>{
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(response =>{
          window.location.href = "assistance.html"
        }) 
        //setTimeout(function(){window.location.href = "assistance.html"}, 10000)
       
      }
      
    } catch (e) {
      console.error(e);
      loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    }
  });
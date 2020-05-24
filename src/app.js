import firebaseConfig from './config.js';
(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // const model = {

      // };
      const view = {
        init: () => {
          view.render();
        },
        render: () => {

        },
      };
      const controller = {
        init: () => {
          view.init();
        },
      };
      firebase.initializeApp(firebaseConfig);
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN',
          },
        ],
        signInSuccessUrl: 'user.html',
      });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          controller.init();
        } else {
          // no user signed in
        }
      });
    }
  }
)();

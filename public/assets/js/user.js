import {firebaseConfig} from './config.js';
(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const profilePicture = document.getElementById('profile-picture');
      const userName = document.getElementById('user-name');
      const emailId = document.getElementById('email-id');
      const settingsMenu = document.getElementById('settings-menu');
      const logout = document.getElementById('logout');
      const addPassword = document.getElementById('add-password');
      const passwordContent = document.getElementById('password-content');
      const passwordDisplay = document.getElementById('password-display-list');
      const closeModal = document.getElementById('close-modal');
      const urlInput = document.getElementById('url-input');
      const urlInputIcon = document.getElementById('url-input-icon');
      const urlInputHelp = document.getElementById('url-input-help');
      const nameInput = document.getElementById('name-input');
      const nameInputIcon = document.getElementById('name-input-icon');
      const nameInputHelp = document.getElementById('name-input-help');
      const userNameInput = document.getElementById('username-input');
      const userNameInputIcon = document.getElementById('username-input-icon');
      const userNameInputHelp = document.getElementById('username-input-help');
      const passwordInput = document.getElementById('password-input');
      const passwordInputIcon = document.getElementById('password-input-icon');
      const passwordInputHelp = document.getElementById('password-input-help');
      const notesInput = document.getElementById('notes-input');
      const notesInputHelp = document.getElementById('notes-input-help');
      const savePassword = document.getElementById('save-password');
      const model = {
        user: { },
        password: {
          url: '',
          name: '',
          username: '',
          sitePassword: '',
          notes: '',
        },
        passwords: [],
      };
      const view = {
        init: () => {
          savePassword.onclick = () => {
            controller.savePasswords();
          },
          urlInput.oninput = () => {
            controller.handleUrlInput(urlInput.value);
          },
          nameInput.oninput = () => {
            controller.handleNameInput(nameInput.value);
          },
          userNameInput.oninput = () => {
            controller.handleUserNameInput(userNameInput.value);
          },
          passwordInput.oninput = () => {
            controller.handlePasswordInput(passwordInput.value);
          },
          notesInput.oninput = () => {
            controller.handleNotesInput(notesInput.value);
          },
          addPassword.onclick = () => {
            passwordContent.classList.add('is-active');
          },
          closeModal.onclick = () => {
            passwordContent.classList.remove('is-active');
          },
          settingsMenu.onclick = () => {
            settingsMenu.classList.toggle('is-active');
          },
          logout.onclick = () => {
            controller.logout();
          },
          view.render();
        },
        render: () => {
          profilePicture.src = model.user.photoURL;
          userName.innerHTML = model.user.displayName;
          emailId.innerHTML = model.user.email;
        },
      };
      const displayView = {
        init: () => {
          displayView.render();
        },
        render: () => {
          passwordDisplay.innerHTML = ``;
          model.passwords.forEach((password) => {
            passwordDisplay.innerHTML = `
              <div class="card">
                <div class="card-content">
                  <div class="launch-button" id="launch-button">
                    <button class="button is-large is-link">
                      Launch
                    </button>
                  </div>
                  <p class="title">
                    ${password.name}
                  </p>
                  <p class="subtitle">
                    ${password.username}
                  </p>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <button class="button is-info" id="edit-password">
                      <span class="icon">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span>
                        Edit
                      </span>
                    </button>
                  </p>
                  <p class="card-footer-item">
                    <button class="button is-danger" id="delete-password">
                      <span class="icon">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span>
                        Delete
                      </span>
                    </button>
                  </p>
                </footer>
              </div>
              `;
          });
        },
      };
      const controller = {
        handleNotesInput: (name) => {
          if (controller.validateNotes(name)) {
            notesInput.classList.add('is-success');
            notesInput.classList.remove('is-danger');
            notesInputHelp.classList.add('is-success');
            notesInputHelp.classList.remove('is-danger');
            notesInputHelp.innerHTML = `Notes sounds good`;
          } else {
            notesInput.classList.remove('is-success');
            notesInput.classList.add('is-danger');
            notesInputHelp.classList.remove('is-success');
            notesInputHelp.classList.add('is-danger');
            notesInputHelp.innerHTML = `Fill valid notes`;
          }
        },
        handlePasswordInput: (name) => {
          if (controller.validatePassword(name)) {
            passwordInput.classList.add('is-success');
            passwordInput.classList.remove('is-danger');
            passwordInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            passwordInputHelp.classList.add('is-success');
            passwordInputHelp.classList.remove('is-danger');
            passwordInputHelp.innerHTML = `Password is valid`;
          } else {
            passwordInput.classList.remove('is-success');
            passwordInput.classList.add('is-danger');
            passwordInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            passwordInputHelp.classList.remove('is-success');
            passwordInputHelp.classList.add('is-danger');
            passwordInputHelp.innerHTML = `Fill a Valid Password`;
          }
        },
        handleUserNameInput: (name) => {
          if (controller.validateUserName(name)) {
            userNameInput.classList.remove('is-danger');
            userNameInput.classList.add('is-success');
            userNameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            userNameInputHelp.classList.add('is-success');
            userNameInputHelp.classList.remove('is-danger');
            userNameInputHelp.innerHTML = `Username is valid`;
          } else {
            userNameInput.classList.remove('is-success');
            userNameInput.classList.add('is-danger');
            userNameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            userNameInputHelp.classList.remove('is-success');
            userNameInputHelp.classList.add('is-danger');
            userNameInputHelp.innerHTML = `Fill a Valid Username`;
          }
        },
        handleNameInput: (name) => {
          if (controller.validateName(name)) {
            nameInput.classList.remove('is-danger');
            nameInput.classList.add('is-success');
            nameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            nameInputHelp.classList.add('is-success');
            nameInputHelp.classList.remove('is-danger');
            nameInputHelp.innerHTML = `Name is valid`;
          } else {
            nameInput.classList.remove('is-success');
            nameInput.classList.add('is-danger');
            nameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
            `;
            nameInputHelp.classList.remove('is-success');
            nameInputHelp.classList.add('is-danger');
            nameInputHelp.innerHTML = `Fill a valid name`;
          }
        },
        handleUrlInput: (name) => {
          if (controller.validateUrl(name)) {
            urlInput.classList.add('is-success');
            urlInput.classList.remove('is-danger');
            urlInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            urlInputHelp.classList.add('is-success');
            urlInputHelp.classList.remove('is-danger');
            urlInputHelp.innerHTML = `Url is valid`;
          } else {
            urlInput.classList.remove('is-success');
            urlInput.classList.add('is-danger');
            urlInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            urlInputHelp.classList.remove('is-success');
            urlInputHelp.classList.add('is-danger');
            urlInputHelp.innerHTML = `Fill a valid Url`;
          }
        },
        validateNotes: (name) => {
          return name.length > 100;
        },
        validatePassword: (name) => {
          return name.length > 5;
        },
        validateUserName: (name) => {
          return name.length > 6;
        },
        validateName: (name) => {
          return name.length > 5;
        },
        validateUrl: (name) => {
          return name.length > 10;
        },
        validateAll: () => {
          return controller.validateUrl(urlInput.value) &&
          controller.validateName(nameInput.value) &&
          controller.validateUserName(userNameInput.value) &&
          controller.validatePassword(passwordInput.value) &&
          controller.validateNotes(notesInput.value);
        },
        resetForm: () => {
          urlInput.value = '';
          nameInput.value = '';
          userNameInput.value = '';
          passwordInput.value = '';
          notesInput.value = '';
          const passwordForm = document.getElementById('saved-password-form');
          passwordForm.innerHTML =`
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">URL:</label>
                    <div class="control has-icons-left has-icons-right">
                      <input 
                        class="input" 
                        type="text" 
                        placeholder="" 
                        id="url-input"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-link"></i>
                      </span>
                      <span id="url-input-icon" class="icon is-small is-right">
                      </span>
                    </div>
                  </div>
                  <p id="url-input-help" class="help">
                    Fill the url
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">Name:</label>
                    <div class="control has-icons-left has-icons-right">
                      <input 
                        class="input" 
                        type="text" 
                        placeholder="" 
                        id="name-input"
                      >
                      <span class="icon is-small is-left">
                        <i class="fas fa-file-signature"></i>
                      </span>
                      <span id="name-input-icon" class="icon is-small is-right">
                      </span>
                    </div>
                  </div>
                  <p id="name-input-help" class="help">
                    Fill the Name
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <label class="label">Username:</label>
                  <div class="control has-icons-left has-icons-right">
                    <input 
                      class="input" 
                      type="text" 
                      placeholder="" 
                      id="username-input"
                    >
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span 
                      id="username-input-icon" 
                      class="icon is-small is-right"
                    >
                    </span>
                  </div>
                  <p id="username-input-help" class="help">
                    Fill the Userame
                  </p>
                </div>
                <div class="field">
                  <label class="label">Site Password</label>
                  <div class="control has-icons-left has-icons-right">
                    <input 
                      class="input" 
                      type="password" 
                      placeholder="" 
                      id="password-input"
                    >
                    <span class="icon is-small is-left">
                      <i class="fas fa-unlock"></i>
                    </span>
                    <span 
                      id="password-input-icon" 
                      class="icon is-small is-right"
                    >
                    </span>
                  </div>
                  <p id="password-input-help" class="help">
                    Fill the Userame
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field">
                    <label class="label">Notes:</label>
                    <div class="control">
                      <textarea 
                        class="textarea" 
                        placeholder="" 
                        id="notes-input"
                      ></textarea>
                    </div>
                  </div>
                  <p id="notes-input-help" class="help">
                    Fill the Notes
                  </p>
                </div>
              </div>
            </div>
              `;
          view.init();
        },
        savePasswords: () => {
          if (controller.validateAll()) {
            db.collection('storePassword').add({
              url: urlInput.value,
              name: nameInput.value,
              username: userNameInput.value,
              sitePassword: passwordInput.value,
              notes: notesInput.value,
              time: new Date(),
            })
                .then(() => {
                })
                .catch((err) => {
                  alert('please try later');
                });
          } else {
            alert('Fill all areas');
          }
          controller.resetForm();
        },
        logout: () => {
          firebase.auth().signOut();
        },
        setUser: (user) => {
          model.user = user;
          view.render();
        },
        setPassword: (passwords) => {
          model.passwords = passwords;
          displayView.init();
        },
        init: () => {
          db.collection('storePassword').onSnapshot(
              (docSnapshot) => {
                const passwords = [];
                docSnapshot.forEach((doc) => {
                  if (doc.exists) {
                    const password = doc.data();
                    password.id = doc.id;
                    passwords.push(password);
                  }
                });
                passwords.sort((task1, task2)=>{
                  return task1.time.seconds-task2.time.seconds;
                });
                controller.setPassword(passwords);
              },
              (err) => {
                alert(err);
              });
          view.init();
        },
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          controller.init();
          controller.setUser(user);
        } else {
          window.location.href = './index.html';
        }
      });
    }
  }
)();

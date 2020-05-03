import {firebaseConfig} from './config.js';
(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const profilePicture = document.getElementById('profile-picture');
      const userName = document.getElementById('user-name');
      const emailId = document.getElementById('email-id');
      const settingsMenu = document.getElementById('settings-menu');
      const logout = document.getElementById('logout');
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
        passwordID: null,
      };
      const view = {
        addPassword: document.getElementById('add-password'),
        passwordContent: document.getElementById('password-content'),
        closeModal: document.getElementById('close-modal'),
        urlInput: document.getElementById('url-input'),
        urlInputIcon: document.getElementById('url-input-icon'),
        urlInputHelp: document.getElementById('url-input-help'),
        nameInput: document.getElementById('name-input'),
        nameInputIcon: document.getElementById('name-input-icon'),
        nameInputHelp: document.getElementById('name-input-help'),
        userNameInput: document.getElementById('username-input'),
        userNameInputIcon: document.getElementById('username-input-icon'),
        userNameInputHelp: document.getElementById('username-input-help'),
        passwordInput: document.getElementById('password-input'),
        passwordInputIcon: document.getElementById('password-input-icon'),
        passwordInputHelp: document.getElementById('password-input-help'),
        notesInput: document.getElementById('notes-input'),
        notesInputHelp: document.getElementById('notes-input-help'),
        savePassword: document.getElementById('save-password'),
        init: () => {
          view.urlInput.oninput = () => {
            controller.handleUrlInput(view.urlInput.value);
          },
          view.nameInput.oninput = () => {
            controller.handleNameInput(view.nameInput.value);
          },
          view.userNameInput.oninput = () => {
            controller.handleUserNameInput(view.userNameInput.value);
          },
          view.passwordInput.oninput = () => {
            controller.handlePasswordInput(view.passwordInput.value);
          },
          view.notesInput.oninput = () => {
            controller.handleNotesInput(view.notesInput.value);
          },
          view.addPassword.onclick = () => {
            view.passwordContent.classList.add('is-active');
          },
          view.closeModal.onclick = () => {
            view.passwordContent.classList.remove('is-active');
            controller.resetForm();
          },
          settingsMenu.onclick = () => {
            settingsMenu.classList.toggle('is-active');
          },
          logout.onclick = () => {
            controller.logout();
          },
          view.savePassword.onclick = controller.savePasswords;
          view.render();
        },
        render: () => {
          profilePicture.src = model.user.photoURL;
          userName.innerHTML = model.user.displayName;
          emailId.innerHTML = model.user.email;
        },
      };
      const displayView = {
        passwordDisplayList1: document.getElementById('password-display-list1'),
        passwordDisplayList2: document.getElementById('password-display-list2'),
        passwordDisplayList3: document.getElementById('password-display-list3'),
        init: () => {
        },
        render: () => {
          displayView.passwordDisplayList1.innerHTML = ``;
          displayView.passwordDisplayList2.innerHTML = ``;
          displayView.passwordDisplayList3.innerHTML = ``;
          model.passwords.forEach((password) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
            cardContent.innerHTML = `
              <p class="title">
                ${password.name}
              </p>
              <p class="subtitle">
                ${password.username}
              </p>
              `;
            const launchButton = document.createElement('button');
            launchButton.classList.add('launch-button', 'is-info', 'button');
            launchButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-link"></i>
              </span>
              <span>
                Launch
              </span>
            `;
            cardContent.appendChild(launchButton);
            const footer = document.createElement('footer');
            footer.classList.add('card-footer');
            const buttonTagEdit = document.createElement('p');
            buttonTagEdit.classList.add('card-footer-item');
            const editButton = document.createElement('button');
            editButton.classList.add('button', 'is-info');
            editButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-edit"></i>
              </span>
              <span>
                Edit
              </span>
            `;
            editButton.onclick = () => {
              updateController.editPassword(password.id, password);
            };
            const buttonTagDelete = document.createElement('p');
            buttonTagDelete.classList.add('card-footer-item');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('button', 'is-danger');
            deleteButton.innerHTML = `
              <span class="icon">
                <i class="fas fa-trash"></i>
              </span>
              <span>
                Delete
              </span>
            `;
            deleteButton.onclick = () => {
              updateController.deletePassword(password.id);
            };
            buttonTagEdit.appendChild(editButton);
            buttonTagDelete.appendChild(deleteButton);
            footer.appendChild(buttonTagEdit);
            footer.appendChild(buttonTagDelete);
            card.appendChild(cardContent);
            card.appendChild(footer);
            if (model.passwords.length <= 10) {
              displayView.passwordDisplayList1.appendChild(card);
            } else if (10 < model.passwords.length <=20) {
              displayView.passwordDisplayList2.appendChild(card);
            } else {
              displayView.passwordDisplayList3.appendChild(card);
            }
            card.onmouseover = () => {
              launchButton.classList.remove('launch-button');
            };
            card.onmouseout = () => {
              launchButton.classList.add('launch-button');
            };
            launchButton.onclick = () => {
              updateController.launchWebsite(password.id, password);
            };
          });
        },
      };
      const controller = {
        handleNotesInput: (name) => {
          if (controller.validateNotes(name)) {
            view.notesInput.classList.add('is-success');
            view.notesInput.classList.remove('is-danger');
            view.notesInputHelp.classList.add('is-success');
            view.notesInputHelp.classList.remove('is-danger');
            view.notesInputHelp.innerHTML = `Notes sounds good`;
          } else {
            view.notesInput.classList.remove('is-success');
            view.notesInput.classList.add('is-danger');
            view.notesInputHelp.classList.remove('is-success');
            view.notesInputHelp.classList.add('is-danger');
            view.notesInputHelp.innerHTML = `Fill valid notes`;
          }
        },
        handlePasswordInput: (name) => {
          if (controller.validatePassword(name)) {
            view.passwordInput.classList.add('is-success');
            view.passwordInput.classList.remove('is-danger');
            view.passwordInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.passwordInputHelp.classList.add('is-success');
            view.passwordInputHelp.classList.remove('is-danger');
            view.passwordInputHelp.innerHTML = `Password is valid`;
          } else {
            view.passwordInput.classList.remove('is-success');
            view.passwordInput.classList.add('is-danger');
            view.passwordInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.passwordInputHelp.classList.remove('is-success');
            view.passwordInputHelp.classList.add('is-danger');
            view.passwordInputHelp.innerHTML = `Fill a Valid Password`;
          }
        },
        handleUserNameInput: (name) => {
          if (controller.validateUserName(name)) {
            view.userNameInput.classList.remove('is-danger');
            view.userNameInput.classList.add('is-success');
            view.userNameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.userNameInputHelp.classList.add('is-success');
            view.userNameInputHelp.classList.remove('is-danger');
            view.userNameInputHelp.innerHTML = `Username is valid`;
          } else {
            view.userNameInput.classList.remove('is-success');
            view.userNameInput.classList.add('is-danger');
            view.userNameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.userNameInputHelp.classList.remove('is-success');
            view.userNameInputHelp.classList.add('is-danger');
            view.userNameInputHelp.innerHTML = `Fill a Valid Username`;
          }
        },
        handleNameInput: (name) => {
          if (controller.validateName(name)) {
            view.nameInput.classList.remove('is-danger');
            view.nameInput.classList.add('is-success');
            view.nameInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.nameInputHelp.classList.add('is-success');
            view.nameInputHelp.classList.remove('is-danger');
            view.nameInputHelp.innerHTML = `Name is valid`;
          } else {
            view.nameInput.classList.remove('is-success');
            view.nameInput.classList.add('is-danger');
            view.nameInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
            `;
            view.nameInputHelp.classList.remove('is-success');
            view.nameInputHelp.classList.add('is-danger');
            view.nameInputHelp.innerHTML = `Fill a valid name`;
          }
        },
        handleUrlInput: (name) => {
          if (controller.validateUrl(name)) {
            view.urlInput.classList.add('is-success');
            view.urlInput.classList.remove('is-danger');
            view.urlInputIcon.innerHTML = `<i class="fas fa-check"></i>`;
            view.urlInputHelp.classList.add('is-success');
            view.urlInputHelp.classList.remove('is-danger');
            view.urlInputHelp.innerHTML = `Url is valid`;
          } else {
            view.urlInput.classList.remove('is-success');
            view.urlInput.classList.add('is-danger');
            view.urlInputIcon.innerHTML = `
              <i class="fas fa-exclamation-triangle"></i>
              `;
            view.urlInputHelp.classList.remove('is-success');
            view.urlInputHelp.classList.add('is-danger');
            view.urlInputHelp.innerHTML = `Fill a valid Url`;
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
          return controller.validateUrl(view.urlInput.value) &&
          controller.validateName(view.nameInput.value) &&
          controller.validateUserName(view.userNameInput.value) &&
          controller.validatePassword(view.passwordInput.value) &&
          controller.validateNotes(view.notesInput.value);
        },
        resetForm: () => {
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
                    Fill the Password
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
          view.addPassword = document.getElementById('add-password');
          view.passwordContent = document.getElementById('password-content');
          view.closeModal = document.getElementById('close-modal');
          view.urlInput = document.getElementById('url-input');
          view.urlInputIcon = document.getElementById('url-input-icon');
          view.urlInputHelp = document.getElementById('url-input-help');
          view.nameInput = document.getElementById('name-input');
          view.nameInputIcon = document.getElementById('name-input-icon');
          view.nameInputHelp = document.getElementById('name-input-help');
          view.userNameInput = document.getElementById('username-input');
          view.userNameInputIcon = document.getElementById(
              'username-input-icon');
          view.userNameInputHelp = document.getElementById(
              'username-input-help');
          view.passwordInput = document.getElementById('password-input');
          view.passwordInputIcon = document.getElementById(
              'password-input-icon');
          view.passwordInputHelp = document.getElementById(
              'password-input-help');
          view.notesInput = document.getElementById('notes-input');
          view.notesInputHelp = document.getElementById('notes-input-help');
          view.savePassword = document.getElementById('save-password');
          view.savePassword.innerText = `Save`;
          view.init();
        },
        updatePassword: () => {
          view.passwordContent.classList.add('is-active');
          view.urlInput.value = model.password.url;
          view.nameInput.value = model.password.name;
          view.userNameInput.value = model.password.username;
          view.passwordInput.value = model.password.sitePassword;
          view.notesInput.value = model.password.notes;
          view.savePassword.innerHTML = `Update`;
          controller.handleUrlInput(view.urlInput.value);
          controller.handleUserNameInput(view.userNameInput.value);
          controller.handleNameInput(view.nameInput.value);
          controller.handlePasswordInput(view.passwordInput.value);
          controller.handleNotesInput(view.notesInput.value);
          view.savePassword.onclick = () => {
            updateController.updatePasswordInDb();
          };
        },
        savePasswords: () => {
          if (!(controller.validateAll())) {
            alert('Fill all areas');
          }
          db.collection('storePassword').add({
            url: view.urlInput.value,
            name: view.nameInput.value,
            username: view.userNameInput.value,
            sitePassword: view.passwordInput.value,
            notes: view.notesInput.value,
          })
              .then(() => {
                controller.resetForm();
                model.productID = null;
              })
              .catch((err) => {
                alert('please try later');
              });
          view.passwordContent.classList.remove('is-active');
        },
        launchRespectiveSite: () => {
          window.open(`${model.password.url}`, '_blank');
        },
        logout: () => {
          firebase.auth().signOut();
        },
        setUser: (user) => {
          model.user = user;
          view.render();
        },
        init: () => {
          view.init();
        },
      };
      const updateController = {
        updatePasswordInDb: () => {
          db.collection('storePassword')
              .doc(model.passwordID)
              .update({
                url: view.urlInput.value,
                name: view.nameInput.value,
                username: view.userNameInput.value,
                sitePassword: view.passwordInput.value,
                notes: view.notesInput.value,
              })
              .then(() => {
                controller.resetForm();
                model.productID = null;
              })
              .catch((err) => {
                alert('please try later');
              });
          view.passwordContent.classList.remove('is-active');
        },
        launchWebsite: (passwordID, password) => {
          model.passwordID = passwordID;
          model.password = password;
          controller.launchRespectiveSite();
        },
        editPassword: (passwordID, password) => {
          model.passwordID = passwordID;
          model.password = password;
          controller.updatePassword();
        },
        deletePassword: (id) => {
          db.collection('storePassword')
              .doc(id)
              .delete()
              .then(() => {
              })
              .catch(() => {
                alert('Failed to delete password');
              });
        },
        setPassword: (passwords) => {
          model.passwords = passwords;
          displayView.render();
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
                updateController.setPassword(passwords);
              },
              (err) => {
                alert(err);
              });
        },
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          controller.init();
          controller.setUser(user);
          updateController.init();
        } else {
          window.location.href = './index.html';
        }
      });
    }
  }
)();

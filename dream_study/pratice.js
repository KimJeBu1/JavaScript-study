class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            resolve(id);
        } else {
            reject(new Error('not found'));
        }
    }, 2000);
    });
  }

    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'ellie') {
              resolve({ name: 'ellie', role: 'admin'});
          } else {
              reject(new Error( 'no access'));
          }
      }, 1000);
      });  
  }
}

  //   getRoles(user, onSuccess, onError) {
//       setTimeout(() => {
//           if (user === 'ellie') {
//               onSuccess({ name: 'ellie', role: 'admin'});
//           } else {
//               onError(new Error( 'no access'));
//           }
//       }, 1000);
//   }
// }

const userStorage = new UserStorage();
const id = prompt('enter tour id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)

userStorage.loginUser(
  id,
  password,
  user => {
      userStorage.getRoles(
          user,
          userWithRole => {
              alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
          },
          error => {
              console.log(error);
          }
      );
  },
  error => {
      console.log(error);
  }
)
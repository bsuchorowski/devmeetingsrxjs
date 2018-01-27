// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBFJ8I-8ZI6fU69LiLfeNjndOe_QfS-p6M',
    authDomain: 'devmeetingrxjs.firebaseapp.com',
    databaseURL: 'https://devmeetingrxjs.firebaseio.com',
    projectId: 'devmeetingrxjs',
    storageBucket: 'devmeetingrxjs.appspot.com',
    messagingSenderId: '119693918371'
  }
};

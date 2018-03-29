// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  //Se conecta con la base de datos hecha en Firebase
  firebase: {
    apiKey: "AIzaSyDbfn_hdvvMu46afLwJrF6SUmBJK4YZexg",
    authDomain: "aechmea-flora-y-fauna-de-vzla.firebaseapp.com",
    databaseURL: "https://aechmea-flora-y-fauna-de-vzla.firebaseio.com",
    projectId: "aechmea-flora-y-fauna-de-vzla",
    storageBucket: "aechmea-flora-y-fauna-de-vzla.appspot.com",
    messagingSenderId: "491749486362"
  } 
};

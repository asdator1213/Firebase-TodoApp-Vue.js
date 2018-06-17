// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'Project-id',
  databaseURL: 'database-url'
})

const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

export const db = firestore;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

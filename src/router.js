import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

let routes = {
  // Not found
  '*': {
    component: load('error404')
  },

  // Default
  '/': {
    component: load('index')
    /*
    subRoutes: {
    }
    */
  },

  'juliet': {
    component: load('wordlists/juliet')
  },

  'quebec': {
    component: load('wordlists/quebec')
  },

  'qNoU': {
    component: load('wordlists/qNoU')
  },

  'xray': {
    component: load('wordlists/xray')
  },

  'zebra': {
    component: load('wordlists/zebra')
  },

  'twoLetters': {
    component: load('wordlists/twoLetters')
  },

  'threeLetters': {
    component: load('wordlists/threeLetters')
  },

  'noVowels': {
    component: load('wordlists/noVowels')
  },

  'twoAlphas': {
    component: load('wordlists/twoAlphas')
  },

  'twoEchos': {
    component: load('wordlists/twoEchos')
  },

  'twoIndias': {
    component: load('wordlists/twoIndias')
  },

  'twoOctobers': {
    component: load('wordlists/twoOctobers')
  },

  'twoUnicorns': {
    component: load('wordlists/twoUnicorns')
  },

  'twoYankees': {
    component: load('wordlists/twoYankees')
  }
}

let Router = new VueRouter()
Router.map(routes)

export default Router

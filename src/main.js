import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components


const vuetify = createVuetify({
  components,
  directives,
  display:{
    mobileBreakpoint: 'sm',
    thresholds:{
        xs:0,
        sm:375,
        lg: 1440
    }
  },
  themes:{
    light:{
      red: "hsl(14, 86%, 42%)",
      green: "hsl(159, 69%, 38%)",
      rose50:"hsl(20, 50%, 98%)",
      rose100: "hsl(13, 31%, 94%)",
      rose300: "hsl(14, 25%, 72%)",
      rose400: "hsl(7, 20%, 60%)",
      rose500: "hsl(12, 20%, 44%)",
      rose900: "hsl(14, 65%, 9%)"
    }
  }
})


const app = createApp(App)
app.use(vuetify)
app.mount('#app')

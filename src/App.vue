<template>
  <div id="app"
       type="textarea">
    <LeftContent :code="final"
                 class="left" />
    <Doraemon :code="finalCode" />
  </div>
</template>

<script>
import Doraemon from './components/Doraemon.vue'
import LeftContent from './components/LeftContent.vue'
import code from './assets/cssCode/code'
export default {
  name: 'App',
  components: {
    Doraemon,
    LeftContent
  },
  data () {
    return {
      code: code,
      final: '',
    }
  },
  methods: {
    codeAppear () {
      let n = 0
      setInterval(() => {
        this.final = this.code.substring(0, n)
        n += 1;
      }, 0.0001)
    }
  },
  created () {
    this.codeAppear()
  },
  computed: {
    finalCode () {
      return '<style>' + this.final + '<style>'
    }
  }
}
</script>

<style>
#app {
  height: 500px;
  display: flex;
  justify-content: space-between;
}
</style>

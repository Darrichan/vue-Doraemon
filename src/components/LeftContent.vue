<template>
  <div>
    <div contenteditable="true"
         class="textarea"
         id="scroll_text">
      <pre>
        {{code}}
      </pre>
    </div>
    <button>中速</button>
  </div>
</template>

<script>
export default {
  props: ['code'],
  name: 'LeftContent',
  updated () {
    this.scroll();
  },
  methods: {
    scroll () {
      // console.log(document.getElementById('scroll_text').scrollTop)
      document.getElementById('scroll_text').scrollTop = document.getElementById('scroll_text').scrollHeight

    }
  }
}

</script>

<style>
.textarea {
  width: 400px;
  min-height: 20px;
  max-height: 300px;
  _height: 120px;
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  outline: 0;
  border: 1px solid #a0b3d6;
  font-size: 12px;
  line-height: 24px;
  padding: 2px;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;

  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

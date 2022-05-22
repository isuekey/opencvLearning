<script>
export default {
  name:'ImageProvider',
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    imgProvider:{
      get(){
        return '';
      },
      set(val) {
        console.log('imgProvider', val);
      },
    },
    imgFile:{
      get(){
        return '';
      },
      set(val) {
        console.log('imgFile', val);
      },
    }
  },
  methods:{
    handleFileChange: function (changeToEvent) {
      if(!changeToEvent || !changeToEvent.target.files.length) return;
      const vue = this;
      const file = changeToEvent.target.files[0];
      const srcUrl = window.URL.createObjectURL(file);
      vue.$refs.imageBase.src = srcUrl;
      vue.$refs.imageBase.type = file.type;
    },
    handleImageLoaded(event) {
      const vue = this;
      const img = vue.$refs.imageBase;
      const canvas = vue.$refs.imageCanvas;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = vue.$refs.imageCanvas.getContext('2d');
      ctx.drawImage(vue.$refs.imageBase, 0, 0);
      vue.$emit('loaded', [{
        type:'canvas', data:canvas,
      }]);
    },
  },
}
</script>

<template>
<div class="display-flex flex-col flex-1">
  <input type="input" v-model="imgProvider" />
  <input type="file" @change="handleFileChange"/>
  <div class="position-relative">
    <img ref="imageBase" @load="handleImageLoaded" class="width-100p display-none" />
    <canvas ref="imageCanvas" class="width-100p">
    </canvas>
  </div>
</div>
</template>

<style>

</style>

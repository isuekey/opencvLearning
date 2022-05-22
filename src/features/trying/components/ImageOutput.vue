<script>
export default {
  name:"ImageOutput",
  props:{
    canvasConfig:{ type: Object, default() { return {}; }, },
    imageOutput:{ type: Object, default() { return []; }, },
  },
  data() {
    return {
    };
  },
  watch: {
    imageOutput(newOutput, oldOutput){
      const vue = this;
      console.log('watch the image', newOutput);
      if(!newOutput || newOutput.length == 0) {
        return vue.clearCanvas();
      }
      vue.drawCanvas(newOutput);
    },
  },
  methods: {
    clearCanvas() {
      const vue = this;
      const canvas = vue.$refs.imageOutput;
      const ctx = canvas.getContext('2d');
      
    },
    drawCanvas(newOutput) {
      const vue = this;
      console.log('cv', cv);
      const canvas = vue.$refs.imageOutput;
      cv.imshow(canvas, newOutput[0]);
      return newOutput;
    }
  },
};
</script>

<template>
  <div class="position-relative width-100p height-100p display-flex flex-col">
    <div>output</div>
    <canvas ref="imageOutput" class="width-100p flex-1" v-bind="canvasConfig">
    </canvas>
  </div>
</template>

<style>

</style>

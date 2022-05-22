<script>
import CodeEditor from './CodeEditor.vue';
import ImageOutput from './ImageOutput.vue';
import ImageProvider from './ImageProvider.vue';
export default {
  name:'PipeNode',
  components: {
    CodeEditor, ImageOutput, ImageProvider
  },
  props:{
    node:{ type: Object, default() { return {}; }, },
  },
  data() {
    return {
      imageInput:[],
      imageOutput:[],
    };
  },
  methods: {
    loadedProvider(canvasList) {
      const vue = this;
      vue.imageInput = canvasList;
      return canvasList;
    },
    processTheImage(resultList) {
      const vue = this;
      vue.imageOutput = resultList;
      return resultList;
    },
  }
}
</script>
<template>
<div class="display-flex flex-row width-100px">
  <div class="flex-1">
    <image-provider @loaded="loadedProvider"/>
  </div>
  <div class="flex-2">
    <code-editor :imageSource="imageInput" @done="processTheImage"/>
  </div>
  <div class="flex-1">
    <image-output :imageOutput="imageOutput"/>
  </div>

</div>
</template>

<style>
</style>

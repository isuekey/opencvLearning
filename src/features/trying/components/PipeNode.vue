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
}
</script>
<template>
<div class="display-flex flex-row width-100px">
  <div class="flex-1">
    <image-provider />
  </div>
  <div class="flex-2">
    <code-editor />
  </div>
  <div class="flex-1">
    <image-output />
  </div>

</div>
</template>

<style>
.flex-1 {
  flex:1;
}
.flex-2 {
  flex:2;
}
</style>

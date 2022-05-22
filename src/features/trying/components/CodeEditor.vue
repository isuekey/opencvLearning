<script>
export default {
  name:"CodeEditor",
  props:{
    disabled:Boolean,
    imageSource:null,
  },
  data() {
    return {
      codeBody:'',
    };
  },
  methods:{
    runTheCode() {
      const vue = this;
      const evaluateFunction = new Function('ipl', vue.codeBody);
      let result = evaluateFunction(vue.imageSource || []) || vue.imageSource;
      if(!Array.isArray(result)) {
        result = [ result ];
      };
      console.log('run the code', vue.imageSource, result);
      vue.$emit('done', result);
    },
  },
}
</script>

<template>
<div class="position-relative width-100p height-100p display-flex flex-col">
  <div>Code Editor. The input image param is ipl=[] (image param list)<button @click="runTheCode">run</button> </div>
  <textarea ref="codeEditor" rows="10" cols="50" :disabled="disabled" class="width-100p flex-1" v-model="codeBody">
  </textarea>
</div>
</template>

<style>

</style>

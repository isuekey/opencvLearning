<script>
import * as simpleUUID from 'simple-uuidv4';
import PipeNode from './components/PipeNode.vue';
export default {
  names:'TryingPage',
  components: {
    PipeNode,
  },
  data() {
    const vue = this;
    return {
      pipeNodeList:[]
    };
  },
  methods: {
    addInTheFirst() {
      const vue = this;
      const uuid = simpleUUID.uuid();
      return vue.pipeNodeList.unshift({uuid});
    },
    addInTheTail() {
      const vue = this;
      const uuid = simpleUUID.uuid();
      return vue.pipeNodeList.push({uuid});
    }
  },
}
</script>
<template>
<main class="position-relative display-flex flex-col width-100p height-100p">
  <div><button @click="addInTheFirst">在顶部添加节点</button></div>
  <pipe-node v-for="node in pipeNodeList" :key="node.uuid" :node="node"></pipe-node>
  <div><button @click="addInTheTail">在尾部添加节点</button></div>
</main>
</template>


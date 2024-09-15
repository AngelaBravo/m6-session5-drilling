<template>
  <h1>{{ msg }}</h1>
  <LosPrompt />
</template>

<script>
//import obtenerNombres from '@/utils/prompt';
import LosPrompt from './LosPrompt.vue';

export default {
  name: 'Session5Drilling',
  components: {
    LosPrompt,
  },
  props: {
    msg: String
  },
}
// computed: {},",
//methods: {}",
// watch: {},",
// mixins: [],",
// filters: {},",
// -- Lifecycle Methods",
// -- End Lifecycle Methods",
</script>

<style></style>
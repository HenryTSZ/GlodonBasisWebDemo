<template>
  <Page>
    <template slot="title">
      replaceProjectTitle
    </template>
    content
  </Page>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  data() {
    return {
      projectId: this.$route.params.projectId
    }
  },
  computed: {},
  watch: {},
  methods: {
    init() {}
  },
  created() {
    this.init()
  },
  mounted() {}
}
</script>

<style lang="less">

</style>

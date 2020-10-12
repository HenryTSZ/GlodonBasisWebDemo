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
  props: {
    tenantId: { type: String, default: '' },
    orgId: { type: String, default: '' },
    project: { type: String, default: '' }
  },
  data() {
    return {}
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

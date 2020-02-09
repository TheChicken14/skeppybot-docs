<template>
    <span>{{ stats.servers }} servers and {{ stats.users }} users</span>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      stats: {}
    }
  },

  mounted () {
    axios
      .get('http://ts.chickenfm.com:8888/api/stats')
      .then(response => (this.stats = response.data))
  }
}
</script>
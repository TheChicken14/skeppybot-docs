<template>
  <table>
    <tr>
      <th>Servers</th>
      <th>Users</th>
      <th>Channels</th>
      <th><a href="/commands.html">Commands</a></th>
    </tr>
    <tr>
      <td>{{ stats.servers }}</td>
      <td>{{ stats.users }}</td>
      <td>{{ stats.channels }}</td>
      <td>{{ stats.commands }}</td>
    </tr>
  </table>
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
      .get('https://api.skeppybot.xyz/api/stats')
      .then(response => (this.stats = response.data))
  }
}
</script>
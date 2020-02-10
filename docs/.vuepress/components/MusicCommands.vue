<template>
    <table>
        <tr>
            <th>Category</th>
            <th>Command</th>
            <th>Description</th>
            <th>Alias(es)</th>
        </tr>
        <tr v-for="command in commands">
            <td>{{ command.category }}</td>
            <td>{{ command.name }}</td>
            <td>{{ command.description }}</td>
            <td>{{ command.aliases.join(", ") }}</td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      commands: []
    }
  },

  mounted () {
    axios
      .get('https://api.skeppybot.xyz/api/commands/music')
      .then(response => (this.commands = response.data))
  }
}
</script>
<template>
    <table>
        <tr>
            <th>Command</th>
            <th>Description</th>
            <th>Alias(es)</th>
        </tr>
        <tr v-for="command in commands">
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
      .get('http://ts.chickenfm.com:8888/api/commands')
      .then(response => (this.commands = response.data))
  }
}
</script>
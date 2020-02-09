const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
    title: 'Skeppy Bot',
    description: 'The Discord bot for Skeppy fans!',
    themeConfig: {
        nav: [
            { text: 'invite', link: 'https://discordapp.com/oauth2/authorize?client_id=579327336395309062&scope=bot&permissions=2084044031', ...barConfig.nav}
        ],
        sidebar: barConfig.sidebar,
    }
  }
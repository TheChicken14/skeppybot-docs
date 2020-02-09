const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
    title: 'Skeppy Bot',
    description: 'The Discord bot for Skeppy fans!',
    themeConfig: {
        head: [
            ['link', { type: "image/png", sizes: "256x256", rel: 'icon', href: '/images/favicon.png' }]
            ['link', { rel: "shortcut icon", type: "image/png", href="/images/favicon.png" }]
        ],
        nav: [
            { text: 'invite', link: 'https://discordapp.com/oauth2/authorize?client_id=579327336395309062&scope=bot&permissions=2084044031', ...barConfig.nav}
        ],
        sidebar: barConfig.sidebar,
    }
  }
const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
    title: 'Skeppy Bot',
    description: 'The Discord bot for Skeppy fans!',
    head: [
        ['link', { type: "image/png", sizes: "256x256", rel: 'icon', href: '/images/favicon.png' }]
        ['link', { rel: "icon", type: "image/png", href: "/images/favicon.png" }]
    ],
    themeConfig: {
        nav: [
            { text: 'Invite', link: 'https://discordapp.com/oauth2/authorize?client_id=579327336395309062&scope=bot&permissions=2084044031' },
            { text: 'Vote', link: 'https://top.gg/bot/579327336395309062' }
        ],
        sidebar: barConfig.sidebar,
    }
  }
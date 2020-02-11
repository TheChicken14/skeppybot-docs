const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
    title: 'Skeppy Bot',
    description: 'The Discord bot for Skeppy fans!',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/images/favicon.png" }]
    ],
    themeConfig: {
        nav: [
            { text: 'Invite', link: 'https://discordapp.com/oauth2/authorize?client_id=579327336395309062&scope=bot&permissions=2084044031' },
            { text: 'Vote', link: 'https://top.gg/bot/579327336395309062' }
        ],
        sidebar: barConfig.sidebar,

        repo: 'TheChicken14/skeppy-bot',
        repoLabel: 'GitHub!',
        docsRepo: 'TheChicken14/skeppybot-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page'
    }
  }
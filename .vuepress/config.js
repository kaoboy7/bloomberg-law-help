module.exports = {
    title: "Bloomberg Law",
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://bloomberg-law-help.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#0d9ddb' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'bna',
    themeConfig: {
        docsDir: 'docs',

        sidebar: [ '/docs/*',],

        logo: "/header-logo.png",

        alternateHomeUrl: "http://www.bloomberglaw.com/",
        
    }
}
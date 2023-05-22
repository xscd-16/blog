// docs/.vuepress/config.js
module.exports = {
    title: "科技趣玩",
    description: "分享各类资源、教程、黑科技软件、工具等等",
    markdown: {
      lineNumbers: true,
    },
    base:'/cimu_blog/',
    themeConfig: {
      sidebar: [
        {
          title: 'demo',
          children: ['/demo/demo1' ],
          initialOpenGroupIndex: 0 // 可选的, 默认值是 0
        }
      ],
      nav: [
        { text: '首页', link: '/' },
        { 
            text: 'cimu', 
            items: [
                { text: 'Github', link: '' },
                { text: '掘金', link: '' }
            ]
        }
    ],
    },
  };
  
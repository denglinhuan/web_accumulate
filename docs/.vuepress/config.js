module.exports = {
  title: '前端知识积累',
  description: '每一个人都是自己命运的建筑师',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码行数
  },
  themeConfig: {
    // repo: 'OBKoro1/web_accumulate',
    docsRepo: 'denglinhuan/web_accumulate',
    docsBranch: 'master', // git 源仓库 仓库分支
    docsDir: 'docs', // 仓库下的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '帮助我改善这个页面', // 链接字段
    serviceWorker: {
      updatePopup: {
        // 刷新内容的弹窗
        message: '发现新内容',
        buttonText: '刷新'
      }
    },
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebarDepth: 3,
    nav: [
      { text: '前端积累', link: '/accumulate/' }, // 内部链接 以docs为根目录
      { text: '代码块', link: '/codeBlack/'},
      { text: '关于我', link: '/about/' },
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/denglinhuan' }
        ]
      }
    ],
    sidebar: {
      // docs文件夹下面的home文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
        '/accumulate/http/http状态码'
      ],
      '/codeBlack/':[
        '/codeBlack/mini/小程序再次获取权限'
      ]
    }
  }
}

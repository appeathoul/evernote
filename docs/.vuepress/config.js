const readFileList = require("../../scripts/build.js");

module.exports = {
  title: "每日时报",
  description:
    "每日时报，会以前端技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。",
  head: [
    [
      "link",
      { rel: "alternate", type: "application/rss+xml", href: "/rss.xml", title: "每日时报" },
    ],
  ],
  ga: "UA-146136469-1",
  plugins: [
    ["@vuepress/google-analytics"],
    [
      "vuepress-plugin-rss-support",
      {
        site_url: "https://wubaiqing.github.io/zaobao",
        filter: page => /^\/201.+/.test(page.path),
        copyright: "2019每日时报",
        count: 60,
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "wubaiqing",
        repo: "zaobao",
        clientId: "20ee116870a4be78bb37",
        clientSecret: "13c39d03e4bdc6f13023cc6f318ca132c7522b9f",
      },
    ],
  ],
  base: "/zaobao/",
  themeConfig: {
    repo: "wubaiqing/zaobao",
    lastUpdated: "Last Updated",
    docsDir: "docs",
    // algolia: {
    //   apiKey: "3fea8456dd38b9823800eff6781ad505",
    //   indexName: "evernote",
    // },
    nav: [{ text: "留言", link: "/other/talk" }],
    sidebar: [
      ["/", "1. 介绍"],
      {
        title: "2019年08月",
        collapsable: false,
        children: readFileList("2019", "08"),
      }
    ],
  },
};

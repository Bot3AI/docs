import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index";
import { enSidebar } from "./sidebar/index";

export default hopeTheme({
  hostname: "https://docs.bot3.ai",
  //
  author: {
    name: "Bot3AI",
    url: "https://github.com/Bot3AI",
  },

  iconAssets: "iconfont",

  logo: "/bot3.svg",

  repo: "https://github.com/Bot3AI/docs",

  docsDir: "docs",

  pageInfo: ["Original", "Category"],

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,
    },
  },

  editLink: false,
  lastUpdated: false,
  contributors: false,
  copyright: false,
  displayFooter: true,


  plugins: {
    copyCode: {
      showInMobile: true,
      duration: 0,
      pure: true,
      delay: 800,
    },
    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imgMark: true,
      katex: true,
      mermaid: true,
      presentation: true,
      sub: true,
      sup: true,
      vPre: true,
    },
  },
});

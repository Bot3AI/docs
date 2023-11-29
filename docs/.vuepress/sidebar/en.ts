import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  //The sidebar for Tools and SDKs
  "/introduction": [
    {
      text: "Introduction", // required
      link: '/introduction/'
    },
    {
      text: "Overview", // required
      link: "/introduction/overview", // optional, which should be a absolute path.
      children: [
        "/introduction/overview/1.1_Product_Introduction.md",
        "/introduction/overview/1.2_Main_Features_and_Advantages.md",
        "/introduction/overview/1.3_Brand_Logo.md",
        "/introduction/overview/1.4_Pricing.md"
      ],
    },
    {
      text: "User Guide", // required
      link: "/introduction/user-guide", // optional, which should be a absolute path.
      children: [
        "/introduction/user-guide/2.1_How_to_use_Bot3_AI.md",
        "/introduction/user-guide/2.2_How_to_Create_a_Bot.md",
        "/introduction/user-guide/2.3_FAQ.md"
      ],
    },
    {
      text: "Updates", // required
      link: "/introduction/updates", // optional, which should be a absolute path.
      children: [
        "/introduction/updates/3.1_Update_History.md",
        "/introduction/updates/3.2_Future_Planning.md",
        "/introduction/updates/3.3_Feedback_or_Suggestions.md",
      ],
    },
    {
      text: "Socials", // required
      link: "/introduction/socials", // optional, which should be a absolute path.
      children: [
        "/introduction/socials/4.1_Twitter.md",
        "/introduction/socials/4.2_Discord.md"
      ],
    }
  ]
});

// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "ShenZhen",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://www.google.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "study",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "school",
          links: [
            {
              name: "teams",
              url: "https://teams.microsoft.com/v2/",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "office",
              url: "https://www.office.com/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "gimkit",
              url: "https://www.office.com/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "quill",
              url: "https://www.office.com/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "remnote",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "quizlet",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "khanacademy",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "canva",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatgpt",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "perplexity",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "grok",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "videos",
          links: [
            {
              name: "youtube",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "instagram",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "bilibili",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "hianime",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "narrow",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "cg163",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "poki",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "crazygames",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "music & media",
          links: [
            {
              name: "spotify",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "youtube-music",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "pixiv",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);

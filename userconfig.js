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
              url: "https://teams.microsoft.com/",
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
              url: "https://www.gimkit.com/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "quill",
              url: "https://www.quill.org/",
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
              url: "https://www.remnote.com/",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "quizlet",
              url: "https://quizlet.com/",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "khanacademy",
              url: "https://www.khanacademy.org/",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "canva",
              url: "https://www.canva.com/",
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
              url: "https://chat.openai.com/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://gemini.com/",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "grok",
              url: "https://x.ai/",
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
              url: "https://www.youtube.com/",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "bilibili",
              url: "https://www.bilibili.com/",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "hianime",
              url: "https://hianime.to/",
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
              url: "https://narrow.one/",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "cg163",
              url: "https://cg.163.com/#/mobile",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "poki",
              url: "https://poki.com/",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "crazygames",
              url: "https://www.crazygames.com/",
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
              url: "https://www.spotify.com/",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "youtube-music",
              url: "https://music.youtube.com/",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
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

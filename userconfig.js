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
              icon: "brand-teams",
              icon_color: palette.blue,
            },
            {
              name: "office",
              url: "https://www.office.com/",
              icon: "brand-office",
              icon_color: palette.red,
            },
            {
              name: "gimkit",
              url: "https://www.gimkit.com/",
              icon: "device-gamepad",
              icon_color: palette.mauve,
            },
            {
              name: "quill",
              url: "https://www.quill.org/",
              icon: "feather",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "remnote",
              url: "https://www.remnote.com/",
              icon: "notes",
              icon_color: palette.blue,
            },
            {
              name: "quizlet",
              url: "https://quizlet.com/",
              icon: "question-mark",
              icon_color: palette.blue,
            },
            {
              name: "khanacademy",
              url: "https://www.khanacademy.org/",
              icon: "table",
              icon_color: palette.green,
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
              icon: "message-chatbot",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://gemini.com/",
              icon: "north-star",
              icon_color: palette.peach,
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "brain",
              icon_color: palette.blue,
            },
            {
              name: "grok",
              url: "https://x.ai/",
              icon: "brand-x",
              icon_color: palette.yellow,
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
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: palette.peach,
            },
            {
              name: "bilibili",
              url: "https://www.bilibili.com/",
              icon: "brand-bilibili",
              icon_color: palette.pink,
            },
            {
              name: "hianime",
              url: "https://hianime.to/",
              icon: "movie",
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
              icon: "bow",
              icon_color: palette.peach,
            },
            {
              name: "cg163",
              url: "https://cg.163.com/#/mobile",
              icon: "cloud",
              icon_color: palette.green,
            },
            {
              name: "poki",
              url: "https://poki.com/",
              icon: "device-gamepad-2",
              icon_color: palette.blue,
            },
            {
              name: "crazygames",
              url: "https://www.crazygames.com/",
              icon: "device-gamepad",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "music & media",
          links: [
            {
              name: "spotify",
              url: "https://www.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "youtube-music",
              url: "https://music.youtube.com/",
              icon: "music",
              icon_color: palette.red,
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/",
              icon: "library-photo",
              icon_color: palette.blue,
            },
            {
              name: "brand-reddit",
              url: "https://www.reddit.com/",
              icon: "brand-netflix",
              icon_color: palette.red,
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

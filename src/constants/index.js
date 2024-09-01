import { facebook, instagram, telegram, twitter } from "../assets";
import { Analytics } from "@vercel/analytics/react"

export const navLinks = [
  {
    id: "/",
    title: "الواجهة",
  },
  {
    id: "/#news",
    title: "أخبار",
  },
  {
    id: "/#overview",
    title: "البيلدات",
  },
  {
    id: "/#about",
    title: "من نحن",
  },
  {
    id: "/agents",
    title: "الشخصيات",
  },
  {
    id: "/maps",
    title: "الخرائط",
  },
];

export const news = [
  {
    id: "news-1",
    title: "فوز لعبة هونكاي ستار ريل بجائزة افضل سرد قصصي ",
    date: "25/8/24",
    category: "المجتمع",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277223628701696052/photo_2024-08-25_14-10-32.jpg?ex=66d4f472&is=66d3a2f2&hm=c9eb17d116873b72dffb2e450187b2843b067df1df3668b13260508de5928961&"
  },
  {
    id: "news-2",
    title: "لايف ريآكشن - كرستيانو و جورجينا: ستار ريل افضل لعبة",
    date: "25/8/24",
    category: "الإعلانات",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277226682171916298/photo_2024-08-25_14-22-35.jpg?ex=66d4f74a&is=66d3a5ca&hm=db021ab9847285bc96e9fc665ac6ebfded71c7ef9fe5ba4188cff62eb4e10d79&"
  },
  {
    id: "news-3",
    title: "ما هو الجديد في هونكاي ستار ريل",
    date: "25/8/24",
    category: "تحديثات اللعبة",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277224064016060437/photo_2024-08-25_14-12-10.jpg?ex=66d4f4da&is=66d3a35a&hm=a0ce61b82996cbe82538b8060acb3fdf44b0ca721ecfa6617b4e5206e11bcd2a&"
  },
]

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/hsr.in.arabic1/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://x.com/HonkaiSRArabic",
  },
  {
    id: "social-media-4",
    icon: telegram,
    link: "https://t.me/HonkaiStarRailAR",
  },
];

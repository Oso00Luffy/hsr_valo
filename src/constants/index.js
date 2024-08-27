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
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277223628701696052/photo_2024-08-25_14-10-32.jpg?ex=66cf05b2&is=66cdb432&hm=ca33bab05b3429fee24f95053ce7436773d94d620dcac5e780f02cf22a39835c&"
  },
  {
    id: "news-2",
    title: "لايف ريآكشن - كرستيانو و جورجينا: ستار ريل افضل لعبة",
    date: "25/8/24",
    category: "الإعلانات",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277224064016060437/photo_2024-08-25_14-12-10.jpg?ex=66cf061a&is=66cdb49a&hm=3a7bdc493a57eb009cdd9f3d176e902eb4a4c4153a9bfb7ae80e1498739398c4&"
  },
  {
    id: "news-3",
    title: "ما هو الجديد في هونكاي ستار ريل",
    date: "25/8/24",
    category: "تحديثات اللعبة",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277226682171916298/photo_2024-08-25_14-22-35.jpg?ex=66cf088a&is=66cdb70a&hm=4af04134b53c780495fd664cc747fff0f9e70998ca0f8dca31e45a0b7889e343&"
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
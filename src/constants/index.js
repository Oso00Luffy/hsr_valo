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
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277226682171916298/photo_2024-08-25_14-22-35.jpg?ex=66cc658a&is=66cb140a&hm=f3973184be3501c6fc4f62451ea8617f29ed48f4a0323bb31f9c41aebe95d0a8&",
    style: { fontSize: "20px", fontWeight: "bold" },
},
  {
    id: "news-2",
    title: "لايف ريآكشن - كرستيانو و جورجينا: ستار ريل افضل لعبة",
    date: "25/8/24",
    category: "الإعلانات",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277223628701696052/photo_2024-08-25_14-10-32.jpg?ex=66cc62b2&is=66cb1132&hm=27e59c3d13f2597d52831796959f2c34d14ea947f08cce9f3d97caba68024bf3&"
  },
  {
    id: "news-3",
    title: "ما هو الجديد في هونكاي ستار ريل",
    date: "25/8/24",
    category: "تحديثات اللعبة",
    imglink: "https://cdn.discordapp.com/attachments/623877027086336010/1277224064016060437/photo_2024-08-25_14-12-10.jpg?ex=66cc631a&is=66cb119a&hm=4c3c9ced425c0fb20277566cf9f9b47280e24a988b13ff79531f182aa739d0ae&"
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
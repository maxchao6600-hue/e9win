import type { Metadata } from "next";
import { localizePath, tx, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Spec = {
  path: string;
  title: [string, string];
  description: [string, string];
  index?: boolean;
  image?: { src: string; alt: [string, string] };
};

const pages = {
  about: {
    path: "/about",
    title: ["About E9WIN | Malaysia Online Gaming Lobby", "关于 E9WIN | 马来西亚线上游戏大厅"],
    description: [
      "What E9WIN is, how the lobby is organised, and how players reach games, payments, and support.",
      "E9WIN 是什么、大厅如何组织，以及玩家如何进入游戏、支付和客服。",
    ],
  },
  contact: {
    path: "/contact",
    title: ["Contact E9WIN | WhatsApp and Facebook Support", "联系 E9WIN | WhatsApp 与 Facebook 客服"],
    description: [
      "Contact E9WIN on WhatsApp or Facebook. No public email or phone number is listed. In-lobby chat is available after sign-in.",
      "通过 WhatsApp 或 Facebook 联系 E9WIN。没有公布电子邮箱或电话。登录后可使用大厅内聊天。",
    ],
  },
  faq: {
    path: "/faq",
    title: ["E9WIN FAQ | Account, Games, Payments and Support", "E9WIN 常见问题 | 账户、游戏、支付与客服"],
    description: [
      "Answers about E9WIN accounts, games, download, payments, promotions, agents, and support.",
      "关于 E9WIN 账户、游戏、下载、支付、优惠、代理和客服的解答。",
    ],
  },
  payments: {
    path: "/payment-methods",
    title: ["E9WIN Payment Methods | Banks, E-Wallets and USDT", "E9WIN 支付方式 | 银行、电子钱包与 USDT"],
    description: [
      "See the banks, e-wallets, telco PIN, and USDT marks published for E9WIN, then deposit or withdraw in the cashier.",
      "查看 E9WIN 已公布的银行、电子钱包、电信 PIN 和 USDT 标识，然后在收银台存款或提款。",
    ],
  },
  deposit: {
    path: "/deposit",
    title: ["E9WIN Deposit | Bank, E-Wallet and USDT", "E9WIN 存款 | 银行、电子钱包与 USDT"],
    description: [
      "Deposit to E9WIN by instant transfer, e-wallet, bank transfer, telco PIN, or USDT.",
      "通过即时转账、电子钱包、银行转账、电信 PIN 或 USDT 向 E9WIN 存款。",
    ],
  },
  withdrawal: {
    path: "/withdrawal",
    title: ["E9WIN Withdrawal | Matching Bank and E-Wallet", "E9WIN 提款 | 同名银行与电子钱包"],
    description: [
      "Withdraw from E9WIN to a bank or e-wallet in the same name as the profile. The cashier shows the status of the request.",
      "从 E9WIN 提款到与个人资料同名的银行或电子钱包。收银台显示申请状态。",
    ],
  },
  responsible: {
    path: "/responsible-gaming",
    title: ["Responsible Gaming", "E9WIN 理性娱乐"],
    description: [
      "Age limit, spending control, and support notes for E9WIN players.",
      "E9WIN 玩家的年龄限制、支出控制和客服说明。",
    ],
  },
  terms: {
    path: "/terms",
    title: ["E9WIN Terms", "E9WIN 条款"],
    description: [
      "Terms for using the E9WIN information website and the player-account rules described publicly.",
      "使用 E9WIN 说明网站的条款，以及公开描述的玩家账户规则。",
    ],
  },
  privacy: {
    path: "/privacy",
    title: ["E9WIN Privacy", "E9WIN 隐私说明"],
    description: [
      "How the E9WIN information site handles the details you type into login and register forms.",
      "E9WIN 说明网站如何处理你在登录和注册表格中填写的资料。",
    ],
  },
  login: {
    path: "/login",
    title: ["E9WIN Login", "E9WIN 登录"],
    description: [
      "Sign in to E9WIN with your username and password, then continue in the player lobby.",
      "使用用户名和密码登录 E9WIN，然后在玩家大厅继续。",
    ],
    index: false,
  },
  register: {
    path: "/register",
    title: ["E9WIN Register", "E9WIN 注册"],
    description: [
      "Register an E9WIN account with your name, Malaysian mobile number, username, and password.",
      "使用姓名、马来西亚手机号码、用户名和密码注册 E9WIN 账户。",
    ],
    index: false,
  },
  promotions: {
    path: "/promotions",
    title: ["E9WIN Promotions | Explore Available Offers", "E9WIN 优惠 | 当前活动与账户条件"],
    description: [
      "Explore the E9WIN promotions that are named on this site. Review welcome, slot, rebate, referral, birthday, and mission campaigns, then read the account card before you opt in.",
      "浏览本站列出的 E9WIN 优惠。查看欢迎、老虎机、返水、推荐、生日和任务活动，参加前先阅读账户卡片。",
    ],
    image: {
      src: "/images/promotions/promo-welcome.webp",
      alt: ["Welcome campaign still used on the E9WIN promotions page", "E9WIN 优惠页使用的欢迎活动画面"],
    },
  },
} satisfies Record<string, Spec>;

export function routeMeta(key: keyof typeof pages, locale: Locale): Metadata {
  const spec = pages[key];
  const title = tx(locale, spec.title[0], spec.title[1]);
  const description = tx(locale, spec.description[0], spec.description[1]);
  const meta = pageMeta({
    title,
    description,
    path: localizePath(spec.path, locale),
    locale,
    index: "index" in spec ? spec.index : undefined,
  });
  if (!("image" in spec) || !spec.image) return meta;
  const alt = tx(locale, spec.image.alt[0], spec.image.alt[1]);
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [{ url: absoluteUrl(spec.image.src), alt }] },
    twitter: { ...meta.twitter, images: [absoluteUrl(spec.image.src)] },
  };
}

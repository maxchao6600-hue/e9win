import { faqGroups, type FaqGroup } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const zhFaq: Record<string, { title: string; items: { q: string; a: string }[] }> = {
  general: {
    title: "常见问题",
    items: [
      {
        q: "E9WIN 是什么？",
        a: "E9WIN 是面向马来西亚的线上游戏大厅，提供老虎机、真人娱乐场、体育、4D、捕鱼和电竞。本站说明分类、支付方式、优惠和客服。投注在玩家大厅进行。",
      },
      {
        q: "E9WIN 有哪些游戏？",
        a: "大厅包括来自 Pragmatic Play、Evolution、Playtech 和 Lucky365 的老虎机和真人桌，以及体育、4D、捕鱼和电竞。",
      },
    ],
  },
  registration: {
    title: "注册与登录",
    items: [
      {
        q: "如何注册 E9WIN？",
        a: "使用注册表格，然后在玩家入口继续。请提供日后可以核对的真实姓名、手机号码和登录资料。",
      },
      {
        q: "本站会保存我的注册资料吗？",
        a: "表格在你的浏览器内检查栏位，不会在这里建立登录状态。账户在玩家大厅继续。",
      },
    ],
  },
  login: {
    title: "登录",
    items: [
      {
        q: "如何登录 E9WIN？",
        a: "输入注册时的用户名和密码。游戏在 E9WIN 大厅继续。",
      },
      {
        q: "忘记密码怎么办？",
        a: "使用玩家大厅内的找回步骤，或通过 WhatsApp 向客服发送用户名。不要在聊天中发送密码。",
      },
    ],
  },
  games: {
    title: "游戏",
    items: [
      {
        q: "在哪里打开游戏？",
        a: "在游戏页面浏览封面，登录后在大厅启动该游戏。捕鱼、4D 和电竞没有公开缩略图列表。",
      },
      {
        q: "如何在手机上使用 E9WIN？",
        a: "可以。使用手机网页，把本站加到 iPhone 主屏幕，或使用下载页面上的 Android 入口链接。应用商店上架不属于该途径。",
      },
    ],
  },
  download: {
    title: "下载",
    items: [
      {
        q: "有 App Store 或 Google Play 上架吗？",
        a: "Android 使用下载页面上的下载途径。iPhone 使用 Safari，然后选择“添加到主屏幕”。应用商店上架不属于该途径。",
      },
      {
        q: "一定要安装应用吗？",
        a: "不必。网页版可在 Windows、Mac、Linux、iOS 和 Android 的浏览器中运行。",
      },
    ],
  },
  payments: {
    title: "支付",
    items: [
      {
        q: "E9WIN 的支付方式如何运作？",
        a: "收银台使用已公布的标识：Maybank、CIMB、Public Bank、RHB、Hong Leong、AmBank、BSN、Touch 'n Go、Boost、GrabPay、ShopeePay 和 USDT，以及即时转账、电信 PIN 和银行转账。你所选择方式的限额会显示在该页面上。",
      },
      {
        q: "存款没有到账怎么办？",
        a: "对照收据核对金额和参考编号，然后通过 WhatsApp 向客服发送用户名。不要向聊天中收到的账号付款。",
      },
    ],
  },
  withdrawals: {
    title: "提款",
    items: [
      {
        q: "提款需要多久？",
        a: "时间取决于方式和任何账户检查。请在提款记录中确认状态。",
      },
      {
        q: "提款可以转到谁的名字？",
        a: "请使用与个人资料相同姓名的银行或电子钱包。好友额度是玩家账户之间的转账，不是银行提款。",
      },
    ],
  },
  mobile: {
    title: "手机访问",
    items: [
      {
        q: "一定要安装应用吗？",
        a: "不必。网页大厅在浏览器中运行。Android 可使用入口下载。iPhone 使用 Safari，然后选择“添加到主屏幕”。",
      },
    ],
  },
  security: {
    title: "安全",
    items: [
      {
        q: "应该把密码发给客服吗？",
        a: "不应该。客服凭用户名即可处理。只按该次收银台显示的指示付款。",
      },
    ],
  },
  promotions: {
    title: "优惠活动",
    items: [
      {
        q: "在哪里查看 E9WIN 优惠？",
        a: "优惠页面列出活动名称。现行金额、流水和资格在账户卡片上。",
      },
      {
        q: "如何领取优惠？",
        a: "在大厅打开该优惠，并按卡片上的参加方式操作。部分优惠会先要求已验证的电话号码和银行资料。",
      },
    ],
  },
  agent: {
    title: "代理",
    items: [
      {
        q: "如何成为代理？",
        a: "联系客服并询问代理申请。佣金细节通过该流程提供。",
      },
      {
        q: "推荐链接在哪里？",
        a: "登录后打开个人资料，在分享下面查找。E9WIN 让会员在那里复制推荐链接。",
      },
    ],
  },
  slots: {
    title: "老虎机",
    items: [
      {
        q: "本站有哪些老虎机工作室的封面？",
        a: "Pragmatic Play 和 Lucky365。Playtech 在大厅说明中有名称，但这里没有封面的老虎机不会作为图片公布。",
      },
      {
        q: "赔付表在哪里？",
        a: "各游戏规则和任何 RTP 数字属于大厅内的赔付表。",
      },
    ],
  },
  live: {
    title: "真人娱乐场",
    items: [
      {
        q: "哪些真人游戏有封面？",
        a: "目录中的 Evolution 和 Playtech 游戏，包括百家乐、轮盘、骰宝和龙虎。",
      },
      {
        q: "VIP Baccarat 是会员计划吗？",
        a: "不是。VIP Baccarat 是 Playtech 的一张赌桌。会员说明在 VIP 页面，没有现金数字。",
      },
    ],
  },
  sports: {
    title: "体育",
    items: [
      {
        q: "为什么体育页面没有赔率？",
        a: "现行体育盘口和价格在登录后的体育投注内显示。本站有现场赛马封面。足球（包括世界杯和英超）有名称。",
      },
    ],
  },
  esports: {
    title: "电竞",
    items: [
      {
        q: "电竞赛程在哪里？",
        a: "现行电竞盘口在登录后随体育投注打开。",
      },
    ],
  },
  lottery: {
    title: "4D",
    items: [
      {
        q: "列出了哪些 4D 游戏？",
        a: "列出的游戏是 Magnum、Da Ma Cai、Toto 和 Singapore。选号及最新开奖结果会显示在游戏大厅内。",
      },
    ],
  },
  fishing: {
    title: "捕鱼",
    items: [
      {
        q: "为什么没有捕鱼缩略图列表？",
        a: "捕鱼列表在登录后于大厅打开。Great Blue 和 Dolphin Reef 是老虎机。",
      },
    ],
  },
  vip: {
    title: "VIP",
    items: [
      {
        q: "E9WIN VIP 如何运作？",
        a: "E9WIN VIP 是在游戏大厅奖励区查看的会员标识。等级、积分和现金数字会显示在该账户通知上。",
      },
    ],
  },
  responsible: {
    title: "理性娱乐",
    items: [
      {
        q: "谁可以游玩？",
        a: "18 岁及以上的成年人。存款前先设定预算。",
      },
      {
        q: "本站可以开启存款限额吗？",
        a: "不能。存款限额和自我排除在大厅提供时，被说明为账户工具。",
      },
    ],
  },
  support: {
    title: "客服",
    items: [
      {
        q: "如何联系 E9WIN 客服？",
        a: "WhatsApp 和 Facebook 页面是已公布的公开渠道。玩家登录后，大厅也会指引使用即时聊天。",
      },
      {
        q: "有公布电子邮箱或电话号码吗？",
        a: "请使用 WhatsApp 或 Facebook 页面。登录后可使用大厅内聊天。没有列出公开电子邮箱或电话号码。",
      },
    ],
  },
};
export function presentFaq(locale: Locale): FaqGroup[] {
  if (locale === "en") return faqGroups;
  return faqGroups.map((group) => {
    const copy = zhFaq[group.id];
    if (!copy) return group;
    return {
      id: group.id,
      title: copy.title,
      items: group.items.map((item, index) => copy.items[index] ?? item),
    };
  });
}

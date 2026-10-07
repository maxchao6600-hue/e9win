import type { CategoryPageCopy } from "@/lib/categoryCopy";
import type { GameCategory } from "@/lib/games";
import type { Locale } from "@/lib/i18n";
import { categoryCopy } from "@/lib/categoryCopy";

export const zhCategoryCopy: Record<GameCategory, CategoryPageCopy> = {
  slots: {
    lead: "E9WIN 老虎机把公开老虎机目录放在一起，让你在打开大厅之前就能认出一款游戏。每一张缩图都是该目录里的真实封面。",
    sections: [
      {
        title: "这里可以浏览什么",
        paragraphs: [
          "这一页显示本站保存的 Pragmatic Play 和 Lucky365 老虎机。打开游戏仍在玩家大厅里进行，赔付表和投注范围也在那里显示。",
          "更广的大厅说明里，老虎机工作室也包括 Playtech。如果某款 Playtech 老虎机不在缩图格子里，这个网站就没有把它作为封面发布。",
        ],
      },
      {
        title: "老虎机如何呈现",
        paragraphs: [
          "封面是方形画面。标题和工作室写在图片下方，因此画面上印着的名称不是唯一标签。",
          "规则不在这里重写。波动、功能和上限属于该游戏自己的赔付表。",
        ],
        list: [
          "已经知道名称时，在游戏页使用搜索。",
          "只想看老虎机格子时，使用这个分类。",
          "第一次旋转前，先在游戏里查看投注范围。",
        ],
      },
      {
        title: "如何选择老虎机",
        paragraphs: [
          "先看封面下方的标题和工作室。如果已经知道名称，在游戏页搜索，不必滚动格子。",
          "投注范围和规则在大厅里的赔付表上。这个网站不转载这些内容，也不为任何游戏发布 RTP 或波动数字。",
        ],
        note: "RTP 是工作室印在自己赔付表上的长期回报。波动描述结果感觉起来可以有多不均匀。这两个数字都不保存在 E9WIN 公开目录里，所以这里都不引用。",
      },
      {
        title: "封面实际包含什么",
        paragraphs: [
          "公开老虎机格子是 Pragmatic Play 和 Lucky365 的画面。Playtech 在大厅说明里有名称。这个网站上没有封面的 Playtech 老虎机，不视为已发布的画面。",
          "Great Blue 和 Dolphin Reef 这类海洋主题封面是 Lucky365 老虎机。它们不是捕鱼游戏。",
        ],
      },
      {
        title: "手机老虎机",
        paragraphs: [
          "同样的封面可以在手机浏览器里打开。登录后，投注控制和赔付表在游戏里面，竖屏或横屏视该游戏而定。",
          "iPhone 可以使用 Safari 的加入主屏幕。Android 可以使用下载页上的门户下载。老虎机没有应用商店上架。",
        ],
      },
      {
        title: "开始之前",
        paragraphs: [
          "优惠可能限制哪些老虎机计入。请阅读账户里的那张卡片。这一页不重述奖金数字。",
          "打开收银台之前，先决定你可以失去的金额。存款限额若由大厅提供，是理性娱乐页说明的账户工具。",
        ],
      },
      {
        title: "如果老虎机打不开",
        paragraphs: [
          "这个网站上的封面不是正在运行的游戏。请通过大厅登录，再从那里启动该游戏。如果登录后找不到名称，这一页无法确认它在目录里。",
        ],
        steps: [
          "确认你在老虎机分类，而不是捕鱼。",
          "按卡片上的准确名称搜索。",
          "第一次投注前先打开赔付表。",
          "如果客户端无法加载，用较新的浏览器重新加载，并向 WhatsApp 客服提供游戏名称，不要提供密码。",
        ],
      },
    ],
    faq: [
      { q: "这一页哪些工作室有封面？", a: "Pragmatic Play 和 Lucky365。其他工作室可能在大厅里存在，但这里没有发布封面。" },
      { q: "我可以在这个网站阅读赔付表吗？", a: "不可以。赔付表和投注范围随游戏在大厅里打开。" },
      { q: "这些是仅有的老虎机吗？", a: "它们是公开目录里有画面的老虎机。登录后，大厅可以显示更多。" },
      { q: "E9WIN 会发布 RTP 吗？", a: "各游戏的规则以及任何 RTP 数字都属于大厅里的赔付表。" },
      { q: "Great Blue 是捕鱼游戏吗？", a: "不是。在这个目录里，它是一款 Lucky365 老虎机。" },
    ],
    links: [
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/guides/slots-guide", label: "E9WIN 老虎机指南" },
      { href: "/promotions", label: "优惠" },
      { href: "/deposit", label: "存款" },
    ],
  },
  "live-casino": {
    lead: "E9WIN 真人娱乐场显示已发布封面的真人桌：来自 Evolution 和 Playtech 的百家乐、轮盘、骰宝、龙虎及相关游戏。",
    sections: [
      {
        title: "封面是什么",
        paragraphs: [
          "每张卡片都是一款真人游戏，通常显示该游戏自己画面上使用的主持人。这个格子汇集这些游戏，不是实体赌桌的照片。",
          "二十一点在分类说明里有名称。如果格子里没有二十一点封面，不要假定这里发布了某一张特定的桌子。",
        ],
      },
      {
        title: "真人桌和老虎机有何不同",
        paragraphs: [
          "老虎机在游戏客户端结算。真人桌跟随工作室正在发牌的那一局。投注限额和边注在那张桌子上，百家乐、轮盘和骰宝之间可以不同。",
          "目录里的 VIP Baccarat 是 Playtech 的桌名。它和 VIP会员不是同一回事。",
        ],
      },
      {
        title: "如何进入一张桌子",
        paragraphs: [
          "选择一张封面，然后在大厅里继续。直播画面、筹码面额和该局计时都属于桌子，不属于这一页。",
        ],
        list: [
          "在期待入座或投注被接受之前，先登录。",
          "确认投注前，先阅读桌限。",
          "如果要在老虎机和真人桌之间选择，请使用游戏指南。",
        ],
      },
      {
        title: "可以从封面上认出的桌子",
        paragraphs: [
          "目录里的 Evolution 封面包括 Lightning Baccarat、XXXtreme Lightning Baccarat、Dragon Tiger、Super Sic Bo、Bac Bo、Andar Bahar、Mega Ball、Crazy Coin Flip、Cash or Crash、Fan Tan、Gonzo's Treasure Map 和 Gold Vault Roulette。",
          "Playtech 封面包括 Baccarat、VIP Baccarat、Roulette、Quantum Roulette、Casino Hold'em、Casino Stud Poker、Teen Patti 和 Big Bad Wolf。二十一点在分类说明里有名称。如果没有二十一点封面，这里就没有发布某一张特定的二十一点桌。",
        ],
      },
      {
        title: "如何使用一局真人游戏",
        paragraphs: [
          "你加入工作室正在发牌的桌子，阅读该画面上的限额，并在该局结束前下注。结果来自那张桌子，不是这个网站上印出的数字。",
          "边注和筹码大小因游戏而异。请在你打开的那张桌子上比较，不要拿另一张百家乐或轮盘封面来对照。",
        ],
      },
      {
        title: "手机真人娱乐场",
        paragraphs: [
          "同样的封面可在手机大厅里使用。直播需要稳定的网络。如果画面卡住，先离开桌子，不要假定投注已被接受，然后重新加载并查看未结束的那一局。",
        ],
      },
      {
        title: "如果桌子和封面不符",
        paragraphs: [
          "封面是目录画面。直播画面是当前的桌子。如果登录后大厅里没有封面上的名称，不要猜测另一张替代的桌子。",
        ],
      },
    ],
    faq: [
      { q: "格子里有哪些真人工作室？", a: "目录里有封面的 Evolution 和 Playtech 游戏。" },
      { q: "VIP Baccarat 是会员计划吗？", a: "不是。VIP Baccarat 是桌名。会员计划在 VIP 页说明，其中没有未公布的现金数字。" },
      { q: "桌限印在这里吗？", a: "桌限在登录后的真人桌上显示。" },
      { q: "二十一点在封面格子里吗？", a: "它在分类说明里有名称。只有目录里有该游戏的画面时，才会发布封面。" },
    ],
    links: [
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/guides/live-casino-guide", label: "E9WIN 真人娱乐场指南" },
      { href: "/vip", label: "E9WIN VIP" },
      { href: "/guides/how-to-login", label: "如何登录" },
    ],
  },
  sports: {
    lead: "E9WIN 体育包含体育博彩和现场赛马。足球（包括世界杯和英超）已列入体育博彩。登录后即可查看当前盘口和价格。",
    sections: [
      {
        title: "已发布的内容",
        paragraphs: [
          "现场赛马是目录里有画面的体育项目。其他盘口（包括足球）在说明中列为可玩，登录后即可查看。",
          "这个网站不保存赔率、比分或开赛时间。如果某个数字不在体育博彩画面上，这一页就不能把它当成可以重复的事实。",
        ],
      },
      {
        title: "如何使用体育博彩",
        paragraphs: [
          "登录，打开体育，阅读大厅当天显示的盘口列表。盘口名称以及投注是否仍开放，都在那里决定。",
        ],
        list: [
          "赛马是你可以从缩图预览的赛事类型。",
          "在公开网站上，足球盘口有名称，但没有赛程列表。",
          "电竞是和体育博彩放在一起的另一个分类。",
        ],
      },
      {
        title: "理性投注",
        paragraphs: [
          "体育博彩可以让盘口在很长一段时间里保持开放。打开投注单之前先决定投注额。存款限额若由账户提供，在理性娱乐页有说明。",
        ],
      },
      {
        title: "什么是盘口",
        paragraphs: [
          "盘口是体育博彩针对一场赛事提出的问题。该盘口的价格就是赔率。这个网站既不保存赛程，也不保存价格，所以无法告诉你今天开放什么。",
          "足球有列名，包括世界杯和英超。这是对体育博彩的说明，不是比赛列表。",
        ],
      },
      {
        title: "目录里的赛马",
        paragraphs: [
          "现场赛马是有画面的体育项目，目录里署名为 RCB。封面让你认出这个产品。赛事列表和任何价格都在登录后的体育博彩上。",
        ],
      },
      {
        title: "手机体育博彩",
        paragraphs: [
          "使用和大厅其他部分相同的手机路径：手机网页、iPhone 主屏幕图标，或 Android 门户下载。确认投注前，在你正在使用的设备上阅读投注单。",
        ],
      },
      {
        title: "电竞是另一条路径",
        paragraphs: [
          "电竞和体育博彩放在一起，但有自己的页面。这里没有封面，也没有赛程列表。当你要的是电竞，而不是赛马或已列名的足球赛事时，打开那个分类。",
        ],
      },
    ],
    faq: [
      { q: "为什么这一页没有赔率？", a: "当前盘口和价格在登录后的体育博彩里显示。" },
      { q: "赛马是唯一有封面的体育产品吗？", a: "是的。它是公开目录里的体育画面。" },
      { q: "哪些足球赛事有列名？", a: "公开说明列名世界杯和英超。它不列出赛程。" },
      { q: "我在哪里阅读价格？", a: "在登录后的体育博彩上。该画面上的价格就是大厅当时提供的价格。" },
    ],
    links: [
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/games/esports", label: "E9WIN 电竞" },
      { href: "/guides/sports-guide", label: "E9WIN 体育指南" },
      { href: "/responsible-gaming", label: "理性娱乐" },
      { href: "/download", label: "手机访问" },
    ],
  },
  lottery: {
    lead: "E9WIN 4D 列名四款游戏：Magnum、Da Ma Cai、Toto 和 Singapore，也就是万能、大马彩、多多和新加坡。选号和开奖信息在大厅里打开。",
    sections: [
      {
        title: "这里的 4D 是什么意思",
        paragraphs: [
          "4D 是数字游戏。你选择数字，开奖决定结果。公开网站列名上面四款游戏，不转载它们的官方成绩表。",
        ],
      },
      {
        title: "你在大厅里做什么",
        paragraphs: [
          "登录，打开彩票，然后选择游戏。投注类型、投注额和开奖时间都在那个画面上。不要依赖你从旧投注单记住的数字。",
        ],
        list: [
          "Magnum、Da Ma Cai、Toto 和 Singapore，也就是万能、大马彩、多多和新加坡，是已列名的游戏。",
          "成绩不会转载到这个网站上。",
          "如果有适用的优惠卡片，会写明彩票是否计入。",
        ],
      },
      {
        title: "这和老虎机有何不同",
        paragraphs: [
          "老虎机使用游戏客户端和赔付表。4D 使用选号和开奖。它们是分开的分类，也有各自的指南。",
        ],
      },
      {
        title: "四款已列名的游戏",
        paragraphs: [
          "Magnum、Da Ma Cai、Toto 和 Singapore，也就是万能、大马彩、多多和新加坡，是随 E9WIN 发布的 4D 名称。在大厅里选择其中一款。这一页不对它们排名，也不发布时刻表。",
        ],
      },
      {
        title: "这一页不会显示什么",
        paragraphs: [
          "开奖结果、中奖号码、奖金表和赔率不保存在这里。如果需要结果，请在大厅里阅读，或从经营者处阅读，不要从聊天里的截图阅读。",
        ],
        note: "投注类型和投注额在登录后的 4D 画面上选择。它们不会在这个网站上转载成一张通用表格。",
      },
      {
        title: "手机 4D",
        paragraphs: [
          "选号使用和电脑相同的大厅。在手机上，确认前先核对游戏名称和数字。主屏幕图标或 Android 门户只是进入路径，不是另一套开奖。",
        ],
      },
      {
        title: "如果找不到 4D",
        paragraphs: [
          "登录后进入彩票区域。这个主题的公开网址是 /games/4d。较早的 /games/lottery 地址显示同一页，并使用 4D 的规范网址。",
        ],
      },
    ],
    faq: [
      { q: "我可以在这里看到今天的开奖吗？", a: "开奖详情会显示在你所选游戏的游戏大厅里。" },
      { q: "哪些游戏有列名？", a: "Magnum、Da Ma Cai、Toto 和 Singapore，也就是万能、大马彩、多多和新加坡。" },
      { q: "有列出派彩表吗？", a: "投注额和投注类型在你打开的那款游戏的大厅画面上。" },
      { q: "/games/lottery 是另一个产品吗？", a: "不是。它是这个 4D 页面的较早地址。规范网址是 /games/4d。" },
    ],
    links: [
      { href: "/guides/lottery-guide", label: "E9WIN 4D 指南" },
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/guides/how-to-register", label: "如何注册" },
    ],
  },
  fishing: {
    lead: "E9WIN 捕鱼是游戏大厅里的街机分类，与老虎机、真人桌并列。登录后即可查看当前列表。",
    sections: [
      {
        title: "为什么没有游戏格子",
        paragraphs: [
          "Great Blue 或 Dolphin Reef 这类老虎机封面是老虎机，不是捕鱼游戏。它们不用作捕鱼画面。",
          "捕鱼列表登录后即可查看。规则和投注在每一款游戏上。",
        ],
      },
      {
        title: "可以预期什么",
        paragraphs: [
          "街机捕鱼在共享或单人场景里进行，射击会消耗额度。具体的炮、房间和费用都在该游戏里面，这里不总结成一套通用规则。",
        ],
        list: [
          "打开大厅并选择捕鱼。",
          "开炮前先阅读投注。",
          "不要把海洋主题的老虎机当成捕鱼游戏。",
        ],
      },
      {
        title: "手机",
        paragraphs: [
          "使用和大厅其他部分相同的进入路径：手机网页、iPhone 主屏幕图标，或 Android 门户下载。捕鱼没有单独的应用。",
        ],
      },
      {
        title: "捕鱼玩法有何不同",
        paragraphs: [
          "捕鱼游戏在场景里用射击消耗额度。房间、炮和每一发的费用都属于该游戏。这一页不发布共用价目，因为这些数字不在公开目录里。",
        ],
      },
      {
        title: "登录后如何浏览",
        paragraphs: [
          "注册或登录，打开大厅，然后选择捕鱼。开炮前，先阅读你打开的那款游戏上的投注。如果没有这个分类，用用户名询问客服，不要从其他网站下载游戏文件。",
        ],
        steps: [
          "忽略有水、鱼或海豚的老虎机封面。那些游戏留在老虎机分类。",
          "只从大厅菜单打开捕鱼。",
          "查看该游戏显示的额度费用。",
          "你留出的金额用完就停止。",
        ],
      },
      {
        title: "为什么这一页看起来没有封面",
        paragraphs: [
          "空的缩图格子就是准确的状态。编造捕鱼画面会描述这个网站无法展示的游戏。分类图片上的登录画面说明列表在大厅里打开。",
        ],
      },
    ],
    faq: [
      { q: "捕鱼缩图在哪里？", a: "捕鱼列表在登录后的大厅里打开。" },
      { q: "Great Blue 是捕鱼游戏吗？", a: "不是。Great Blue 是一款 Lucky365 老虎机。" },
      { q: "Dolphin Reef 是捕鱼吗？", a: "不是。Dolphin Reef 也是一款 Lucky365 老虎机。" },
      { q: "我可以在这里看到房间价格吗？", a: "每一发的费用显示在捕鱼游戏里面。" },
    ],
    links: [
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/games/slots", label: "E9WIN 老虎机" },
      { href: "/guides/fishing-guide", label: "E9WIN 捕鱼指南" },
      { href: "/download", label: "打开大厅" },
    ],
  },
  esports: {
    lead: "E9WIN 电竞与体育博彩放在一起。登录后即可查看当前盘口。",
    sections: [
      {
        title: "已发布的内容",
        paragraphs: [
          "这个分类的作用是让你把电竞和足球、赛马分开查找。比赛本身在登录后的大厅里。",
        ],
      },
      {
        title: "它和体育的关系",
        paragraphs: [
          "赛马画面和已经发布的足球名称，请用体育页。当你要的是电竞路径及其限制时，使用这一页：这里不印赔率。",
        ],
        list: [
          "登录，并从体育博彩区域打开电竞。",
          "在该画面上阅读盘口是否仍开放。",
          "忽略你没有在大厅里看到的任何比分。",
        ],
      },
      {
        title: "这里找不到什么",
        paragraphs: [
          "队伍、赛程、比分和赔率不保存在这个网站上。社交媒体帖子或聊天消息不是 E9WIN 盘口。",
        ],
      },
      {
        title: "如何打开电竞",
        paragraphs: [
          "登录后使用体育博彩，并选择电竞路径。手机网页、iPhone 主屏幕图标和 Android 门户都进入同一个大厅。它们都不会给这一页加上赛程列表。",
        ],
        steps: [
          "建立或打开你将用来投注的账户。",
          "在体育博彩里打开电竞，而不是赛马封面。",
          "阅读盘口名称，以及是否仍可下注。",
          "离开不在该画面上的盘口。",
        ],
      },
      {
        title: "让这一段保持在范围内",
        paragraphs: [
          "电竞盘口可以在一整场比赛期间保持开放。打开投注单之前先决定投注额。理性娱乐页说明暂停，以及大厅可能提供的账户工具。",
        ],
      },
    ],
    faq: [
      { q: "列出了哪些电竞项目？", a: "大厅显示正在开放的盘口。这一页保留文字说明。" },
      { q: "这一页显示赔率吗？", a: "价格在登录后的体育博彩画面上。" },
      { q: "电竞和体育是同一页吗？", a: "不是。体育有赛马封面和已列名的足球赛事。电竞是分开的盘口路径。" },
      { q: "我可以相信聊天里的比分吗？", a: "只有你已登录的体育博彩画面，才能显示 E9WIN 正在提供的盘口。" },
    ],
    links: [
      { href: "/games", label: "E9WIN 游戏" },
      { href: "/games/sports", label: "E9WIN 体育" },
      { href: "/guides/esports-guide", label: "E9WIN 电竞指南" },
      { href: "/responsible-gaming", label: "理性娱乐" },
    ],
  },
};

export function presentCategory(slug: GameCategory, locale: Locale): CategoryPageCopy {
  return locale === "zh" ? zhCategoryCopy[slug] : categoryCopy[slug];
}

export const zhCategoryDescriptions: Record<GameCategory, string> = {
  slots: "E9WIN 老虎机汇集 Pragmatic Play、Playtech 和 Lucky365 的公开老虎机目录。打开封面后，在大厅里阅读赔付表。",
  "live-casino": "E9WIN 真人娱乐场列出 Evolution 和 Playtech 的百家乐、轮盘、骰宝、龙虎和游戏节目。",
  sports: "E9WIN 体育涵盖体育博彩和现场赛马。足球已列名，包括世界杯和英超。登录后即可查看当前盘口。",
  lottery: "E9WIN 4D 列名 Magnum、Da Ma Cai、Toto 和 Singapore，也就是万能、大马彩、多多和新加坡。选号和开奖详情会显示在游戏大厅内。",
  fishing: "E9WIN 捕鱼是游戏大厅里的街机捕鱼分类。登录后即可查看当前游戏列表。",
  esports: "E9WIN 电竞与体育博彩放在一起。登录后即可在游戏大厅查看当前盘口。",
};

export const zhCategoryH1: Record<GameCategory, string> = {
  slots: "E9WIN 老虎机",
  "live-casino": "E9WIN 真人娱乐场",
  sports: "E9WIN 体育",
  lottery: "E9WIN 4D",
  fishing: "E9WIN 捕鱼",
  esports: "E9WIN 电竞",
};

export const zhCategoryTitles: Record<GameCategory, string> = {
  slots: "E9WIN 老虎机 | 电子游戏与游戏目录",
  "live-casino": "E9WIN 真人娱乐场 | 百家乐、轮盘与真人桌",
  sports: "E9WIN 体育 | 体育博彩",
  lottery: "E9WIN 4D | 万能、大马彩、多多与新加坡",
  fishing: "E9WIN 捕鱼 | 大厅里的捕鱼游戏",
  esports: "E9WIN 电竞 | 大厅里的电竞盘口",
};

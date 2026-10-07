import type { Guide } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

type ZhGuide = { title: string; excerpt: string; category: string; steps: string[]; related: string[] };

export const zhGuides: Record<string, ZhGuide> = {
  "how-to-register": {
    title: "E9WIN 注册指南",
    excerpt: "按注册表格要求的资料建立 E9WIN 账户。",
    category: "账户",
    steps: [
      "打开注册，然后进入 E9WIN 玩家大厅继续。",
      "填写姓名、手机号码、电邮、出生日期、用户名和密码。",
      "资料要和之后提款的银行或电子钱包姓名一致。",
      "阅读条款与隐私说明，再提交表格。",
      "第一次提款前，完成大厅要求的验证。",
    ],
    related: ["注册", "登录指南"],
  },
  "how-to-login": {
    title: "E9WIN 登录指南",
    excerpt: "使用注册时的用户名和密码登录。",
    category: "账户",
    steps: [
      "打开登录，输入你建立的用户名和密码。",
      "如果密码被拒绝，使用玩家大厅里的找回步骤。",
      "手机上也可以打开手机网页大厅，或使用已加入主屏幕的入口。",
      "这个说明网站不保存登录状态。游戏在玩家大厅里继续。",
    ],
    related: ["登录", "下载"],
  },
  "how-to-download": {
    title: "E9WIN 下载指南",
    excerpt: "Android 使用玩家入口，iPhone 可加入主屏幕，也可以继续用手机网页。",
    category: "下载",
    steps: [
      "Android：使用下载页上的入口。它会打开玩家门户。",
      "iPhone 和 iPad：用 Safari 打开手机网站，然后选择分享并加入主屏幕。",
      "任何手机都可以在浏览器里打开网页大厅，不必安装。",
      "保持系统更新，并且只使用下载页上的链接。",
    ],
    related: ["下载页", "E9WIN 手机指南"],
  },
  "deposit-guide": {
    title: "E9WIN 存款指南",
    excerpt: "存款可通过银行转账、电子钱包、电信 PIN 或 USDT 开始。",
    category: "支付",
    steps: [
      "登录后打开收银台。",
      "选择即时转账、电子钱包、银行转账、电信 PIN 或加密货币。",
      "按画面上的户名、参考号或钱包地址操作。",
      "等待收银台入账。所需时间视方式而定。",
      "如果没有入账，把收据和用户名发给客服。",
    ],
    related: ["存款", "联系客服"],
  },
  "withdrawal-guide": {
    title: "E9WIN 提款指南",
    excerpt: "提款到与账户姓名一致的银行或电子钱包。",
    category: "支付",
    steps: [
      "登录后打开提款。",
      "选择与账户姓名一致的银行转账或电子钱包。",
      "金额要在收银台显示的范围内。",
      "确认申请。处理时间不固定，视方式和审查而定。",
      "在账户通知里查看结果。",
    ],
    related: ["提款", "理性娱乐"],
  },
  "games-guide": {
    title: "E9WIN 游戏指南",
    excerpt: "查找老虎机、真人桌、体育、4D、捕鱼和电竞。",
    category: "游戏",
    steps: [
      "打开游戏，按分类筛选或搜索名称。",
      "页面上的老虎机和真人桌来自公开目录。",
      "体育、4D、捕鱼和电竞在玩家大厅里打开。",
      "规则和投注范围显示在该游戏画面上。",
    ],
    related: ["游戏", "老虎机"],
  },
  "mobile-guide": {
    title: "E9WIN 手机指南",
    excerpt: "可在浏览器、主屏幕图标或 Android 入口里玩。",
    category: "下载",
    steps: [
      "手机网页不必安装，重新加载就会拿到当前大厅。",
      "iPhone 可用加入主屏幕，让大厅像图标一样打开。",
      "Android 可使用下载页上的入口。",
      "使用较新的 Chrome 或 Safari，并保持网络稳定。",
    ],
    related: ["游戏大厅", "下载", "登录指南"],
  },
  "account-guide": {
    title: "E9WIN 账户指南",
    excerpt: "把登录资料、银行资料和验证放在同一个账户里。",
    category: "账户",
    steps: [
      "只使用一个账户。共用或重复账户可能影响提款。",
      "大厅要求时，先补上电话和银行资料，再申请提款。",
      "推荐链接若有提供，会在个人资料的分享位置。",
      "代理或下线设置请看代理页，并联系客服。",
    ],
    related: ["代理", "联系客服"],
  },
  "slots-guide": {
    title: "E9WIN 老虎机指南",
    excerpt: "先看公开封面，再在大厅里阅读该游戏的赔付表。",
    category: "老虎机",
    steps: [
      "打开老虎机分类，查看封面。封面下的名称就是目录标题。",
      "这个网站有封面的工作室是 Pragmatic Play 和 Lucky365。",
      "如果已经知道名称，可以在游戏页搜索。",
      "登录后打开游戏。投注范围和赔付表在那个画面上。",
      "如果优惠写明适用的老虎机，以那张卡片为准。这里不重复奖金数字。",
    ],
    related: ["E9WIN 老虎机", "E9WIN 游戏", "优惠"],
  },
  "live-casino-guide": {
    title: "E9WIN 真人娱乐场指南",
    excerpt: "公开封面来自 Evolution 和 Playtech。桌限和当前局在桌面上。",
    category: "真人娱乐场",
    steps: [
      "打开真人娱乐场，选择百家乐、轮盘或骰宝等封面。",
      "准备下注前先登录。",
      "阅读桌限。桌限在桌面上，不抄到这个网站。",
      "VIP Baccarat 是 Playtech 桌名。VIP会员是另一回事。",
      "当这一局不再是你计划的投注时，离开桌子。",
    ],
    related: ["游戏大厅", "真人娱乐场", "VIP会员", "登录指南"],
  },
  "sports-guide": {
    title: "E9WIN 体育指南",
    excerpt: "赛马有封面。足球有名称。当前价格在大厅里。",
    category: "体育",
    steps: [
      "打开体育，可以看到目录里的赛马画面。",
      "足球说明提到世界杯和英超。这里不列出赛程。",
      "登录后阅读当天体育博彩提供的盘口。",
      "聊天或截图里的数字不是当前价格。",
      "电竞是体育旁边的另一个分类。",
    ],
    related: ["游戏大厅", "体育", "电竞", "理性娱乐"],
  },
  "lottery-guide": {
    title: "E9WIN 4D 指南",
    excerpt: "已列名的 4D 是万能、大马彩、多多和新加坡。开奖留在大厅画面。",
    category: "4D",
    steps: [
      "打开 4D，选择四个已列名的游戏之一。",
      "在大厅画面输入号码。这个网站不保存投注单。",
      "开奖时间看那个画面。这里不印时刻表。",
      "如果之后要问客服，把确认记录留在账户里。",
      "不要用海洋主题的老虎机或真人游戏节目代替 4D。",
    ],
    related: ["4D", "注册指南", "全部游戏"],
  },
  "fishing-guide": {
    title: "E9WIN 捕鱼指南",
    excerpt: "捕鱼列表在登录后的大厅里打开。",
    category: "捕鱼",
    steps: [
      "不要把 Great Blue 或 Dolphin Reef 当成捕鱼。它们是老虎机。",
      "登录后在大厅打开捕鱼分类。",
      "开始前先看该游戏的投注。",
      "手机上使用手机网页或下载页的入口。",
    ],
    related: ["游戏大厅", "捕鱼", "老虎机", "下载"],
  },
  "esports-guide": {
    title: "E9WIN 电竞指南",
    excerpt: "电竞盘口和体育博彩放在一起，登录后打开。",
    category: "电竞",
    steps: [
      "打开电竞分类，确认它和赛马不是同一页。",
      "登录后在体育博彩区域查看正在开放的盘口。",
      "阅读盘口名称，以及该画面是否仍可下注。",
      "如果要看足球或赛马，改去体育页。",
    ],
    related: ["游戏大厅", "电竞", "体育", "E9WIN 体育指南"],
  },
  "promotions-guide": {
    title: "E9WIN 优惠指南",
    excerpt: "这里公布活动名称。金额、流水和日期在账户卡片上。",
    category: "优惠",
    steps: [
      "先看本站的活动名称，再打开账户里对应的卡片。",
      "查看适用游戏、流水和资格说明。",
      "已结束的公开档期不是当前比例。",
      "卡片显示你要接受的条件后，再选择参加。",
      "如果卡片提到本站没有写到的步骤，询问客服。",
    ],
    related: ["优惠", "存款指南", "账户指南"],
  },
  "security-guide": {
    title: "E9WIN 安全指南",
    excerpt: "只用一个登录，只从下载页进入，不要把密码发给客服。",
    category: "安全",
    steps: [
      "建立一个账户，用户名只要能让客服认出你即可。",
      "不要在 WhatsApp 或 Facebook 发送密码。客服用用户名就能处理。",
      "Android 只从下载页的门户链接进入。不要改用别处的安装文件。",
      "只按当时收银台的指示付款。聊天里的账号不是存款账户。",
      "提款到与个人资料同名的银行或电子钱包。",
    ],
    related: ["账户指南", "下载", "联系客服"],
  },
  "responsible-gaming-guide": {
    title: "E9WIN 理性娱乐指南",
    excerpt: "存款前先决定预算。账户工具以大厅实际提供的为准。",
    category: "理性娱乐",
    steps: [
      "把游戏当成娱乐，只用可以失去的钱。",
      "打开收银台之前先定好金额。",
      "金额用完就停止。不要在同一段时间再存一笔想赢回来。",
      "如果大厅提供存款限额或自我排除，那些控制在账户里，不在这一页。",
      "可以发 WhatsApp 询问账户限制。如果游戏不再是娱乐，请使用你信任的辅导服务。",
    ],
    related: ["理性娱乐", "存款", "联系客服"],
  },
  "how-to-start": {
    title: "如何开始",
    excerpt: "注册、进入大厅、选择分类，并在第一次下注前阅读投注画面。",
    category: "游戏",
    steps: [
      "建立一个账户，姓名要和之后使用的银行或电子钱包一致。",
      "在玩家大厅登录。这个网站不保存登录状态。",
      "打开游戏，选择老虎机、真人娱乐场、体育、4D、捕鱼或电竞。",
      "在那个画面阅读赔付表、桌限或盘口。",
      "先决定金额，再按该次收银台的指示存款。",
    ],
    related: ["注册指南", "游戏", "存款"],
  },
  "android-guide": {
    title: "Android 访问",
    excerpt: "从下载页打开玩家门户。路径里没有 Google Play 上架。",
    category: "下载",
    steps: [
      "在下载页使用 Android 入口。它会打开玩家门户。",
      "只安装该门户当次给出的文件。不要使用搜索结果或聊天里的 APK。",
      "打开大厅，用注册的用户名登录。",
      "如果门户链接打不开，发 WhatsApp 给客服。不要改去别的下载站。",
    ],
    related: ["下载", "iPhone 访问", "手机指南"],
  },
  "iphone-guide": {
    title: "iPhone 访问",
    excerpt: "使用 Safari，然后加入主屏幕。这里没有 App Store 上架说明。",
    category: "下载",
    steps: [
      "用 Safari 打开 E9WIN。iPhone 上的其他浏览器可能没有同样的加入主屏幕步骤。",
      "点分享，再点加入主屏幕，并确认图标。",
      "打开图标后登录。这个快捷方式是网页大厅，不是另外一个安装包。",
      "也可以留在 Safari 分页，不加入图标。",
    ],
    related: ["下载", "Android 访问", "登录指南"],
  },
  "payment-guide": {
    title: "E9WIN 支付方式指南",
    excerpt: "选择你能控制的账户方式，并按该次画面上的指示操作。",
    category: "支付",
    steps: [
      "登录后打开收银台。公开标志包括银行、电子钱包、电信 PIN 和 USDT。",
      "银行或电子钱包请使用与个人资料同名的账户。",
      "复制该次显示的账号、参考号、钱包地址或 PIN 指示。",
      "好友转账是玩家账户之间的余额转移，不是银行提款。",
      "保留收据直到钱包更新。提款时再看提款指南。",
    ],
    related: ["支付方式", "存款指南", "提款指南"],
  },
};

export type PresentedGuide = Guide & { categoryLabel: string };

export function presentGuide(guide: Guide, locale: Locale): PresentedGuide {
  if (locale === "en") {
    return { ...guide, categoryLabel: guide.category };
  }
  const zh = zhGuides[guide.slug];
  if (!zh) return { ...guide, categoryLabel: guide.category };
  return {
    ...guide,
    title: zh.title,
    excerpt: zh.excerpt,
    steps: zh.steps,
    categoryLabel: zh.category,
    related: guide.related.map((link, index) => ({
      href: localizePath(link.href, "zh"),
      label: zh.related[index] ?? link.label,
    })),
  };
}

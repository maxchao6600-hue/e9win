import type { Locale } from "@/lib/i18n";

const zhAlt: Record<string, string> = {
  "A notebook on a quiet desk": "安静书桌上的笔记本",
  "Hands on a keyboard": "放在键盘上的双手",
  "A gold-lit hall of gaming screens": "金色灯光下的游戏屏幕大厅",
  "Gates of Olympus on a display in a dark room": "昏暗房间屏幕上的 Gates of Olympus",
  "Gates of Olympus on a display in a dark private room": "昏暗房间屏幕上的 Gates of Olympus",
  "Playtech baccarat key art of a dealer holding cards": "Playtech 百家乐画面，荷官手持纸牌",
  "A worn football on a night pitch under warm stadium lights": "夜场灯光下的一只旧足球",
  "An empty brass lottery cage in a single warm light": "暖光下空着的黄铜摇奖笼",
  "A koi crossing a gold light shaft beside a submerged arch": "金光水柱旁游过的锦鲤",
  "Hands on a keyboard lit by warm gold light": "暖金色灯光下放在键盘上的双手",
  "A phone and a laptop on a dark marble desk": "深色大理石桌上的手机和笔记本电脑",
  "A dark doorway opening onto a gold-lit hall": "通向金色灯光大厅的深色门口",
  "A phone on a dark marble desk beside a laptop": "深色大理石桌上、笔记本电脑旁的手机",
  "A card and a phone on a dark cashier counter": "深色收银台柜台上的卡和手机",
  "A stack of gold coins on a dark table": "深色桌上的一叠金币",
  "A row of dark gaming machines in gold light": "金色灯光下一排深色游戏机",
  "Monitors and a keyboard at a dark desk": "深色书桌上的显示器和键盘",
  "A lamp and a notebook on a quiet night desk": "安静夜桌上的灯和笔记本",
  "Lightning Baccarat table artwork": "Lightning Baccarat 桌面画面",
  "Horse racing cover from the sports catalog": "体育目录中的赛马封面",
  "A quiet desk beside a night window": "夜窗旁安静的书桌",
  "A private lounge with velvet seating and gold light": "丝绒座位与金色灯光的私人休息室",
  "A gallery desk overlooking a gaming floor": "俯视游戏区的长桌",
};

export function sceneAlt(alt: string, locale: Locale) {
  if (locale === "en") return alt;
  return zhAlt[alt] ?? alt;
}

// 指定可否
export const permission = {
  Ok: 0, // 指定可
  Alert: 1, // アラート対象
  None: 2 // 使用不可
} as const

export type PermissionType = (typeof permission)[keyof typeof permission]

// 管理者区分
export const admin = {
  Minister: 0, // 国土交通大臣
  Prefecture: 1, // 都道府県
  DesignatedCity: 2, // 指定都市
  City: 3, // 市区町村
  RoadCorporation: 4, // 道路公団
  Honshi: 5, // 本州四国
  Metro: 6, // 首都高速
  Hanshin: 7, // 阪神高速
  Local: 8, // 地方道路公社
  Highway: 9 // 高速道路
} as const

export type AdminType = (typeof admin)[keyof typeof admin]

export const adminMap: Map<AdminType, string> = new Map([
  [admin.Minister, '国土交通大臣'],
  [admin.Prefecture, '都道府県または知事'],
  [admin.DesignatedCity, '指定市または指定市長'],
  [admin.City, '市区町村'],
  [admin.RoadCorporation, '日本道路公団'],
  [admin.Honshi, '本州四国連絡橋公団'],
  [admin.Metro, '首都高速道路公団'],
  [admin.Hanshin, '阪神高速道路公団'],
  [admin.Local, '地方道路公社'],
  [admin.Highway, '高速道路公社']
])

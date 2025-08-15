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
  Expressway: 9 // 高速道路
} as const

export type AdminType = (typeof admin)[keyof typeof admin]

export type AdminListItemType = {
  type: AdminType
  label: string
}

// 道路種別
export const road = {
  Expressway: 0, // 高速自動車国道
  NationalHighway: 1, // 一般国道
  CityHighway: 2, // 都市高速道路
  MajorLocalRoad: 3, // 主要地方道
  PrefecturalRoad: 4, // 一般都道府県道
  DesignatedCityRoad: 5, // 指定市道
  City: 6 // 市町村道
} as const

export type RoadType = (typeof road)[keyof typeof road]

export type RoadListItemType = {
  type: RoadType
  label: string
}

// 道路種別の指定可否
export type RoadPermissionType = {
  road: RoadType
  permission: PermissionType
}

// 道路種別の指定可否リスト
export type RoadPermissionListItemType = {
  admin: AdminType
  permissions: RoadPermissionType[]
}

// 入力フォーム
export type InputType = {
  user: AdminType
  road: RoadType
  admin: AdminType
}

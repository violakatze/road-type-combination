import {
  admin,
  AdminListItemType,
  AdminType,
  InputType,
  permission,
  PermissionType,
  road,
  RoadType,
  RoadListItemType,
  RoadPermissionListItemType,
  RoadPermissionType
} from '../types'

// 管理者区分のリスト
export const adminArray: AdminListItemType[] = [
  { type: admin.Minister, label: '国土交通大臣' },
  { type: admin.Prefecture, label: '都道府県または知事' },
  { type: admin.DesignatedCity, label: '指定市または指定市長' },
  { type: admin.City, label: '市区町村' },
  { type: admin.RoadCorporation, label: '日本道路公団' },
  { type: admin.Honshi, label: '本州四国連絡橋公団' },
  { type: admin.Metro, label: '首都高速道路公団' },
  { type: admin.Hanshin, label: '阪神高速道路公団' },
  { type: admin.Local, label: '地方道路公社' },
  { type: admin.Expressway, label: '高速道路公社' }
]

// 道路種別のリスト
export const roadArray: RoadListItemType[] = [
  { type: road.Expressway, label: '高速自動車国道' },
  { type: road.NationalHighway, label: '一般国道' },
  { type: road.CityHighway, label: '都市高速道路' },
  { type: road.MajorLocalRoad, label: '主要地方道' },
  { type: road.PrefecturalRoad, label: '一般都道府県道' },
  { type: road.DesignatedCityRoad, label: '指定市道' },
  { type: road.City, label: '市町村道' }
]

// 道路種別の指定可否マトリックス
const roadPermissionMatrix: RoadPermissionListItemType[] = [
  {
    admin: admin.Minister,
    permissions: [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.Alert },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.Alert },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Alert }
    ]
  },
  {
    admin: admin.Prefecture,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Alert }
    ]
  },
  {
    admin: admin.DesignatedCity,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.Alert },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.Ok },
      { road: road.City, permission: permission.Alert }
    ]
  },
  {
    admin: admin.City,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.Alert },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Ok }
    ]
  },
  {
    admin: admin.RoadCorporation,
    permissions: [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.Alert }
    ]
  },
  {
    admin: admin.Honshi,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.None }
    ]
  },
  {
    admin: admin.Metro,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.None },
      { road: road.CityHighway, permission: permission.Ok },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.None }
    ]
  },
  {
    admin: admin.Hanshin,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.None },
      { road: road.CityHighway, permission: permission.Ok },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.Ok },
      { road: road.City, permission: permission.None }
    ]
  },
  {
    admin: admin.Local,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.Alert }
    ]
  },
  {
    admin: admin.Expressway,
    permissions: [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.None }
    ]
  }
]

// 道路種別の指定可否リスト取得
const getPermissions = (adminType: AdminType): RoadPermissionType[] => {
  const item = roadPermissionMatrix.find(item => item.admin === adminType)
  if (!item) {
    throw new Error('Invalid admin type')
  }
  return item.permissions
}

/**
 * 管理者区分に応じて道路種別リストを絞り込む
 * @param adminType 道路管理者区分
 * @returns
 */
export const getRoadArray = (adminType: AdminType): RoadListItemType[] => {
  const permissions = getPermissions(adminType)

  const roadList = roadArray.filter(item =>
    permissions.some(p => p.road === item.type && p.permission !== permission.None)
  )

  return roadList
}

/**
 * 管理者区分に応じてデフォルトの道路種別を取得する
 * @param adminType 道路管理者区分
 * @returns デフォルトの道路種別
 */
export const getDefaultRoadType = (adminType: AdminType): RoadType => {
  const permissions = getPermissions(adminType)

  // 指定可の「最初の」道路種別を取得
  const defaultRoad = permissions.find(p => p.permission === permission.Ok)
  if (defaultRoad === undefined) {
    throw new Error('No default road type found for this admin type')
  }

  return defaultRoad.road
}

/**
 * 道路種別と管理者区分の組み合わせが指定可能かどうかを判定する
 * @param target 管理者区分
 * @param source 道路種別
 * @returns 指定可能ならtrue、そうでなければfalse
 */
export const isOk = (target: AdminType, source: RoadType): boolean => {
  const permissions = getPermissions(target)

  // 指定可能な組み合わせか確認(アラート対象はここでは許容しない)
  return permissions.some(p => p.road === source && p.permission === permission.Ok)
}

/**
 * 管理者区分と道路種別の組み合わせの指定可否を取得する
 * @param adminType 管理者区分
 * @param roadType 道路種別
 * @returns
 */
export const getPermission = (adminType: AdminType, roadType: RoadType): PermissionType => {
  const permissions = getPermissions(adminType)

  const permissionItem = permissions.find(p => p.road === roadType)
  if (permissionItem === undefined) {
    throw new Error('No permission found for this road type and admin type combination')
  }
  return permissionItem.permission
}

/**
 * 入力フォームのデフォルト値を取得する
 * @returns
 */
export const getDefaultValues = (): InputType => {
  return {
    user: admin.Minister,
    road: getDefaultRoadType(admin.Minister),
    admin: admin.Minister
  }
}

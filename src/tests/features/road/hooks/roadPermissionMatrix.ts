import { admin, permission, road, RoadPermissionListItemType } from '@/features/road/types'

// テスト用・道路種別の指定可否マトリックス
export const roadPermissionMatrixForTest: RoadPermissionListItemType[] = [
  // 国土交通大臣
  {
    admin: admin.Minister,
    permissions: [
      { road: road.Expressway, permission: permission.None }, // 高速自動車国道
      { road: road.NationalHighway, permission: permission.Alert }, // 一般国道
      { road: road.CityHighway, permission: permission.Ok }, // 都市高速道路
      { road: road.MajorLocalRoad, permission: permission.None }, // 主要地方道
      { road: road.PrefecturalRoad, permission: permission.Alert }, // 一般都道府県道
      { road: road.DesignatedCityRoad, permission: permission.Ok }, // 指定市道
      { road: road.City, permission: permission.None } // 市町村道
    ]
  },
  // 都道府県または知事
  {
    admin: admin.Prefecture,
    permissions: [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.Ok },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Alert }
    ]
  },
  // 指定市または指定市長
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
  // 市区町村
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
  // 日本道路公団
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
  // 本州四国連絡橋公団
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
  // 首都高速道路公団
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
  // 阪神高速道路公団
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
  // 地方道路公社
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
  // 高速道路公社
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
] as const

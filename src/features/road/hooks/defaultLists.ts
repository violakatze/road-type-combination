import { admin, AdminListItemType, road, RoadListItemType } from '../types'

// 管理者区分のリスト
export const adminListOriginal: AdminListItemType[] = [
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
] as const

// 道路種別のリスト
export const roadListOriginal: RoadListItemType[] = [
  { type: road.Expressway, label: '高速自動車国道' },
  { type: road.NationalHighway, label: '一般国道' },
  { type: road.CityHighway, label: '都市高速道路' },
  { type: road.MajorLocalRoad, label: '主要地方道' },
  { type: road.PrefecturalRoad, label: '一般都道府県道' },
  { type: road.DesignatedCityRoad, label: '指定市道' },
  { type: road.City, label: '市町村道' }
] as const

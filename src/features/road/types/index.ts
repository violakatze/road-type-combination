// 指定可否
const permission = {
  Ok: 0, // 指定可
  Alert: 1, // アラート対象
  None: 2 // 使用不可
} as const

type PermissionType = (typeof permission)[keyof typeof permission]

// 管理者区分
const admin = {
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

type AdminType = (typeof admin)[keyof typeof admin]

export const adminArray: [AdminType, string][] = [
  [admin.Minister, '国土交通大臣'],
  [admin.Prefecture, '都道府県または知事'],
  [admin.DesignatedCity, '指定市または指定市長'],
  [admin.City, '市区町村'],
  [admin.RoadCorporation, '日本道路公団'],
  [admin.Honshi, '本州四国連絡橋公団'],
  [admin.Metro, '首都高速道路公団'],
  [admin.Hanshin, '阪神高速道路公団'],
  [admin.Local, '地方道路公社'],
  [admin.Expressway, '高速道路公社']
]

// 道路種別
const road = {
  Expressway: 0, // 高速自動車国道
  NationalHighway: 1, // 一般国道
  CityHighway: 2, // 都市高速道路
  MajorLocalRoad: 3, // 主要地方道
  PrefecturalRoad: 4, // 一般都道府県道
  DesignatedCityRoad: 5, // 指定市道
  City: 6 // 市町村道
} as const

type RoadType = (typeof road)[keyof typeof road]

export const roadArray: [RoadType, string][] = [
  [road.Expressway, '高速自動車国道'],
  [road.NationalHighway, '一般国道'],
  [road.CityHighway, '都市高速道路'],
  [road.MajorLocalRoad, '主要地方道'],
  [road.PrefecturalRoad, '一般都道府県道'],
  [road.DesignatedCityRoad, '指定市道'],
  [road.City, '市町村道']
]

// 道路種別の指定可否
type RoadPermissionType = {
  road: RoadType
  permission: PermissionType
}

// 道路種別の指定可否マトリックス
export const roadPermissionMatrix: [AdminType, RoadPermissionType[]][] = [
  [
    admin.Minister,
    [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.Alert },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.Alert },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Alert }
    ]
  ],
  [
    admin.Prefecture,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Alert }
    ]
  ],
  [
    admin.DesignatedCity,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.Alert },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.Ok },
      { road: road.City, permission: permission.Alert }
    ]
  ],
  [
    admin.City,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.Alert },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.Ok }
    ]
  ],
  [
    admin.RoadCorporation,
    [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Alert },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.Alert }
    ]
  ],
  [
    admin.Honshi,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Ok },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.None }
    ]
  ],
  [
    admin.Metro,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.None },
      { road: road.CityHighway, permission: permission.Ok },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.None }
    ]
  ],
  [
    admin.Hanshin,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.None },
      { road: road.CityHighway, permission: permission.Ok },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.Ok },
      { road: road.City, permission: permission.None }
    ]
  ],
  [
    admin.Local,
    [
      { road: road.Expressway, permission: permission.None },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.Ok },
      { road: road.PrefecturalRoad, permission: permission.Ok },
      { road: road.DesignatedCityRoad, permission: permission.None },
      { road: road.City, permission: permission.Alert }
    ]
  ],
  [
    admin.Expressway,
    [
      { road: road.Expressway, permission: permission.Ok },
      { road: road.NationalHighway, permission: permission.Alert },
      { road: road.CityHighway, permission: permission.None },
      { road: road.MajorLocalRoad, permission: permission.None },
      { road: road.PrefecturalRoad, permission: permission.None },
      { road: road.DesignatedCityRoad, permission: permission.Alert },
      { road: road.City, permission: permission.None }
    ]
  ]
]

// 入力フォーム
export type InputType = {
  user: AdminType
  road: RoadType
  admin: AdminType
}

export const defaultValues: InputType = {
  user: admin.Minister,
  road: road.Expressway,
  admin: admin.Minister
}

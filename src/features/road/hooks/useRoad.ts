import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as types from '../types'
import { adminListOriginal, roadListOriginal } from './defaultLists'

export const useRoad = (roadPermissionMatrix: types.RoadPermissionListItemType[]) => {
  const defaultValues = getDefaultValues(roadPermissionMatrix)
  const { control, getValues, handleSubmit, setValue } = useForm<types.InputType>({
    values: defaultValues,
    defaultValues
  })
  const [adminList] = useState<types.AdminListItemType[]>(adminListOriginal)
  const [roadList, setRoadList] = useState<types.RoadListItemType[]>(
    getRoadList(roadPermissionMatrix, getValues('admin'))
  )
  const [currentPermission, setCurrentPermission] = useState<types.PermissionType>(
    getPermission(roadPermissionMatrix, getValues('admin'), getValues('road'))
  )

  /**
   * 選択されている道路種別に応じて現在の許可を更新
   */
  const updateCurrentPermission = () => {
    const permission = getPermission(roadPermissionMatrix, getValues('admin'), getValues('road'))
    setCurrentPermission(permission)
  }

  /**
   * ユーザー変更(異なるユーザーでログインする操作をエミュレート=初期化)
   */
  const userChanged = (adminType: types.AdminType) => {
    setValue('user', adminType)

    // 道路管理者区分をデフォルトに戻す
    adminChanged(adminType)
  }

  /**
   * 道路管理者区分変更
   */
  const adminChanged = (adminType: types.AdminType) => {
    setValue('admin', adminType)

    // 選択された道路管理者区分に応じて道路種別リストを絞り込み
    const filteredRoadList = getRoadList(roadPermissionMatrix, adminType)
    setRoadList(filteredRoadList)

    // 道路種別をデフォルトに戻す
    const defaultRoad = getDefaultRoadType(roadPermissionMatrix, adminType)
    roadChanged(defaultRoad)
  }

  /**
   * 道路種別変更
   */
  const roadChanged = (roadType: types.RoadType) => {
    setValue('road', roadType)
    updateCurrentPermission()
  }

  /**
   * 登録ボタン押下
   */
  const submit = handleSubmit(data => {
    console.log('Submitted data:', data)
  })

  return {
    control,
    adminList,
    roadList,
    currentPermission,
    userChanged,
    adminChanged,
    roadChanged,
    submit,
    getValues // UnitTest用に公開
  }
}

// 道路種別の指定可否リスト取得
const getPermissions = (
  roadPermissionMatrix: types.RoadPermissionListItemType[],
  adminType: types.AdminType
): types.RoadPermissionType[] => {
  const item = roadPermissionMatrix.find(item => item.admin === adminType)
  if (!item) {
    throw new Error('Invalid admin type')
  }
  return item.permissions
}

/**
 * 管理者区分に応じて道路種別リストを絞り込む
 * @param roadPermissionMatrix 道路種別の指定可否マトリックス
 * @param adminType 道路管理者区分
 * @returns
 */
const getRoadList = (
  roadPermissionMatrix: types.RoadPermissionListItemType[],
  adminType: types.AdminType
): types.RoadListItemType[] => {
  const permissions = getPermissions(roadPermissionMatrix, adminType)

  const roadList = roadListOriginal.filter(item =>
    permissions.some(p => p.road === item.type && p.permission !== types.permission.None)
  )

  return roadList
}

/**
 * 管理者区分に応じてデフォルトの道路種別を取得する
 * @param roadPermissionMatrix 道路種別の指定可否マトリックス
 * @param adminType 道路管理者区分
 * @returns デフォルトの道路種別
 */
const getDefaultRoadType = (
  roadPermissionMatrix: types.RoadPermissionListItemType[],
  adminType: types.AdminType
): types.RoadType => {
  const permissions = getPermissions(roadPermissionMatrix, adminType)

  // 指定可の「最初の」道路種別を取得
  const defaultRoad = permissions.find(p => p.permission === types.permission.Ok)
  if (defaultRoad === undefined) {
    throw new Error('No default road type found for this admin type')
  }

  return defaultRoad.road
}

/**
 * 管理者区分と道路種別の組み合わせの指定可否を取得する
 * @param roadPermissionMatrix 道路種別の指定可否マトリックス
 * @param adminType 管理者区分
 * @param roadType 道路種別
 * @returns
 */
const getPermission = (
  roadPermissionMatrix: types.RoadPermissionListItemType[],
  adminType: types.AdminType,
  roadType: types.RoadType
): types.PermissionType => {
  const permissions = getPermissions(roadPermissionMatrix, adminType)

  const permissionItem = permissions.find(p => p.road === roadType)
  if (permissionItem === undefined) {
    throw new Error('No permission found for this road type and admin type combination')
  }
  return permissionItem.permission
}

/**
 * 入力フォームのデフォルト値を取得する
 * @param roadPermissionMatrix 道路種別の指定可否マトリックス
 * @returns
 */
const getDefaultValues = (
  roadPermissionMatrix: types.RoadPermissionListItemType[]
): types.InputType => {
  return {
    user: types.admin.Minister,
    road: getDefaultRoadType(roadPermissionMatrix, types.admin.Minister),
    admin: types.admin.Minister
  }
}

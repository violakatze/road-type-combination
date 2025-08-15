import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputType, PermissionType, RoadListItemType } from '../types'
import { getDefaultRoadType, getDefaultValues, getPermission, getRoadArray, isOk } from '../utils'

export const useRoad = () => {
  const defaultValues = getDefaultValues()
  const { control, getValues, handleSubmit, setValue, watch } = useForm<InputType>({
    values: defaultValues,
    defaultValues
  })
  const [roadArray, setRoadArray] = useState<RoadListItemType[]>(getRoadArray(defaultValues.admin))
  const [currentPermission, setCurrentPermission] = useState<PermissionType>(
    getPermission(defaultValues.admin, defaultValues.road)
  )
  const user = watch('user') // ユーザー選択の監視
  const admin = watch('admin') // 道路管理者区分の監視
  const road = watch('road') // 道路種別の監視

  /**
   * 選択されている道路種別に応じて現在の許可を更新
   */
  const updateCurrentPermission = () => {
    const permission = getPermission(getValues('admin'), getValues('road'))
    setCurrentPermission(permission)
  }

  useEffect(() => {
    // 道路管理者区分を更新
    setValue('admin', user)

    // 道路種別をデフォルト値に変更
    const defaultRoad = getDefaultRoadType(user)
    setValue('road', defaultRoad)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {
    // 選択されている道路種別を退避
    const currentRoad = getValues('road')

    // 選択された道路管理者区分に応じて道路種別リストを絞り込み
    const filteredRoadArray = getRoadArray(admin)
    setRoadArray(filteredRoadArray)

    // 選択されている道路種別が更新後のリストで指定可能でない場合はデフォルトの道路種別に変更する
    if (!isOk(admin, currentRoad)) {
      const defaultRoad = getDefaultRoadType(admin)
      setValue('road', defaultRoad)
      return
    }

    updateCurrentPermission()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin])

  useEffect(() => {
    updateCurrentPermission()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [road])

  /**
   * 登録ボタン押下
   */
  const submit = handleSubmit(data => {
    console.log('Submitted data:', data)
  })

  return {
    control,
    roadArray,
    currentPermission,
    submit
  }
}

import { act, cleanup, renderHook, waitFor } from '@testing-library/react'
import { useRoad } from '@/features/road/hooks'
import { adminListOriginal, roadListOriginal } from '@/features/road/hooks/defaultLists'
import * as types from '@/features/road/types'
import { roadPermissionMatrixForTest } from './roadPermissionMatrix'

describe('useRoad hook tests', () => {
  beforeEach(() => {
    cleanup()
  })

  test('初期値の確認', () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest)) // resultのまま動かさないと変更が反映されない

    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.Minister)?.permissions ?? []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )
    expect(result.current.adminList).toMatchObject(adminListOriginal)
    expect(result.current.roadList).toMatchObject(expectedRoads)
    expect(result.current.currentPermission).toBe(types.permission.Ok)
  })

  test('Okの道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    act(() => result.current.roadChanged(types.road.DesignatedCityRoad))
    await waitFor(() => expect(result.current.currentPermission).toBe(types.permission.Ok))
  })

  test('Alertの道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    act(() => result.current.roadChanged(types.road.NationalHighway))
    await waitFor(() => expect(result.current.currentPermission).toBe(types.permission.Alert))
  })

  test('Noneの道路種別を選択(UI上は選択不可)', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    act(() => result.current.roadChanged(types.road.Expressway))
    await waitFor(() => expect(result.current.currentPermission).toBe(types.permission.None))
  })

  test('道路管理者区分を変更 (道路種別Ok→Ok)', async () => {
    /**
     * 道路種別Ok選択時、道路管理者区分を変更してその区分での道路種別がOkならば選択状態維持
     */

    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.Prefecture)?.permissions ?? []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.adminChanged(types.admin.Prefecture))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('道路管理者区分を変更 (道路種別Ok→Alert→default)', async () => {
    /**
     * 道路種別Ok選択時、道路管理者区分を変更してその区分での道路種別Alertならデフォルトの道路種別が選択される
     */
    // TODO:
  })

  test('道路管理者区分を変更 (道路種別OK→None→default)', async () => {
    /**
     * 道路種別Ok選択時、道路管理者区分を変更してその区分での道路種別Noneならデフォルトの道路種別が選択される
     */
    // TODO:
  })

  test('道路管理者区分を変更 (道路種別Alert→Ok)', async () => {
    /**
     * 道路種別Alert選択時、道路管理者区分を変更してその区分での道路種別がOkならば選択状態維持
     */
    // TODO:
  })

  test('道路管理者区分を変更 (道路種別Alert→Alert→default)', async () => {
    /**
     * 道路種別Alert選択時、道路管理者区分を変更してその区分での道路種別Alertならデフォルトの道路種別が選択される
     */
    // TODO:
  })

  test('道路管理者区分を変更 (道路種別Alert→None→default)', async () => {
    /**
     * 道路種別Alert選択時、道路管理者区分を変更してその区分での道路種別Noneならデフォルトの道路種別が選択される
     */
    // TODO:
  })

  test('ユーザーを変更1', async () => {
    /**
     * 違うユーザーでログインする操作をエミュレートしているため、現在の選択状態によらず初期値に戻ることを確認
     */
  })

  test('ユーザーを変更2', async () => {
    /**
     * 違うユーザーでログインする操作をエミュレートしているため、現在の選択状態によらず初期値に戻ることを確認
     */
  })
})

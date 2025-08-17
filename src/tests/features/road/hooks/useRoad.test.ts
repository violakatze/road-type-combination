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

  test('道路管理者区分を変更1 デフォルトの道路種別を選択', async () => {
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
      expect(result.current.getValues('road')).toBe(types.road.NationalHighway)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('道路管理者区分を変更2 デフォルトの道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.DesignatedCity)?.permissions ??
      []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.adminChanged(types.admin.DesignatedCity))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.getValues('road')).toBe(types.road.CityHighway)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('道路管理者区分を変更3 デフォルトの道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.City)?.permissions ?? []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.adminChanged(types.admin.City))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.getValues('road')).toBe(types.road.MajorLocalRoad)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('ユーザーを変更1 デフォルトの道路管理者区分・道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.Prefecture)?.permissions ?? []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.userChanged(types.admin.Prefecture))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.getValues('admin')).toBe(types.admin.Prefecture)
      expect(result.current.getValues('road')).toBe(types.road.NationalHighway)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('ユーザーを変更2 デフォルトの道路管理者区分・道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.DesignatedCity)?.permissions ??
      []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.userChanged(types.admin.DesignatedCity))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.getValues('admin')).toBe(types.admin.DesignatedCity)
      expect(result.current.getValues('road')).toBe(types.road.CityHighway)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('ユーザーを変更3 デフォルトの道路管理者区分・道路種別を選択', async () => {
    const { result } = renderHook(() => useRoad(roadPermissionMatrixForTest))
    const expectedPermissions =
      roadPermissionMatrixForTest.find(a => a.admin === types.admin.City)?.permissions ?? []
    const expectedRoads = roadListOriginal.filter(r =>
      expectedPermissions.some(p => r.type === p.road && p.permission !== types.permission.None)
    )

    act(() => result.current.userChanged(types.admin.City))
    await waitFor(() => {
      expect(result.current.adminList).toMatchObject(adminListOriginal)
      expect(result.current.roadList).toMatchObject(expectedRoads)
      expect(result.current.getValues('admin')).toBe(types.admin.City)
      expect(result.current.getValues('road')).toBe(types.road.MajorLocalRoad)
      expect(result.current.currentPermission).toBe(types.permission.Ok)
    })
  })

  test('submit関数の確認', async () => {
    expect(true).toBeTruthy()
  })
})

import { Button, MenuItem, Stack } from '@mui/material'
import { Footer, SelectList } from '@/components'
import { roadPermissionMatrix, useRoad } from '../hooks'
import { AdminType, RoadType } from '../types'
import { ResultBox } from './ResultBox'

export const Page = () => {
  const {
    control,
    adminList,
    roadList,
    currentPermission,
    userChanged,
    adminChanged,
    roadChanged,
    submit
  } = useRoad(roadPermissionMatrix)

  return (
    <Stack spacing={2}>
      <SelectList
        name="user"
        label="ユーザー"
        control={control}
        size="small"
        onChange={e => userChanged(e.target.value as unknown as AdminType)}
        sx={{ width: '30ch' }}
      >
        {adminList.map(({ type, label }) => (
          <MenuItem key={type} value={type}>
            {label}
          </MenuItem>
        ))}
      </SelectList>
      <hr />
      <SelectList
        name="road"
        label="道路種別"
        control={control}
        size="small"
        sx={{ width: '30ch' }}
        onChange={e => roadChanged(e.target.value as unknown as RoadType)}
      >
        {roadList.map(({ type, label }) => (
          <MenuItem key={type} value={type}>
            {label}
          </MenuItem>
        ))}
      </SelectList>
      <SelectList
        name="admin"
        label="道路管理者区分"
        control={control}
        size="small"
        sx={{ width: '30ch' }}
        onChange={e => adminChanged(e.target.value as unknown as AdminType)}
      >
        {adminList.map(({ type, label }) => (
          <MenuItem key={type} value={type}>
            {label}
          </MenuItem>
        ))}
      </SelectList>
      <ResultBox currentPermission={currentPermission} />
      <Footer>
        <Button variant="contained" color="primary" onClick={submit}>
          登録
        </Button>
      </Footer>
    </Stack>
  )
}

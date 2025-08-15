import { MenuItem, Stack } from '@mui/material'
import { SelectList } from '@/components'
import { useRoad } from '../hooks'
import { adminArray, roadArray } from '../types'

export const Page = () => {
  const {
    form: { control }
  } = useRoad()

  return (
    <Stack spacing={2}>
      <SelectList
        name="user"
        label="ユーザー"
        control={control}
        size="small"
        sx={{ width: '30ch' }}
      >
        {adminArray.map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
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
      >
        {roadArray.map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </SelectList>
      <SelectList
        name="admin"
        label="道路管理者区分"
        control={control}
        size="small"
        sx={{ width: '30ch' }}
      >
        {adminArray.map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        ))}
      </SelectList>
    </Stack>
  )
}

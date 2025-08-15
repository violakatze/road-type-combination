import { Button, MenuItem, Stack } from '@mui/material'
import { Footer, SelectList } from '@/components'
import { useRoad } from '../hooks'
import { adminArray } from '../utils'
import { ResultBox } from './ResultBox'

export const Page = () => {
  const { control, roadArray, currentPermission, submit } = useRoad()

  return (
    <Stack spacing={2}>
      <SelectList
        name="user"
        label="ユーザー"
        control={control}
        size="small"
        sx={{ width: '30ch' }}
      >
        {adminArray.map(({ type, label }) => (
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
      >
        {roadArray.map(({ type, label }) => (
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
      >
        {adminArray.map(({ type, label }) => (
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

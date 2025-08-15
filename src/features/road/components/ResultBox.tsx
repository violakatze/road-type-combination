import { Alert, AlertColor } from '@mui/material'
import { permission, PermissionType } from '../types'

type MessageType = {
  severity: AlertColor
  message: string
}

/**
 * 選択された組み合わせの許可状態表示
 */
export const ResultBox = ({ currentPermission }: { currentPermission: PermissionType }) => {
  const getMessage = (): MessageType => {
    switch (currentPermission) {
      case permission.Ok:
        return { severity: 'success', message: 'OK (本来はOKならば何も表示しない)' }
      case permission.Alert:
        return { severity: 'warning', message: 'アラート (本来ならばポップアップでアラート表示)' }
      default:
        return { severity: 'error', message: 'ありえない組み合わせが選択されている' }
    }
  }

  const { severity, message } = getMessage()

  return (
    <>
      <Alert severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </>
  )
}

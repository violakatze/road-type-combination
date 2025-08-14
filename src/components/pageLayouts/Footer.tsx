import { ReactNode } from 'react'
import { BottomNavigation, Container, Paper, Stack } from '@mui/material'

/**
 * フッター
 */
export const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <Stack sx={{ padding: 5 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
        <BottomNavigation>
          <Container maxWidth="xl" disableGutters>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="right"
              alignItems="center"
              width={'100%'}
              height={'100%'}
            >
              {children}
            </Stack>
          </Container>
        </BottomNavigation>
      </Paper>
    </Stack>
  )
}

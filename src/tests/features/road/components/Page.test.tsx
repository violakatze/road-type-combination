import { render, screen, waitFor } from '@testing-library/react'
import { Page } from '@/features/road/components'

describe('page tests', () => {
  test('初期表示', async () => {
    render(<Page />)

    const user = await waitFor(() => screen.getByLabelText('ユーザー'))
    expect(user).toBeValid()

    const road = await waitFor(() => screen.getByLabelText('道路種別'))
    expect(road).toBeValid()

    const admin = await waitFor(() => screen.getByLabelText('道路管理者区分'))
    expect(admin).toBeValid()

    const registerButton = screen.queryByText('登録')
    expect(registerButton).toBeEnabled()
    expect(registerButton).toHaveRole('button')
  })
})

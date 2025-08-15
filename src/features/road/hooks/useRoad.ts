import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputType, defaultValues } from '../types'

export const useRoad = () => {
  const form = useForm<InputType>({
    values: defaultValues,
    defaultValues
  })
  const watch = form.watch
  const user = watch('user')

  useEffect(() => {
    form.setValue('admin', user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return {
    form
  }
}

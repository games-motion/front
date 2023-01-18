import { ChangeEvent, useId, useState } from 'react'
import { useForm as useHookForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { type NewTeamForm, NewTeamSchema as schema } from '../../../shared'

export function useForm() {
  const [base64Image, setBase64Image] = useState('')
  const { register, handleSubmit, watch, reset, setValue } = useHookForm<NewTeamForm>({
    resolver: zodResolver(schema),
  })
  const inputFileID = useId()
  const inputTitleID = useId()
  const textareaID = useId()

  function onSubmit(data: NewTeamForm) {
    const formData = new FormData()
    //multipart/form-data
    formData.append('title', data.title)
    formData.append('image', data.image)
    formData.append('description', data?.description || '')
  }

  function onChangeInputFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files

    if (!file) return

    const targeFile = file[0]
    const reader = new FileReader()

    reader.onload = async () => {
      setBase64Image(reader.result as string)
    }
    reader.readAsDataURL(targeFile)
    if (!file) return

    console.log(file[0])

    setValue('image', file as unknown as File)
  }

  function handleDropItem(file: FileList) {
    if (!file) return

    const targeFile = file[0]
    const reader = new FileReader()

    reader.onload = async () => {
      setBase64Image(reader.result as string)
    }
    reader.readAsDataURL(targeFile)
    if (!file) return

    console.log(file[0])

    setValue('image', file as unknown as File)
  }

  return {
    register,
    handleSubmit,
    watch,
    reset,
    inputFileID,
    inputTitleID,
    textareaID,
    base64Image,
    onSubmit,
    handleDropItem,
    onChangeInputFile,
  }
}

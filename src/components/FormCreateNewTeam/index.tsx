import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useEffect, useId, useState } from 'react'
import { HandGrabbing, Plus, TextH } from 'phosphor-react'

import { Button } from '../Button'
import { NewTeamForm, schema } from '../../shared/schemas/new-team-schema'
import { Center, Column, Container, InputFileContainer, Row } from './styles'

export function FormCreateNewTeam() {
  const [base64Image, setBase64Image] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<NewTeamForm>({
    resolver: zodResolver(schema),
  })
  const inputFileID = useId()
  const inputTitleID = useId()
  const textareaID = useId()

  useEffect(() => {
    window.addEventListener(
      'dragover',
      function (e) {
        e.preventDefault()
      },
      false
    )
    window.addEventListener(
      'drop',
      function (e) {
        e.preventDefault()
      },
      false
    )
  }, [])

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

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <label htmlFor={inputTitleID}>Nome do time</label>
          <Row>
            <TextH size={32} />
            <input id={inputTitleID} placeholder="Digite o nome do time" {...register('title')} />
          </Row>
        </Column>
        <Center>
          <InputFileContainer
            bg={base64Image}
            draggable
            onDrop={(e) => handleDropItem(e.dataTransfer.files)}
          >
            <input type="file" onChange={onChangeInputFile} id={inputFileID} />
            <label htmlFor={inputFileID}>
              <div>
                <Plus size={32} />
                <span>Clique para adicionar uma imagem</span>
              </div>
              <div>
                Ou arraste a imagem <HandGrabbing size={32} />
              </div>
            </label>
          </InputFileContainer>
        </Center>
        <Column>
          <label htmlFor={textareaID}>Descrição</label>
          <textarea
            id={textareaID}
            {...register('description')}
            placeholder="Adicione uma descrição"
          />
        </Column>
        <Button variant="solid">enviar</Button>
      </form>
    </Container>
  )
}

import { useEffect } from 'react'
import { HandGrabbing, Plus, TextH, Trash } from 'phosphor-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Button } from '../Button'
import { Center, Column, Container, InputFileContainer, Row, ColumnInputFile } from './styles'
import { useForm } from './hooks/useForm'

export function FormCreateNewTeam() {
  const {
    base64Image,
    handleSubmit,
    inputFileID,
    inputTitleID,
    register,
    textareaID,
    onSubmit,
    handleDropItem,
    onChangeInputFile,
    handleResetInputFileValue,
  } = useForm()
  const [animatedParent] = useAutoAnimate<HTMLDivElement>()

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
          <ColumnInputFile ref={animatedParent}>
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
            {base64Image && (
              <button onClick={handleResetInputFileValue} title="Excluir imagem">
                <Trash size={20} weight="bold" />
              </button>
            )}
          </ColumnInputFile>
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

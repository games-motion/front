import { KeyboardEvent, useEffect, useState } from 'react'
import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor as SlateEditor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'
import {
  Code,
  ListBullets,
  ListNumbers,
  Quotes,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextHOne,
  TextHTwo,
  TextItalic,
  TextUnderline,
} from 'phosphor-react'
import { BlockButtonMark, Body, ButtonMark, Header } from './styles'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}
const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export function Editor() {
  const [isRendered, setIsRendered] = useState(false)

  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  useEffect(() => {
    setIsRendered(true)
  }, [])

  if (!isRendered) {
    return null
  }
  return (
    <Slate editor={editor} value={initialValue}>
      <Header>
        <MarkButton format="bold" icon={<TextBolder size={15} />} />
        <MarkButton format="italic" icon={<TextItalic size={15} />} />
        <MarkButton format="underline" icon={<TextUnderline size={15} />} />
        <MarkButton format="code" icon={<Code size={15} />} />
        <BlockButton format="heading-one" icon={<TextHOne size={20} />} />
        <BlockButton format="heading-two" icon={<TextHTwo size={20} />} />
        <BlockButton format="block-quote" icon={<Quotes size={20} />} />
        <BlockButton format="numbered-list" icon={<ListNumbers size={20} />} />
        <BlockButton format="bulleted-list" icon={<ListBullets size={20} />} />
        <BlockButton format="left" icon={<TextAlignLeft size={20} />} />
        <BlockButton format="center" icon={<TextAlignCenter size={20} />} />
        <BlockButton format="right" icon={<TextAlignRight size={20} />} />
        <BlockButton format="justify" icon={<TextAlignJustify size={20} />} />
      </Header>
      <Body>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as KeyboardEvent)) {
                event.preventDefault()
                const hotkeyInHotKeys = hotkey as keyof typeof HOTKEYS
                const mark = HOTKEYS[hotkeyInHotKeys]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Body>
    </Slate>
  )
}

interface IMarkButton {
  format: string
  icon: JSX.Element | string
}

function MarkButton(props: IMarkButton) {
  const { format, icon } = props
  const editor = useSlate()
  return (
    <ButtonMark
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <div>{icon}</div>
    </ButtonMark>
  )
}

const BlockButton = (props: IMarkButton) => {
  const { format, icon } = props
  const editor = useSlate()
  return (
    <BlockButtonMark
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <div>{icon}</div>
    </BlockButtonMark>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !SlateEditor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    SlateEditor.removeMark(editor, format)
  } else {
    SlateEditor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor, format) => {
  const marks = SlateEditor.marks(editor)
  return marks ? marks[format] === true : false
}

const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    })
  )

  return !!match
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

function Leaf({ attributes, children, leaf }: any) {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export type TextNode = {
  id: string
  position: { x: number; y: number }
  data: {
    text: string
    nodeColor: string
    textColor: string
    fontSize: number
    fontWeight: string
  }
  type: 'textNode'
}

export type ImageNode = {
  id: string
  position: { x: number; y: number }
  data: { image: string }
  type: 'imageNode'
}

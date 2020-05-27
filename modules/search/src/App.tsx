import React from 'react'

interface Props {
  name: string
}

export default function App(props: Props) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(props.name)}`
  return <a href={url}>{props.name}</a>
}

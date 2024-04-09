import React from 'react'
import Button from 'react-bootstrap/esm/Button'

export default function FormButton({buttonType, buttonText}) {
  return (
    <Button type={buttonType}>
      {buttonText}
    </Button>
  )
}

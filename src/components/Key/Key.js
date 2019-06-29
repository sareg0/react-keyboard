import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  grid-area: ${props => props.gridArea};
  color: #747171;
  font-size: ${props => props.smallText ? '0.65rem' : '1.25rem'};
  font-weight: ${props => props.smallText ? '700' : '500' };
  padding: 0.35rem;
  box-shadow: 1px 1px 1px 2px darkgray;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;

  display: flex;
  align-items: ${props => props.vAlign || 'center' };
  justify-content: ${props => props.hAlign || 'center' };
`

const Key = ({ gridArea, text, vAlign, hAlign, smallText}) => {
  return(
    <Button
      gridArea={gridArea}
      vAlign={vAlign}
      hAlign={hAlign}
      smallText={smallText}>
      {`${text}`}
    </Button>
  )
}

export default Key

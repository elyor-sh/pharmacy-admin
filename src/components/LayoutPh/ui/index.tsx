import styled from "styled-components";

interface IWrapper {
    bgColor?: string
}

export const Wrapper = styled.div<IWrapper>`
  background-color: ${(props) => props.bgColor || '#fff'};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface ItemTextProps {
    open?: boolean
}

export const ItemText = styled.span<ItemTextProps>`
  display: ${(props) => props.open ? 'inline-block' : 'none'};
  font-weight: 600;
`
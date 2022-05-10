import {styled} from "@mui/material/styles";


interface IWrapper {
    bgcolor?: string
}

export const Wrapper = styled('div')<IWrapper>(({bgcolor}) => ({
    backgroundColor: bgcolor || '#fff',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
}))


interface ItemTextProps {
    open?: boolean
}

export const ItemText = styled('span')<ItemTextProps>(({open}) => ({
    display: open ? 'inline-block' : 'none',
    fontWeight: 600
}))
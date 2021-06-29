import styled from 'styled-components'
import Button from "../Base/Button"

const PreIcon = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`

const ButtonCustom = styled(Button)`
  display: flex;
  align-items: center;
`;

type TButtonIconProps = {
  preIcon: any;
  text?: String;
  children?: JSX.Element | JSX.Element[];
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ButtonIcon = ({ preIcon, text, children, ...rest }: TButtonIconProps) => {
  return (
    <ButtonCustom { ...rest }>
      <PreIcon>{ preIcon }</PreIcon>
      { text || children }
    </ButtonCustom>
  )
}

export default ButtonIcon
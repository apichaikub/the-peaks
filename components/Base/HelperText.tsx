import styled from "styled-components";

type Props = {
  transform?: 'uppercase' | 'none' | null
}

const HelperText = styled.span<Props>`
  text-transform: ${props => props.transform ? props.transform.toString() : 'none'};
  font-family: Roboto;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
`

export default HelperText
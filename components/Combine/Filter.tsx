import styled from "styled-components"
import ButtonIconBookmark from "./ButtonIconBookmark"
import DropdownFilterNews from "./DropdownFilterNews"
import Actions from "../Base/Action"
import Link from "../Base/Link"

const WrapperButton = styled.div<{ showDropdownNews: Boolean; }>`
  position: relative;
  top: 7px;
  margin-right: ${props => props.showDropdownNews && '22px'};
`

type Props = {
  showButtonBookmark?: Boolean;
  showDropdownNews?: Boolean;
}

const Top5Actions = ({ showButtonBookmark = true, showDropdownNews = true } : Props) => {
  return (
    <Actions>
      { showButtonBookmark &&
      <WrapperButton
        showDropdownNews={showDropdownNews}
      >
        <Link href="/bookmark">
          <ButtonIconBookmark
            text="View BOOKMARK"
            active={true}
          />
        </Link>
      </WrapperButton> }
      { (showDropdownNews) &&
      <DropdownFilterNews/> }
    </Actions>
  )
}

export default Top5Actions
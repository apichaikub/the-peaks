import styled from "styled-components"
import ButtonIconBookmark from "./ButtonIconBookmark"
import DropdownFilterNews from "./DropdownFilterNews"
import Actions from "../Base/Action"
import Link from "../Base/Link"
import { FILTER } from "../../constants/news"

const WrapperButton = styled.div<{ showDropdownNews: Boolean; }>`
  position: relative;
  top: 7px;
  margin-right: ${props => props.showDropdownNews && '22px'};
`

export type TFilterProps = {
  filter?: {
    orderBy?: FILTER;
  };
}

interface Props extends TFilterProps {
  showButtonBookmark?: Boolean;
  showDropdownNews?: Boolean;
  onChangeOrderBy?(value: FILTER): void;
}

const Top5Actions = ({ showButtonBookmark = true, showDropdownNews = true, filter = {}, onChangeOrderBy } : Props) => {
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
      <DropdownFilterNews
        value={filter?.orderBy || FILTER.NEWEST}
        onChange={onChangeOrderBy}
      /> }
    </Actions>
  )
}

export default Top5Actions
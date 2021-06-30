import ButtonIcon from './ButtonIcon'
import Image from 'next/image'

export type Props = {
  active: Boolean;
  text: String;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ButtonIconBookmark = ({ active, text, onClick }: Props) => {
  const preIcon = active
    ? <Image src="/images/bookmarkon-icon@2x.svg" alt="Bookmark Icon" width={10.5} height={13.5} data-testid="t-img" role="active"/>
    : <Image src="/images/bookmarkoff-icon@2x.svg" alt="Bookmark Icon" width={10.5} height={13.5} data-testid="t-img" role="inactive"/>
  return (
    <ButtonIcon
      preIcon={preIcon}
      text={text}
      onClick={onClick}
      data-testid="t-btn"
    />
  )
}

export default ButtonIconBookmark
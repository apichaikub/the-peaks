import styled from "styled-components";
import NLink from 'next/link'

const CustomLink = styled.a`
  display: flex;
  text-decoration: none;
  font-family: Georgia;
`

type Props = {
  href: any;
  children: JSX.Element | JSX.Element[] | String;
}

const Link = ({ href, children }: Props) => {
  return (
    <NLink href={href} passHref>
      <CustomLink>
        { children }
      </CustomLink>
    </NLink>
  )
}

export default Link
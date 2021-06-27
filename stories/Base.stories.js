import { useState } from 'react'
import Button from '../components/Base/Button'
import Dropdown from '../components/Base/Dropdown'
import Input from '../components/Base/Input'
import InputSearch from '../components/Base/InputSearch'
import Logo from '../components/Base/Logo'
import Card from '../components/Base/Card'
import CardBody from '../components/Base/CardBody'
import CardFooter from '../components/Base/CardFooter'
import Detail from '../components/Base/Detail'
import HelperText from '../components/Base/HelperText'
import Line from '../components/Base/Line'
import Loading from '../components/Base/Loading'

export const _Button = () => (
  <Button>Button</Button>
)

export const _Dropdown = () => {
  const [selected, setSelected] = useState(null)
  const options = [
    {
      text: "Newest first",
      value: 1,
    },
    {
      text: "Oldest first",
      value: 2,
    },
    {
      text: "Most popular",
      value: 3,
    },
  ]
  const handleChange = (value) => {
    setSelected(value)
  }
  return (
    <Dropdown
      value={selected}
      options={options}
      onChange={handleChange}
    />
  )
}

export const _Input = () => (
  <Input placeholder="Search all news"/>
)

export const _InputSearch = () => (
  <InputSearch />
)

export const _Logo = () => (
  <Logo />
)

export const _Card = () => (
  <Card>
    <CardBody>
      Body
    </CardBody>
    <CardFooter>
      Footer
    </CardFooter>
  </Card>
)

export const _Detail = () => (
  <Detail>
    South Africa is the worst-affected country on the continent, with more than a quarter of all infections. But most countries have fewer than 1,000 infections, said Moeti, and the UN does not believe that severe cases are going undetected.

    Africa has recorded fewer than 6,000 deaths, according to an AFP tally, but just five countries account for 70% of these: South Africa, Algeria, Nigeria, Egypt and Sudan.

    In Africa, “the pandemic is still concentrated in and around capital cities but we are seeing more and more cases spread out into the provinces,” Moeti said.

    She said that in most countries on the continent, the virus entered capitals through international flights from Europe.

    Africa’s relatively young population compared to other continents, and in-built experience of dealing with disease outbreaks have been cited as reasons why Africa has not so far seen the death rates experienced on other continents.

    Moeti said early action by African countries had helped keep the numbers low - but constant vigilance was still needed.

    The US remains the worst-affected country worldwide, passing 2 million infections on Thursday. Spikes have been recorded in several states, including Arizona, which is confirming more than 1,000 cases daily.

    US president Donald Trump has introduced a policy stopping attendees at his rallies from suing the campaign or venue if they contract coronavirus at the events. A statement on the campaign website page for a rally in Tulsa says: “By clicking register below, you are acknowledging that an inherent risk of exposure to COVID-19 exists in any public place where people are present. By attending the Rally, you and any guests voluntarily assume all risks related to exposure to COVID-19 and agree not to hold Donald J. Trump for President, Inc.; BOK Center; ASM Global; or any of their affiliates … liable for any illness or injury.”

    Stocks fell sharply Thursday on Wall Street as coronavirus cases increased, deflating recent optimism for a quick economic recovery. The DOW Jones Industrial Average saw its worst day in weeks, closing down almost 7%. Asian shares were moderately lower on Friday as a result of the overnight rout.

    The US Federal Reserve warned on Wednesday that a second wave of infections risks prolonging the country’s recovery. The Fed predicted unemployment will still be at around 9% by December – close to the worst levels seen in the GFC – but Federal Reserve chair Jerome Powell said that a second outbreak could mean that figure was optimistic.
  </Detail>
)

export const _HelperText = () => (
  <HelperText transform="uppercase">
    Fri 12 Jun 2020 06.40 BST
  </HelperText>
)

export const _Line = () => (
  <Line/>
)

export const _Loading = () => (
  <Loading/>
)

const story = {
  title: 'Base'
}

export default story
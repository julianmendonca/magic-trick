import { useEffect, useState } from 'react'
import BackLogo from '../assets/cards/1B.svg'

export type Suits = 'H' | 'S' | 'C' | 'D' | ''

export type Values =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'J'
    | 'Q'
    | 'K'
    | 'A'
    | ''

export const useCard = ({
    value,
    suit,
}: {
    value: Values | ''
    suit: Suits | ''
}) => {
    const [frontCard, setFrontCard] = useState('')
    useEffect(() => {
        const asyncFunction = async () => {
            if (value && suit) {
                const svgIcon = await import(
                    `../assets/cards/${value + suit}.svg`
                )
                setFrontCard(svgIcon.default)
            }
        }
        asyncFunction()
    }, [value, suit])

    return {
        backCard: BackLogo,
        frontCard,
    }
}

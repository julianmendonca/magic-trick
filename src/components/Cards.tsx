import { Suits, useCard, Values } from '../hooks/useCard'
export const Card = ({
    value,
    suit,
}: {
    value: Values | ''
    suit: Suits | ''
}) => {
    const { backCard, frontCard } = useCard({ value, suit })

    if (!value || !suit) return <img alt={'card back'} src={backCard} />

    return <img alt={'font card'} src={frontCard} />
}

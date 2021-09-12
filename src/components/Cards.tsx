import { Suits, useCard, Values } from '../hooks/useCard'
export const Card = ({
    value,
    suit,
    style,
}: {
    value: Values | ''
    suit: Suits | ''
    style?: React.CSSProperties
}) => {
    const { backCard, frontCard } = useCard({ value, suit })

    if (!value || !suit)
        return <img style={style} alt={'card back'} src={backCard} />

    return <img alt={'font card'} src={frontCard} style={style} />
}

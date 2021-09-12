import { useEffect, useState } from 'react'
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition'
import { Card } from '../../components/Cards'
import { Suits, Values } from '../../hooks/useCard'
import {
    as,
    clubs,
    diamonds,
    eight,
    five,
    four,
    hearts,
    j,
    k,
    nine,
    q,
    seven,
    six,
    spades,
    suits,
    ten,
    three,
    two,
    values,
} from './constants'

const language = 'es-AR'

export const Home = () => {
    const { transcript, listening } = useSpeechRecognition()
    const [value, setValue] = useState<Values>('')
    const [suit, setSuit] = useState<Suits>('')
    useEffect(() => {
        if (!listening) SpeechRecognition.startListening({ language })
    }, [listening])
    useEffect(() => {
        transcript.split(' ').forEach((word) => {
            if (values.includes(word.toLowerCase())) {
                const correctValue = getValue(word)
                setValue(correctValue?.toUpperCase() as Values)
            }
            if (suits.includes(word.toLowerCase())) {
                const correctSuit = getSuit(word)
                setSuit(correctSuit?.toUpperCase() as Suits)
            }
        })
    }, [transcript])
    return (
        <div>
            <p>Value: {value}</p>
            <p>Suit: {suit}</p>
            <Card value={value} suit={suit} />
        </div>
    )
}

const getValue = (value: string) => {
    if (as.includes(value)) return 'a'
    if (two.includes(value)) return '2'
    if (three.includes(value)) return '3'
    if (four.includes(value)) return '4'
    if (five.includes(value)) return '5'
    if (six.includes(value)) return '6'
    if (seven.includes(value)) return '7'
    if (eight.includes(value)) return '8'
    if (nine.includes(value)) return '9'
    if (ten.includes(value)) {
        alert()
        return '10'
    }
    if (j.includes(value)) return 'j'
    if (q.includes(value)) return 'q'
    if (k.includes(value)) return 'k'
    return ''
}

const getSuit = (suit: string) => {
    console.log(suit)
    if (hearts.includes(suit)) return 'h'
    if (diamonds.includes(suit)) return 'd'
    if (spades.includes(suit)) return 's'
    if (clubs.includes(suit)) return 'c'
    return ''
}

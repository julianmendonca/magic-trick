import { Box } from '@material-ui/core'
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
    frezeCardWords,
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
    const [freezeCard, setFreezeCard] = useState(false)
    useEffect(() => {
        if (!listening) SpeechRecognition.startListening({ language })
    }, [listening])
    useEffect(() => {
        if (freezeCard) return
        transcript.split(' ').forEach((word) => {
            if (values.includes(word.toLowerCase())) {
                const correctValue = getValue(word)
                setValue(correctValue?.toUpperCase() as Values)
            }
            if (suits.includes(word.toLowerCase())) {
                const correctSuit = getSuit(word)
                setSuit(correctSuit?.toUpperCase() as Suits)
            }
            if (frezeCardWords.includes(word.toLowerCase())) setFreezeCard(true)
        })
    }, [transcript, freezeCard])
    return (
        <Box
            style={{
                backgroundColor: '#696366',
                width: '100%',
                height: '100%',
                position: 'fixed',
            }}
        >
            <Card
                style={{
                    height: '80%',
                    maxHeight: '500px',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                }}
                value={value}
                suit={suit}
            />
        </Box>
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

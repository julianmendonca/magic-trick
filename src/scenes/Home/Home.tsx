import { useEffect, useState } from 'react'
import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition'
import { suits, values } from './constants'

const language = 'es-AR'
export const Home = () => {
    const { transcript, listening } = useSpeechRecognition()
    const [value, setValue] = useState('')
    const [suit, setSuit] = useState('')

    useEffect(() => {
        if (!listening) SpeechRecognition.startListening({ language })
    }, [listening])

    useEffect(() => {
        transcript.split(' ').forEach((word) => {
            if (values.includes(word)) {
                setValue(word)
                console.log(`Value: ${word}`)
            }
            if (suits.includes(word)) {
                console.log(`Suit: ${word}`)

                setSuit(word)
            }
        })
    }, [transcript])
    return (
        <div>
            <p>Value: {value}</p>
            <p>Suit: {suit}</p>
        </div>
    )
}

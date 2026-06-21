import { useState } from 'react'
import './App.css'

const cards = [
  { question: "What is DNA?", answer: "genetic material", category: "basics" },
  { question: "What is RNA?", answer: "messenger molecule", category: "basics" },
  { question: "What is a genome?", answer: "complete genetic material", category: "basics" },
  { question: "What is bioinformatics?", answer: "computational biology", category: "field" },
  { question: "What is a gene?", answer: "DNA segment", category: "basics" },
  { question: "What is sequence alignment?", answer: "comparing sequences", category: "tools" },
  { question: "What is BLAST?", answer: "sequence search tool", category: "tools" },
  { question: "What is a SNP?", answer: "DNA variation", category: "advanced" },
  { question: "What is machine learning in bioinformatics?", answer: "pattern finding algorithms", category: "field" },
  { question: "What is a protein?", answer: "amino acid molecule", category: "basics" },
]

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [cardOrder, setCardOrder] = useState(cards.map((_, i) => i))
  const [streak, setStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const activeCard = cards[cardOrder[currentCard]]

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const resetCardState = () => {
    setIsFlipped(false)
    setGuess('')
    setFeedback('')
  }

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      resetCardState()
    }
  }

  const handleBack = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      resetCardState()
    }
  }

  const cleanText = (text) => {
    return text.trim().toLowerCase().replace(/[.,!?]/g, '')
  }

  const handleSubmitGuess = () => {
    const isCorrect = cleanText(guess) === cleanText(activeCard.answer)

    if (isCorrect) {
      setFeedback('correct')
      const newStreak = streak + 1
      setStreak(newStreak)
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak)
      }
    } else {
      setFeedback('incorrect')
      setStreak(0)
    }
  }

  const handleShuffle = () => {
    const shuffled = [...cardOrder]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = temp
    }
    setCardOrder(shuffled)
    setCurrentCard(0)
    resetCardState()
  }

  return (
    <div className="App">
      <h1>🧬 Bioinformatics Flashcards</h1>
      <p>Test your knowledge of bioinformatics terms!</p>
      <p>Total cards: {cards.length}</p>

      <div className="streak-box">
        <p>🔥 Current Streak: {streak}</p>
        <p>🏆 Longest Streak: {longestStreak}</p>
      </div>

      <div className="guess-box">
        <input
          type="text"
          placeholder="Type your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleSubmitGuess}>Submit Guess</button>
        {feedback === 'correct' && <p className="feedback correct">✅ Correct!</p>}
        {feedback === 'incorrect' && <p className="feedback incorrect">❌ Try again!</p>}
      </div>

      <div className={`card ${activeCard.category}`} onClick={handleFlip}>
        <p className="category-label">{activeCard.category.toUpperCase()}</p>
        {isFlipped
          ? <p>{activeCard.answer}</p>
          : <p>{activeCard.question}</p>
        }
        <p className="flip-hint">{isFlipped ? "Click to see question" : "Click to see answer"}</p>
      </div>

      <div className="nav-buttons">
        <button onClick={handleBack} disabled={currentCard === 0}>
          ⬅️ Back
        </button>
        <button onClick={handleNext} disabled={currentCard === cards.length - 1}>
          Next ➡️
        </button>
      </div>

      <button className="shuffle-button" onClick={handleShuffle}>🔀 Shuffle Cards</button>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'

const cards = [
  { question: "What is DNA?", answer: "A molecule that carries genetic information in living organisms.", category: "basics" },
  { question: "What is RNA?", answer: "A molecule that helps decode DNA instructions to build proteins.", category: "basics" },
  { question: "What is a genome?", answer: "The complete set of genetic material in an organism.", category: "basics" },
  { question: "What is bioinformatics?", answer: "A field that uses computer science and statistics to analyze biological data.", category: "field" },
  { question: "What is a gene?", answer: "A segment of DNA that codes for a specific protein or function.", category: "basics" },
  { question: "What is sequence alignment?", answer: "A method of arranging DNA sequences to identify regions of similarity.", category: "tools" },
  { question: "What is BLAST?", answer: "A tool used to compare a DNA or protein sequence against a database.", category: "tools" },
  { question: "What is a SNP?", answer: "A single nucleotide polymorphism — a variation at a single position in DNA.", category: "advanced" },
  { question: "What is machine learning in bioinformatics?", answer: "Using algorithms to find patterns in biological data like gene expression.", category: "field" },
  { question: "What is a protein?", answer: "A molecule made of amino acids that performs functions in the body.", category: "basics" },
]

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = () => {
    setIsFlipped(false)
    const randomIndex = Math.floor(Math.random() * cards.length)
    setCurrentCard(randomIndex)
  }

  return (
    <div className="App">
      <h1>🧬 Bioinformatics Flashcards</h1>
      <p>Test your knowledge of bioinformatics terms!</p>
      <p>Total cards: {cards.length}</p>

      <div className={`card ${cards[currentCard].category}`} onClick={handleFlip}>
        <p className="category-label">{cards[currentCard].category.toUpperCase()}</p>
        {isFlipped
          ? <p>{cards[currentCard].answer}</p>
          : <p>{cards[currentCard].question}</p>
        }
        <p className="flip-hint">{isFlipped ? "Click to see question" : "Click to see answer"}</p>
      </div>

      <button onClick={handleNext}>Next Card ➡️</button>
    </div>
  )
}

export default App
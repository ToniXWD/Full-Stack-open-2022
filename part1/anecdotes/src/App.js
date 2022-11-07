import { useState } from 'react'

const GenAnecdote = ({ index, arr }) => {

  return (
    <p>
      {arr[index]}
    </p>
  )
}

const Button = ({ func, text }) => (
  <button onClick={func}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));


  const SetRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const Vote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints);
  }

  const MaxIndex = points.indexOf(Math.max(...points));

  return (
    <div>
      <h2>Anecdotes of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <Button func={Vote} text="vote" />
      <Button func={SetRandom} text="next anecdote" />
      <h2>Anecdotes with most votes</h2>
      <p>{anecdotes[MaxIndex]}</p>
      <p>has {points[MaxIndex]} votes</p>
    </div>
  )
}
export default App
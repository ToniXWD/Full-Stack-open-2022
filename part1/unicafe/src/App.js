import { useState } from 'react'

const Button = ({ func, text }) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

const Statistics = ({ data }) => {
  const sum = data[0] + data[1] + data[2];
  if (sum == 0) {
    return (
      <div>
        No feedback has been received!
      </div>
    )
  }
  else {
    const ratio = Number(data[0] / sum*100).toFixed(2)
    const average = Number((data[0] - data[2]) / sum).toFixed(2)
    return (
      <div>
        <h1>statistics</h1>
        <table border="1">
          <tbody>
            <StatisticLine text="good" value={data[0]} />
            <StatisticLine text="neutral" value={data[1]} />
            <StatisticLine text="bad" value={data[2]} />
            <StatisticLine text="all" value={sum} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${ratio}%`} />
          </tbody>
        </table>
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let data = [good, neutral, bad]

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={() => setGood(good + 1)} text="good" />
      <Button func={() => setNeutral(neutral + 1)} text="neutral" />
      <Button func={() => setBad(bad + 1)} text="bad" />
      <p></p>
      <Statistics data={data} />
    </div>
  )
}

export default App
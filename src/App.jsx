const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const Content = (props) =>{

  return(
    <div>
      <Part name={props.name1} exercise={props.exercise1} />
      <Part name={props.name2} exercise={props.exercise2}  />
      <Part name={props.name3} exercise={props.exercise3}  />
    </div>
  )
}

const Total =(props) => {
  return(
    <div>
      <p>Number of exercises {props.name} {props.one+props.two+props.three}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content name1={part1} name2={part2} name3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  )
}

export default App
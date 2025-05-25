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
  console.log(props)
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
      <p>Number of exercises {props.one+props.two+props.three}</p>
    </div>
  )
}


const App = () => {
 const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Content name1={part1.name} name2={part2.name} name3={part3.name} exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
      <Total one={part1.exercises} two={part2.exercises} three={part3.exercises} />
    </div>
  )
}

export default App
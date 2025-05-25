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
      <p>Number of exercises {props.one+props.two+props.three}</p>
    </div>
  )
}


const App = () => {
 const course = 'Half Stack application development'
 const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}/>
      <Content name1={parts[0].name} name2={parts[1].name} name3={parts[2].name} exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises}/>
      <Total one={parts[0].exercises} two={parts[1].exercises} three={parts[2].exercises} />
    </div>
  )
}

export default App
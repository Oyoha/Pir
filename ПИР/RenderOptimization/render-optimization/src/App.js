import './App.css';
import React from "react"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.PureComponent {

//   state = {
//     words: ['React']
//   }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate")
  // }

  // onClick = () => {
  //   this.setState({count: 1})
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextState.count === this.state.count) return false
  //   return true
  // }

//   onClick = () => {
//     const words = this.state.words
//     // words.push("Vue")
//     this.setState({words: words.concat("Vue")})
//   }

//   render() {
//     return (
//       <div className='App'>
//         <header className=''>
//           {/* <p>{this.state.count}</p> */}
//           {/* <CountView count={this.state.count}/>
//           <CountViewMemo count={this.state.count}/> */}
//           {/* <ListOfWords words={this.state.words}/> */}
//           {/* <button onClick={this.onClick}>Click</button> */}
//           <A/>
//           <B/>
//         </header>
//       </div>
//     )
//   }
// }

// class Input extends React.PureComponent {
//   renderCount = 0

//   render(){
//     this.renderCount++

//     return(
//       <div>
//         <input onChange={this.props.onChange}/>
//         <p>Input component was rendered : {this.renderCount}</p>
//       </div>
//     )
//   }
// }

const Input = React.memo(({onChange})=> {
  const render  = React.useRef(0)
  render.current++

  return(
    <div>
      <input onChange={onChange}/>
      <p>Input component was rendered : {render.current}</p>
    </div>
  )
})

const OldApp = () => {
  const {firstValue, setFirstValue} = React.useState()
  const {secondValue, setSecondValue} = React.useState()

  return(
    <>
    <div>
      <h3>Using callback hook</h3>
      <Input onChange={React.useCallback(e => setFirstValue(e.target.value),[])} />
      <p>firstValue: {firstValue}</p>
    </div>
    <div>
    <h3>Without using callback hook</h3>
    <Input onChange={e => setSecondValue(e.target.value)} />
    <p>secondValue: {secondValue}</p>
  </div>
  </>
  )
}



class A  extends React.Component {
  state ={ 
    value: ""
  }

  onChange = (e) => {
    this.setState({value:e.target.value})
  }

  render() {
    return(
      <>
      <Input onChange={this.onChange} />
      <p>Value is : {this.state.value}</p>
      </>
    )
  }
}

class B  extends React.Component {
  state ={ 
    value: ""
  }

  onChange = (e) => {
    this.setState({value:e.target.value})
  }

  render() {
    return(
      <>
      <Input onChange={ e => this.onChange(e)} />
      <p>Value is : {this.state.value}</p>
      </>
    )
  }
}

// const ListOfWords = React.memo(({words}) => {
//   return <o>{words.join(",")}</o>
// })

// const CountViewMemo = React.memo (({count}) => {
//   console.log("render memo")
//   return <p>{count}</p>
// })

// const CountView = ({count}) => {
//   console.log("render")
//   return <p>{count}</p>
// }

const {Consumer, Provider} = React.createContext()

const App = () => {
  const {count, setCount} = React.useState()
  const appCount = () => setCount(count + 1)

  return(
  <Provider value={{count: count, appCount: appCount}}>
    <div style={{textAlign:"center", marginTop: 50}}>
      <div style={{maxWidth: 500, margin: "0 auto"}}>
        Хаюшки
      </div>
      <div>
        <Button/>
      </div>
    </div>
  </Provider>
  )
}

const Button = () => {
  return(
    <div>
        asd
    </div>
  )
}
export {Consumer as MyConsumer}
export default App;

import logo from './logo.svg';
import './App.css';

function App() {
var name="Dipto"

const products=[
  {name: 'ad' ,price:'$100'},
  {name: 'gn' ,price:'$100'},
  {name: 'dh' ,price:'$100'}
]

var style={
  color: 'red'
}

  return (
    <div className="App">
      <header className="App-header">
        
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>

        
        
        

        
      
      </header>
    </div>
  );
}

function Product(props){

  const productStyle={
    margin : '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'grey',
    margin: '20px',
    height: '200px',
    width: '200px',
    flaot: 'left'

  }
  return(
    <div style={productStyle}>
      <h3>name:{props.name} </h3>
      <h4>{props.price}</h4>
      <button>shop now</button>
    </div>
  )
}


function Person(){

  const style={
    border: '2px solid red',
    margin: '10px'
  }

  return (
    <div style={style}>
      <h1>name : sk</h1>
      <h2>occupassion : student</h2>

    </div>

  )

  
}

export default App;

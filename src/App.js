import logo from './logo.svg';
import './App.css';

function App() {
    var person= {
        name : "dr laksndfl",
        job: "doctor"
    }
var style={
    color :'red',
}

var persons=['asd','wer','ghj']


var product=[
    {name: 'photoshop',price:'$60'},
    {name: 'meatshop',price:'$120'},
    {name: 'pdf reader',price:'$580'},
    {name: 'pwindowsp',price:'$90'},
    {name: 'python',price:'$790'}


]
    return(

       <div className='App'>
           <header className='App-header'>
           <h1>my heading:{person.name} {2+3}</h1>

           <p style={{color:'red',backgroundColor:'yellow'}}>this is the paragraph of {person.job}</p>


            <Products name={product[0].name} price={product[0].price}></Products>
            <Products name={product[1].name} price={product[1].price}></Products>
            <Products name={product[2].name} price={product[2].price}></Products>

            <Person name={persons[0]} ></Person>
            <Person name={persons[1]}></Person>
            <Person name={persons[2]}></Person>

           </header>
           
       </div>

    );
    
}

function Products(props){
    const productStyle={
        border: '1px solid grey',
        borderRadius: '5px',
        float: 'left',
        backgroundColor: 'lightgray',
        height: '200px',
        width: '200px',
        margin: '10px'

    }
    return(
        <div style={productStyle}>
            <h3>{props.name} </h3>
            <h5>{props.price}</h5>
            <button>Buy Now</button>
        </div>
    )
}




function Person(props){
    const personStyle={
        border: '1px solid yellow',
        margin: '10px'
    }
    return(
        <div style={personStyle}>
            <h1>Name : {props.name}</h1>
            <h2>this is 2nd paragraph</h2>
        </div>
        
    )
   
}





  


export default App;

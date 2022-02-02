import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    var person= {
        name : "dr laksndfl",
        job: "doctor"
    }
var style={
    color :'red',
}

var persons=['asd','wer','ghj','eee','hhh','ttt','kkk'];


var product=[
    {name: 'photoshop',price:'$60'},
    {name: 'meatshop',price:'$120'},
    {name: 'pdf reader',price:'$580'},
    {name: 'pwindowsp',price:'$90'},
    {name: 'python',price:'$790'}
]
 
    // const productNames=product.map(pd => pd.name);
    // console.log(productNames);


    // const personNames = persons.map(pn => pn);
    // console.log(personNames);
    return(

       <div className='App'>
           <header className='App-header'>
           <h1>my heading:{person.name} {2+3}</h1>

           <p style={{color:'red',backgroundColor:'yellow'}}>this is the paragraph of {person.job}</p>
        <Counter></Counter>
        <Users></Users>
           <ul>
               
               {
                    persons.map(pn =><li>{pn}</li>)
                }
              
             </ul>
                
               <div>
               {
                   product.map(pd => <Products product={pd.name} price={pd.price}> </Products>)
                   
               }
               </div>
               
               
            
            {/* <Products product={product[0].name} price={product[0].price}></Products>
            <Products product={product[1].name} price={product[1].price}></Products>
            <Products product={product[2].name} price={product[2].price}></Products> */}

            <Person name={persons[0]} ></Person>
            <Person name={persons[1]}></Person>
            <Person name={persons[2]}></Person>

           </header>
           
       </div>

    );
    
}

function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    })

    return(
        <div>
            <h3> dynamic users : {users.length}</h3>
            <ul> 
               {

                   users.map(uf => <li>{uf.name}</li>)

               }
               </ul>
        </div>
    )
}

function Counter(){
     const [count ,setCount] =useState(0);
     const handleIncrease = () =>setCount(count + 1); 
     const handleDecrease = () =>setCount(count - 1);
        
     return(
         <div>
             <h1> Count : {count}</h1>
             <button onClick={handleDecrease}>Decrease</button>
             <button onClick={handleIncrease}>Increase</button>

         </div>
     )
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
            <h3>{props.product} </h3>
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

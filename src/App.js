import './App.css';
//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App =() =>{
 const [monster, setMonster]= useState([])
 const [searchField, setSearchField]= useState('')
 const [filteredMonster, setFilteredMonster]= useState(monster)
 
 useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> setMonster(users))
 },[])

 useEffect(()=>{
  const newfilteredMonsters= monster.filter((monsters)=> {
    return monsters.name.toLocaleLowerCase().includes(searchField) 
     })
     setFilteredMonster(newfilteredMonsters)
 },[monster, searchField])
      

    const onSearchChange=(event)=>{
              const searchField = event.target.value.toLocaleLowerCase(); 
            setSearchField(searchField)
            }
            
  return(
    <div className="App">
      <SearchBox className='search-box' type='search' placeholder='search monster' 
      onChange={onSearchChange} />
      <CardList monsters={filteredMonster}/>
     </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       monster:[],
//       searchField:''
//     };
//   }
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>response.json())
//   .then((users)=>
//   this.setState(
//     ()=>{return {monster: users}
//   },
//   ()=>{
//     console.log(this.state);
//   }
//   )
//   ) 
// }

// onSearchChange=(event)=>{
//     const searchField = event.target.value.toLocaleLowerCase(); 
//   this.setState(()=>{  return{ searchField }});
//   }

//   render(){  
//     const {monster, searchField}= this.state
//     const {onSearchChange} = this
//       const filteredMonsters= monster.filter((monsters)=> {
//         return monsters.name.toLocaleLowerCase().includes(searchField);
//          })

//     return(     
//       <div className="App">
//       <SearchBox className='search-box' type='search' placeholder='search monster' 
//       onChange={onSearchChange} />
//       <CardList monsters={filteredMonsters}/>
//      </div>
//     )
//   }
// }

export default App;


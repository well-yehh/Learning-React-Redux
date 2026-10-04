function App(){

  let foodItems = ['Diet coke','Pizza','Butter Chicken','Fries','Momos'];

  return <>
    <h1>Healthy Foods</h1>
    <ul class="list-group">  {/* Using map for looping the elements  */} 
      {foodItems.map(item => <li class="list-group-item">{item}</li>)}
      
      
    </ul>
  </>
}

export default App
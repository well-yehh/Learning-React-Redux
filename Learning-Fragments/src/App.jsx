function App(){

  let foodItems = ['Diet coke','Pizza','Butter Chicken','Fries','Momos'];

  return <>
    <h1>Healthy Foods</h1>
    <ul className="list-group">  {/* Using map for looping the elements  */} 
      {foodItems.map(item => <li  key={item}className="list-group-item">{item}</li>)}
      
      
    </ul>
  </>
}

export default App
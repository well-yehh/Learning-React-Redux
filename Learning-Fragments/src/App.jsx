import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/errorMessage";
function App(){

  let foodItems = ['Diet coke','Pizza','Butter Chicken','Fries','Momos'];
  // let foodItems = [];


  {/* conditional Rendering :-> if-else conditions*/}
  // if (foodItems.length === 0){
  //   return <h3>I'm still hungr</h3>
  // }
  let emptyMessage = foodItems.length ===0 ? <h3>I'm still hungr</h3> : null; {/* conditional Rendering :-> Ternary Operator*/}

  return <>
    <h1>Healthy Foods</h1>
    {/* {emptyMessage}; */}
    <ErrorMessage foodList = {foodItems}></ErrorMessage>
    <FoodItems foodList = {foodItems}></FoodItems>
  </>
}

export default App;
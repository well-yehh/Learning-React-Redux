import Item from "./item";

const FoodItems = ({foodList}) => {
  return (
    <ul className="list-group">
        {/* Using map function to loop the elements */}
      {foodList.map((item) => (
            <Item key = {item} foodItems = {item}/>
      ))}
    </ul>
  );
};

export default FoodItems;
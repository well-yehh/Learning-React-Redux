import Heading from "./component/heading";
import Ctime from "./component/CurrentTime";
import Slogan from "./component/clockSlogan";
import './App.css'

function App(){
  return(
    <center >
      <Heading />
      <Slogan />
      <Ctime />
    </center>
  );

};
export default App;
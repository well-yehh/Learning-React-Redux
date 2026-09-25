import KgButton from "./kgButton"; //when default export
import { Running } from "./kgButton"; //when without default export 
import Hello from "./hello";
import Random from "./random";

// we have to close the tag always or we can make self closing tag but close with /

function App(){ //component of react
  return <div>
    <h1>
      Hello Worlddd
    </h1>
    <KgButton></KgButton>
    <Running></Running>
    <Hello></Hello>
    <Random/>  
    <Random></Random>
    <Random/>
  </div> 
  
}
export default App;
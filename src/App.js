import styled from "styled-components";
import Dasbord from "./dashbord/Dasbord"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <AppC>
    <Dasbord/>
    </AppC>
    
    </BrowserRouter>
 
  );
}

export default App;



export const AppC=styled.section`
margin:0;
padding:0
`
// function App()
// {
//     return <h1>I am App Component</h1>
// }
// export default App

import Navbar from "./components/Navbar";
import Fbc from "./alltopics/01_typesofcompon/Fbc";
import Cbc from "./alltopics/01_typesofcompon/Cbc";
import StatesInFbc from "./alltopics/02_states/StatesInFbc";
import CounterInFbs from "./alltopics/02_states/CounterInFbc";
import StatesInCbc from "./alltopics/02_states/StatesInCbc";
import Parent1 from "./alltopics/03_props/Parent1";
import Parent2 from "./alltopics/03_props/Parent2";
import Parent3 from "./alltopics/03_props/Parent3";
import Parent4 from "./alltopics/03_props/Parent4";
import Parent5 from "./alltopics/03_props/Parent5";
import DrillParent1 from "./alltopics/04_propsDrilling/DrillParent1";
import MyContext from "./alltopics/06_context/MyContext";
import ParentComponent from "./alltopics/07_context2/ParentComponent";
import Context2 from "./alltopics/07_context2/Context2";
import Cart from "./alltopics/07_context2/Cart";
import InlineCSS from "./alltopics/08_reactCSS/InlineCSS";
import Card from "./alltopics/08_reactCSS/Card";
import ControlledForms1 from "./alltopics/09_controlledforms/ControlledForms1";
import TodoWrapper from "./Task1/TodoWrapper";
import UncontrolledForms from "./alltopics/10_uncontrolledForms/UncontrolledForms";

const App= () => 
{

    return (
        <div>
            {/* <h1>Hello React</h1> */}
            {/* <h2>Hello</h2> */}
            {/* <Navbar/> */}
            {/* <Navbar/>     */}
            {/* <Navbar/>  */}
            {/* <Fbc/> */}
            {/* <Cbc/> */}
            {/* <StatesInFbc/> */}
            {/* <CounterInFbs/> */}
            {/* <StatesInCbc/> */}
            {/* <Parent1/> */}
            {/* <Parent2/> */}
            {/* <Parent3/> */}
            {/* <Parent4/> */}
            {/* <Parent5/> */}
            {/* <DrillParent1/> */}
            {/* <ParentA/> */}
            {/* <MyContext/> */}
            {/* <ParentComponent/> */}
            {/* 
            <Context2>
                <ParentComponent/>
                <Cart/>
            </Context2> */}

            {/* <InlineCSS/> */}
            {/* <Card/> */}
            {/* <ControlledForms1/> */}
            {/* <TodoWrapper/> */}
            <UncontrolledForms/>

         </div>
    );
};
export default App
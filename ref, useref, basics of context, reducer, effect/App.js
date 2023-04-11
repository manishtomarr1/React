import UseReducer from "./components/useRedu/UseReducer";
import NoteContext from "./context/notes/noteContext";
import UnderstandContext from "./understandContext/UnderStandContext";
import ForwordRef from "./useRef/ForwordRef";
import UnControlled from "./useRef/UnControlled";
import UnderstandForwardRef from "./useRef/UnderStandForwardRef";
function App() {
  return (
    <>
      <NoteContext.Provider value={{ name: "manish", class: "5b" }}>
        {/* <UseReducer />
        <UnderstandContext /> */}
        {/* <UnControlled /> */}
       <ForwordRef />
      </NoteContext.Provider>
    </>
  );
}

export default App;
//ab jo note state k andr hai, wo jo bhi component app.js mae use hore hai unke andr or unke
//andar jo component hai un sbhi ko uplabdh ho jayein.

//forward ref kyun use krte hain?
//jb form or button alag alag component mae ho then we use forward ref. jaise yhan form jo hai 
//wo understandForwardref mae hai or button Forwardref mae hai.

import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";

function App() {
  const Person1 = {
    first: "roman",
    last: "sharma",
  };
  const nameList = [
    {first: "amit",
    last: "sharma"},
  
  {first: "ami",
    last: "thakur"
  },
  {first: "amt",
  last: "thakur"
},
{first: "mit",
last: "thakur"
},
{first: "rit",
last: "thakur"
}

]
  console.log(nameList)
  return (
    <>
      <div className="App">
        <Greet name="amit" number={30} loggedIn={false} />
        <Person name1={Person1}/>
        <PersonList names={nameList}  />
      </div>
    </>
  );
}

export default App;

import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(detail){
  return <Card 
  key = {detail.id}
  emoji={detail.emoji}
  name={detail.name}
  meaning={detail.meaning}/>
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCard)}
      </dl>

         {/* <Card 
         emoji={emojipedia[0].emoji}
         name={emojipedia[0].name}
         meaning={emojipedia[0].meaning}
         />
        
        <Card 
         emoji={emojipedia[1].emoji}
         name={emojipedia[1].name}
         meaning={emojipedia[1].meaning}
         />
        
        <Card 
         emoji={emojipedia[2].emoji}
         name={emojipedia[2].name}
         meaning={emojipedia[2].meaning}
         /> */}
    </div>
  );
}

export default App;

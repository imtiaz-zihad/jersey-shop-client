import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import JersyCard from "./componentes/JersyCard";
import { useState } from "react";

function App() {
  const loadedjersys = useLoaderData();
  const [jersys, setJersys] = useState(loadedjersys)

  return (
    <>
      <h1 className="text-3xl font-extrabold">
        Jersey Shop 
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {jersys.map((jersy) => (
          <JersyCard 
          key={jersy._id} 
          jersy={jersy}
          jersys={jersys}
          setJersys={setJersys}
          ></JersyCard>
        ))}
      </div>
      <div>
        <Link to='/addJersy'>
        <button className="btn btn-info">Add Jersey</button>
        </Link>
      </div>
    </>
  );
}

export default App;

import { useState } from "react"

export default function Batsman(){

    const handleRunsOne= () =>{
        let newRun = runs+1;
        setRuns(newRun);
    }

    const handleRunsFour= () =>{
        let newRun = runs+4;
        let updateFours = fours+1;
        setfours(updateFours);
        setRuns(newRun);
    }

    const handleRunsSix= () =>{
        let newRun = runs+6;
        let updateSixes = sixes+1;
        setsixes(updateSixes);
        setRuns(newRun);
    }

    const[sixes,setsixes] = useState(0);
    const[fours,setfours] = useState(0);
    const[runs,setRuns] = useState(0);
    return (
        <div>
            <h2>Player : Bangla Batsman</h2>
            <h3>Score : {runs}</h3>
            <p>Sixes : {sixes}</p>
            <p>Fours : {fours}</p>
            {
                runs > 50 && <p>You scored 50+</p>
            }
            <button onClick={handleRunsOne}>One</button>
            <button onClick={handleRunsFour}>Four</button>
            <button onClick={handleRunsSix}>Six</button>
        </div>
    )
}
import react,{useState} from "react";
import JournalEntryBlock from "./JournalEntryBlock";
import JournalEntryForum from "./JournalEntryForum";

function JournalPage(){

    const [JournalEntrys, updateJournalEntrys] = useState([]);

    const handleSubmit = entry => {
        console.log(entry);
        var newJournalEntrys = JournalEntrys.slice()
        newJournalEntrys.push(entry)
        updateJournalEntrys(newJournalEntrys);
        
    }
    
    const deleteEntry = key => {
        console.log(key)
        const newJournalEntrys = [...JournalEntrys].filter(element => element.key !== key)
        updateJournalEntrys(newJournalEntrys);
        
    }

    return (
        <div className="journal-page">
            Journal page content here!
            <JournalEntryBlock entrys={JournalEntrys} deleteEntry={deleteEntry}/>
            <JournalEntryForum onSubmit={handleSubmit}/>
        </div>
    )
}

export default JournalPage;
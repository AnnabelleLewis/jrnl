import react,{useState} from "react";
import EntryTypeSelector from "./EntryTypeSelector";

function JournalEntryForum(props){

    const [inputText,setInputText] = useState("");
    const [entryType,setEntryType] = useState("");

    const handleSubmit = entry => {
        entry.preventDefault();
        if(entryType == null || entryType === ""){
            setEntryType("note");
        }
        var entryData = {
            text:inputText,
            entryType:entryType,
            key:Date.now()
        }
        
        props.onSubmit(entryData)
    };

    

    return(
        <form className="journal-entry-forum" onSubmit={handleSubmit}>
            <EntryTypeSelector onChange={setEntryType}/>
            <input placeholder="Add an entry to your journal" onChange={
                event => setInputText(event.target.value)
            }/>
            <button onClick={handleSubmit}>Default text</button>
        </form>
    )
}

export default JournalEntryForum;
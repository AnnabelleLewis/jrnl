import react,{useState} from "react";

function JournalEntryForum(props){

    const [inputText,setInputText] = useState("");


    const handleSubmit = entry => {
        entry.preventDefault();
        var entryData = {
            text:inputText,
            entryType:"note",
            key:Date.now()
        }
        
        props.onSubmit(entryData)
    };

    return(
        <form className="journal-entry-forum" onSubmit={handleSubmit}>
            <input placeholder="Add an entry to your journal" onChange={
                event => setInputText(event.target.value)
            }/>
            <button onClick={handleSubmit}>Default text</button>
        </form>
    )
}

export default JournalEntryForum;
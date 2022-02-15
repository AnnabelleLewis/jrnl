import react, {useState} from "react";

function JournalEntry(props) {
   
    return (
        <div className="journal-entry">
            {String(props.text)}
        </div>
    )
}

export default JournalEntry;
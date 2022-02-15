import react, {useState} from "react";

function JournalEntry(entryData) {
    
    return (
        <div className="journal-entry">
            {entryData.text}
        </div>
    )
}

export default JournalEntry;
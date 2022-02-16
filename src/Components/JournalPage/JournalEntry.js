import react, {useState} from "react";
import {AiOutlineMinus} from "react-icons/ai"
function JournalEntry(props) {
   
    const entryTypeSymbolMap = {
        "note":<AiOutlineMinus />
    }

    return (
        <div className="journal-entry">
            {entryTypeSymbolMap[props.entryType]}
            {String(props.text)}
            
        </div>
    )
}

export default JournalEntry;
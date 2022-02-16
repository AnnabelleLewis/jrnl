import react, {useState} from "react";
import {AiOutlineMinus, AiOutlineCloseCircle} from "react-icons/ai"
import {BsDot,BsRecord} from "react-icons/bs"
function JournalEntry(props) {
   
    const entryTypeSymbolMap = {
        "note":<AiOutlineMinus />,
        "task":<BsDot />,
        "event":<BsRecord />
    }

    return (
        <div className="journal-entry">
            {entryTypeSymbolMap[props.entryType]}
            {String(props.text)}
            
            {/* <AiOutlineCloseCircle onClick={props.onDelete(props.entryKey)}/> */}
            <button onClick={() => props.onDelete(props.entryKey)}>Delete entry</button>
            
        </div>
    )
}

export default JournalEntry;
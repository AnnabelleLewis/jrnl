import react, {useState} from "react";
import JournalEntry from "./JournalEntry";

function JournalEntryBlock (props) {

    

    return (
        <div className="journal-entry-block">
            {props.entrys.map(entry => (
                <JournalEntry key={entry.key} text={entry.text} entryType={entry.entryType}/>
            ))}
        </div>
    );
}

export default JournalEntryBlock;
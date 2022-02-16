import react, {useState} from "react";
import JournalEntry from "./JournalEntry";

function JournalEntryBlock (props) {

    

    return (
        <div className="journal-entry-block">
            {props.entrys.map(entry => (
                <JournalEntry 
                    key={entry.key} 
                    text={entry.text} 
                    entryKey={entry.key} 
                    entryType={entry.entryType} 
                    onDelete={props.deleteEntry}
                />
            ))}
        </div>
    );
}

export default JournalEntryBlock;
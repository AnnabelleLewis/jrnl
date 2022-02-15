import react, {useState} from "react";
import JournalEntry from "./JournalEntry";

function JournalEntryBlock ({entrys}) {
    console.log(entrys);
    return (
        <div className="journal-entry-block">
            {entrys.map(entry => (
                <JournalEntry key={entry.key} text={entry.text}/>
            ))}
        </div>
    );
}

export default JournalEntryBlock;
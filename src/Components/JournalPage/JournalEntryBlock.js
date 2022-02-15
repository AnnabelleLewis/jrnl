import react, {useState} from "react";
import JournalEntry from "./JournalEntry";

function JournalEntryBlock (entrys) {
    return (
        <div className="journal-entry-block">
            {entrys.map(entry => {
                <JournalEntry entryData={entry}/>
            })}
        </div>
    );
}

export default JournalEntryBlock;
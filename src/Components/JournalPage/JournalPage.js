import react from "react";
import JournalEntryBlock from "./JournalEntryBlock";

function JournalPage(){

    const TempJournalData = [
        {
            text:"Journal entry #1",
            key:"1"
        },
        {
            text:"Journal entry #2",
            key:"2"
        }
    ]

    

    return (
        <div className="journal-page">
            Journal page content here!
            <JournalEntryBlock entrys={TempJournalData}/>
        </div>
    )
}

export default JournalPage;
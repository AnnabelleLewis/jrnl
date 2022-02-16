import react from "react"

function EntryTypeSelector(props){
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
    return(
        <select name="entry-type-selector" onChange={(e) => handleChange(e)}>
            <option value={"note"}>note</option>
            <option value={"event"}>event</option>
            <option value={"task"}>task</option>
        </select>
    );
}

export default EntryTypeSelector;
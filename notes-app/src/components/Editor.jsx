import PropTypes from 'prop-types';
import {useState } from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import 'react-mde/lib/styles/css/react-mde-all.css';

export default function Editor({ tempNoteText, updateNote }) {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="pane editor">
            <ReactMde
                value={tempNoteText}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
Editor.propTypes = {
    tempNoteText: PropTypes.string.isRequired,
    updateNote: PropTypes.func.isRequired,


};
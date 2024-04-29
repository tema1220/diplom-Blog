import 'D:/Docs/TMS/react/reactt/my-react/src/components/Textarea/TextArea.css'
import { ITextArea } from "../../types/interface";


export default function TextArea({ rows, cols }: ITextArea) {

    return (
        <div className="textareablock">
            <form>
                <div className="title">Text</div>
                <textarea
                    placeholder="Add your text..."
                    id="story"
                    name="story"
                    rows={rows}
                    cols={cols}>
                </textarea>
        </form>
        </div >

    )
}




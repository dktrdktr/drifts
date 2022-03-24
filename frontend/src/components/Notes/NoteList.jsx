import NoteListItem from "./NoteListItem";
import Heading from "../Heading";
import { NewspaperIcon } from "@heroicons/react/outline";
import { StateContext } from "../../providers/StateProvider";
import { useContext } from "react";

const NoteList = ({ handleNoteClick }) => {
  const { notebooks, currentNotebookId, setState } = useContext(StateContext);

  let renderNotes = null;

  if (currentNotebookId !== null) {
    let notebook = notebooks.find(
      (notebook) => notebook.id === currentNotebookId
    );

    renderNotes = notebook.notes.map((item) => {
      return (
        <NoteListItem
          key={item.id}
          title={item.title}
          onClick={() => {
            setState((prev) => ({
              ...prev,
              text: item.content,
              currentNote: item,
            }));
            handleNoteClick();
          }}
        />
      );
    });
  }

  return (
    <div className="w-1/2">
      <Heading title={"Notes"} Icon={NewspaperIcon} />
      {renderNotes}
    </div>
  );
};

export default NoteList;

import type { Board } from "./types/kanban";

export const initialBoard: Board = {
  columns: [
    { id: "todo", title: "To Do", tasksId: ["1", "2"] },
    { id: "inprogress", title: "In Progress", tasksId: [] },
    { id: "done", title: "Done", tasksId: [] },
  ],
  tasks: {
    "1": { id: "1", title: "Create Project" },
    "2": { id: "2", title: "Create Types" },
  },
};

export type Task = {
  id: string;
  title: string;
  description?: string;
};
export type Column = {
  id: string;
  title: string;
  tasksId: string[];
};
export type Board = {
    columns:Column[];
    tasks: Record<string, Task>;
}

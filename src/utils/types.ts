export interface TodoItemType {
  id: string;
  name: string;
  description?: string;
}

export type TodoList = TodoItemType[];

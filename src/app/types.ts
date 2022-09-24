export default interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface List {
  title: string;
  items: Task[];
}

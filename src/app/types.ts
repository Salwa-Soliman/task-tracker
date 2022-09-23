export default interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  dayCreated: string;
  time: string;
}

export interface List {
  title: string;
  items: Task[];
}

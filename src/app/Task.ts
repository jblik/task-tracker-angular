export interface Task {
    // nullable/optional so that when creating them I don't need to specify id
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}
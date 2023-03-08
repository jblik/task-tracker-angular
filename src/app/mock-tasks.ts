import { Task } from "./Task"
// Contains mock tasks to mock an API
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Check Emails',
        day: 'March 10th',
        reminder: true
    },
    {
        id: 2,
        text: 'Dentist Appointment',
        day: 'March 11th',
        reminder: true
    },
    {
        id: 3,
        text: 'Clean House',
        day: 'March 9th',
        reminder: false
    },
    {
        id: 4,
        text: 'Call Mom',
        day: 'March 20th',
        reminder: true
    },
    {
        id: 5,
        text: 'Water Plants',
        day: 'March 31st',
        reminder: false
    }
]
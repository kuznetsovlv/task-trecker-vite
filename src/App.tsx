import {useCallback, useState} from 'react'
import './App.css'

import type {Task} from './types.ts'
import {TaskCreator} from './components'

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = useCallback((task: Task) => setTasks(tasks => [...tasks, task]), [])

    console.log(tasks);

    return <div><TaskCreator onAddTask={handleAddTask} /></div>

}

export default App

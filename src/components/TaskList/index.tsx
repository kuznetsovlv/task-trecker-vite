import React from 'react';

import type {Task} from '../../types.ts'
import TaskItem from './TaskItem.tsx';

interface TaskListProps {
    tasks: Task[];
    onChange(task: Task): void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onChange}) => {
    return <ul>
        {tasks.map((task) => (<TaskItem key={task.id} {...task} onChange={onChange} />))}
    </ul>
}

export default TaskList;
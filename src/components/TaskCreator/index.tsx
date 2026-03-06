import React, {memo, useState} from 'react';
import {v4} from 'uuid'

import type {Task} from '../../types.ts'

interface TaskCreatorProps {
    onAddTask(task: Task): void;
}

const TaskCreator: React.FC<TaskCreatorProps> = memo(({onAddTask}) => {
    const [text, setText] = useState<string>('');

    return <div>
        <input type="text" value={text} onChange={({target: {value}}) => setText(value) }/>
        <input type="button" value="Add" disabled={!text} onClick={() => {
            onAddTask({id: v4(), text, completed: false});
            setText('');
        }}/>
    </div>
});

export default TaskCreator;
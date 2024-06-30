import React, { useState } from 'react'
import ItemForm from './ItemForm'
import TaskItem from './TaskItem'
import { useTasks } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import usePagination from '../utils/usePagination';

const TaskPage = () => {
    const { state, stateUpdaters } = useTasks();
    const { tasks } = state;
    const navigate = useNavigate();
    const { currentPage, currentItems, handlePageChange } = usePagination(tasks, 10);

    return (
        <>
            <div className='text-center text-xl mb-8'>Agenda 2024</div>
            <ItemForm onCreate={stateUpdaters.addTask} title={"Mi tareas"} />
            <h2 className='text-xl mb-5 text-center'>{tasks.length} Tareas</h2>
            {currentItems.map((task) => (
                <TaskItem
                    key={task.id}
                    item="task"
                    onDelete={() => stateUpdaters.deleteTask(task.id)}
                    title={task.text.title}
                    onEdit={() => navigate(`/edit/${task.id}`, { state: { task } })}
                    counter={task.subtasks.length} />
            ))}

            <Pagination
                totalItems={tasks.length}
                itemsPerPage={10}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default TaskPage
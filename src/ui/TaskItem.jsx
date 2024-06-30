import { Icon } from "@iconify/react";


const TaskItem = ({ item, title, onDelete, onEdit, counter }) => {
  const handleClick = () => {
    if (item === 'task') {
      onEdit();
    }
  };

  return (
    <div className="flex justify-between items-center mb-2 p-4 bg-gray-50 rounded">
      <div className="flex items-center cursor-pointer" onClick={handleClick}>
        <span className="inline-flex w-10 h-10 mr-3 justify-center items-center bg-purple-50 rounded">
          <Icon icon="hugeicons:task-01" style={{ color: '#0000ff' }} width='24' />
        </span>
        <div className='max-w-48 justify-around'>
          <h4 className="text-sm font-bold text-gray-500">{title}</h4>
        </div>
      </div>
      <div className="flex items-center">
        <span className="inline-block mr-3 py-1 px-2 bg-indigo-50 text-xs text-indigo-500 rounded-full">{counter > 0 ? `${counter} Subtareas` : 'No hay subtareas'}</span>
        <div
          onClick={
            () => onDelete()
          }
          className="flex items-center justify-end cursor-pointer"
        ><Icon icon="uiw:delete" style={{ color: '#ff0000' }} width='24' /></div>
      </div>
    </div>
  );
};

export default TaskItem;

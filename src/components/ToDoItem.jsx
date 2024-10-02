import { IconDone } from './icons/IconDone';
import { IconTrash } from './icons/IconTrash';
import { IconPencil } from './icons/IconPencil';
import { useState } from 'react';

export const ToDoItem = ({ item, onUpdate, onDelete, onDone  }) => {
  const [edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(item.task);

  const handleChangeNewValue = (eve) => {
    setNewValue(eve.target.value);
  };

  const handleClickUpdate = () => {
    onUpdate(item.id, newValue);
    setEdit(false);
  };

  return (
    <section className='post__task--container'>
      {edit ? (
        <div>
          <input className='input input__update' onChange={handleChangeNewValue} value={newValue} type="text" />
          <button className='button' onClick={handleClickUpdate}>Actualizar</button>
        </div>
      ) : (
        <div className='post__task--textoptions'>
          <p className={`post__task--text ${item.completed ? ' task--done' : ''}`}>{item.task}</p>
          <div className='post__icons'>
            <IconDone onClick={() => onDone(item.id)} />
            <IconPencil onClick={() => setEdit(true)} />
            <IconTrash onClick={() => onDelete(item.id)} />
          </div>
        </div>
      )}
    </section>
  );
};

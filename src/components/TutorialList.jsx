import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditTutorial from './EditTutorial';
import { useState } from 'react';

const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {

  const [editItem, setEditItem] = useState("");

    // const tutorials = [
    //     {
    //         id : 1,
    //         title : 'React JS',
    //         description : 'React is a JS-library for UI Design',
    //     },

    //     {
    //         id : 2,
    //         title : 'HTML',
    //         description : 'HTML is a markup language',
    //     }
    // ]

  return (
    <div className="container mt-4">
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col" className='text-center'>Title</th>
      <th scope="col" className='text-center'>Description</th>
      <th scope="col" className='text-center'>Edit</th>
    </tr>
  </thead> 
  <tbody>
    {
        tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
                <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                    <FaEdit
                    data-bs-toggle="modal" 
                    data-bs-target="#edit-modal"
                    size={20}
                    className="me-2 text-warning cursor-pointer"
                    onClick={() => editTutorial(id, setEditItem(item))}
                    />
                    <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTutorial(id)}
                    />
                </td>
                </tr>
            )
        })
    }
  </tbody>
</table>
<EditTutorial 
editTutorial={editTutorial}
editItem={editItem}/>
    </div>
  )
}

export default TutorialList;
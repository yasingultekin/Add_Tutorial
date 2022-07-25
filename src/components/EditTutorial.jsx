import React, { useState } from 'react'

const EditTutorial = ({ editTutorial, editItem }) => {
    const { id, title: newTitle, description } = editItem; 

    const [title, setTitle] = useState(newTitle);
    const [desc, setDesc] = useState(description);
  
    const handleSave = (e) => {
      e.preventDefault();
      editItem({ id: id, title: title, description: desc });
      setTitle("");
      setDesc("");
    };
  return (
    <div class="modal" tabindex="-1" id='edit-modal'>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input 
    type="text" 
    className="form-control" 
    id="title" 
    placeholder='Enter your title'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input 
    type="text" 
    className="form-control" 
    id="desc"
    placeholder='Enter your description'
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    required
    />
  </div>
      </div>
      <div class="modal-footer">
        <button 
        type="button" 
        class="btn btn-primary"
        onClick={handleSave} 
        data-bs-dismiss="modal"
        >Save
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default EditTutorial;
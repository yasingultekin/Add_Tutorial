import React, { useState } from 'react'

const EditTutorial = ({ editItem }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
  
    const handleSave = (e) => {
        const { id, title, desc } = editItem; 
      e.preventDefault();
      editItem({ id, title: title, description: desc });
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
        <p>Modal body text goes here.</p>
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
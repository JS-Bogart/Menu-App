import React, { useState } from 'react';

function Uploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedFile);

    fetch(
      '/api/menu_items/import',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="uploader">
      <div className="file-upload">
        <input 
          type="file" 
          name="file" 
          onChange={changeHandler} 
        />
        {isSelected ? (
          <p>File Selected</p>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
      <button onClick={handleSubmission}>Submit</button>
    </div>
  )
}

export default Uploader;
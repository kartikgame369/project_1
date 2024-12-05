function openFileManager() {
    const input = document.createElement('input'); // input elemet
    input.type = 'file'; 
    input.multiple = true; // multiple file slection
    input.onchange = (event) => {
      const files = event.target.files; // get the file you selected
      console.log("Files selected:", files); 
      alert(`${files.length} file(s) selected.`);
    };
    input.click(); // click to open file manager
  }
const checkExtension = (fileName) => {
    const EXTENSIONS = ["js", "json", "html", "css", "txt"];
    
      // const index = fileName.lastIndexOf('.');
    // const extension = fileName.slice(index+1);
    // console.log(extension);

    const extension = fileName.split(".").pop();
    // const result = EXTENSIONS.find(item => fileName.endsWith(item));

  const file = {
    extension: extension,
    result: EXTENSIONS.includes(extension),
  };
    return file;
};

module.exports = checkExtension;

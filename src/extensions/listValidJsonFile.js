// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.listValidJsonFile = async () => {
    const jsonFilesList = await toolbox.system.run(`find ./ -name "*.json"`)
    
    if (!jsonFilesList)  throw { message: "Não foi encontrado nenhum arquivo JSON" };
    
    const fileList = jsonFilesList
      .split('\n')
      .map(file=>{
        try{
          return {
            contents: JSON.parse(toolbox.fs.readFileSync( file, encoding='utf8')),
            name: file.replace(/\.\/|.json/g,'').replace(/\//g,'-').replace(/\s+/g,'_')
          } 
        }catch(err){
          return {contents: {}}
        }
      })
      .filter(({contents}) => contents.config?.env && Array.isArray(contents.dialogs) && contents.dialogs.every(abaBase64 => /^[\w+/]{100,}=*$/.test(abaBase64)))
    
    
    if (!fileList.length) throw { message: "Não foi encontrado nenhum arquivo JSON contendo as configurações do ALTU"};
      
    return fileList
  }


}
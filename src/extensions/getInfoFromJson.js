// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.getInfoFromJson = (jsonFile) => {
    const objFromJsonFile = JSON.parse(jsonFile);
    const env_vars = {...objFromJsonFile.config.env }
    return objFromJsonFile.dialogs
    .map(abaBase64=> getInfoAbaBase64({ abaBase64, env_vars }))
    .reduce((nodes, aba)=>{
        nodes.push(...aba)
        return nodes
    },[])
  }
}

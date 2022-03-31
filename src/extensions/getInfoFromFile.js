// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.getInfoFromFile = ({file, owner}) => {
    const env_vars = {...file.contents.config.env }
    return file.contents.dialogs
    .map(abaBase64=> toolbox.getInfoAbaBase64({ abaBase64, env_vars, owner, bot:file.name }))
    .reduce((nodes, tab)=>{
        nodes.push(...tab)
        return nodes
    },[])
  }
}

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.getInfoAbaBase64 = ({ abaBase64, env_vars, owner, bot }) => {
    let abaJson = Buffer.from(abaBase64, 'base64').toString();
    let abaObj = JSON.parse(abaJson.replace(/(?:<\?\s*)?\$env_vars\.(\w+)(?:\s*\?>)?/g,(matched,envVarName)=>env_vars[envVarName] || matched));
      return abaObj.config.cells
          .filter((node)=> Array.isArray(node.actions))
          .reduce((ret, node) => {
              ret.push(...node.actions
                  .map(action=>({ node:node.name,...action}))  
                  .filter(action=>action.name==="http_request"))
              return ret
          },[])
          .map(node=>(
            {
              bot: bot.replace(/\s+/g,'_').replace(/\W/g, ''),
              owner,
              node: node.node, 
              tab: abaObj.name.replace(/\s+/g,'_').replace(/\W/g, ''), 
              endpoint: node.parameters.config.url.replace(/\?.+?=.+$/g,'')
            }
          ))  

  }


}

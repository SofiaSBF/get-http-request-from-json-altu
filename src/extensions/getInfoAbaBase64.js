// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.getInfoAbaBase64 = (abaBase64) => {
 
      let aba = JSON.parse(buf.toString(abaBase64))
      return aba.config.cells
          .filter((node)=> Array.isArray(node.actions))
          .reduce((ret, node) => {
              ret.push(...node.actions
                  .map(action=>({node:node.name,...action}))  
                  .filter(action=>action.name==="http_request"))
              return ret
          },[])
          .map(node=>({
            node: node.node, 
            aba:aba.name, 
            endpoint: node.parameters.config.url}))  

  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "get-http-request-from-json" property),
  // get-http-request-from-json.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("get-http-request-from-json", process.cwd())
  // }
}
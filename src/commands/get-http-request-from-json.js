const command = {
  name: 'get-http-request-from-json',
  run: async toolbox => {
    const { print } = toolbox
    
    try{
      var files = await toolbox.listValidJsonFile();
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler os arquivos');
      return
    }
   /* try{
      var askOwner = { type: 'input', name: 'age', message: 'How old are you?' }
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler o conteúdo arquivos');
      return
    }*/

    try{
      var nodesInfo = {...files.map(file =>toolbox.getInfoFromFile({file,owner:'oi'}))}
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler o conteúdo arquivos');
      return
    }

    //print.debug(files)
  }
}

module.exports = command

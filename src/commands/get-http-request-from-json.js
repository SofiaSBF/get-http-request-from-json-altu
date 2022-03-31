const command = {
  name: 'get-http-request-from-json',
  run: async toolbox => {
    const { print } = toolbox
    
    try{
      var files = toolbox.listValidJsonFile();
      print.muted('ijoijoijjlkjlkj')
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler os arquivos');
      return
    }

    try{
      var nodesInfo = files.map(file => toolbox.getInfoFromFile(file))
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler o conteúdo arquivos');
      return
    }


  }
}

module.exports = command

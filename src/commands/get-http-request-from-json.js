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
    
    try{

        var { owner } = await toolbox.prompt.ask({ 
          type: 'input', 
          name: 'owner', 
          format:  input => input.trimStart().replace(/\s+/g, '_'),
          result: input => input.trim().replace(/\s+/g,'_'),
          message: `Qual a Squad responsável por esse${files.length>1?'s':''} projeto${files.length>1?'s':''}?`,
          validate: (testeInput)=> /\w{3,}/.test(testeInput) || "Por favor digite um nome válido! Mínimo de 3 dígitos!"
        })


    }catch(err){
      print.error(err===''? "CLI abortada!" : ( err.message || 'Erro ao tentar ler o conteúdo arquivos') );
      return
    }

    try{
      var nodesInfo = files
        .map(file =>toolbox.getInfoFromFile({file,owner }))
        .reduce((files, aba)=>{
          files.push(...aba)
          return files
      },[])
    }catch(err){
      print.error(err.message || 'Erro ao tentar ler o conteúdo arquivos');
      return
    }
    toolbox.generateCSV({nodesInfo})
  }
}

module.exports = command

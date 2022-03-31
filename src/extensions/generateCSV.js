// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.generateCSV = async ({ nodesInfo }) => {
    const {
      print: { info },
      template: { generate }
    } = toolbox

    await generate({
      template: 'csvModel.csv.ejs',
      target: `./endpoints_from_altu_${Date.now()}.csv`,
      props: { nodesInfo }
    })

    info(`Arquivo criado!`)

  }


}

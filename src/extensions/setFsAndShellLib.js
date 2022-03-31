const fs = require('fs');
const shell = require('shelljs');

module.exports = toolbox => {
  toolbox.fs = fs;
  toolbox.shell = shell;
}

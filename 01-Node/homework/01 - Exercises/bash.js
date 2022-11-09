const process = require('process');
const commands = require('./commands/index.js');

function printOutput(output) {
   process.stdout.write(output);
   process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
   const args = data.toString().trim().split(' ');
   var cmd = args.shift();

   if (commands[cmd]) {
      commands[cmd](printOutput, args);
   } else {
      printOutput(`command not found: ${cmd}`);
   }
});

import net from 'net';
import { spawn } from 'child_process';

const server = net.createServer((connection) => {
  console.log('Conexion con el cliente establecida!\n');

  let wholeCommand = ' ';
  server.on('data', (dataJSON) => {
    wholeCommand += JSON.parse(dataJSON.toString());
  });

  const commandAsArray = wholeCommand.split(/\s+/);
  const command = spawn(commandAsArray[0], [commandAsArray[1]]);
  if(command){
    //connection.write();
  }

  connection.on('close', () => {
    console.log('Un cliente se ha desconectado.');
  });

}).listen(60300, () => {
  console.log('Esperando a los clientes...')
});
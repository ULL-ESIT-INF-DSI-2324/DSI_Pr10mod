import net from 'net';

const client = net.connect({port: 60300});

if(process.argv.length < 3){
  console.log('Por favor, introduczca el comando en linea de ejecuccion');
} else {
  let command = process.argv[2];
  let options = process.argv[3];
  client.write(JSON.stringify({"comando": command, "opciones": options}) + '\n');

  client.on('end', () => {
    
  });
}
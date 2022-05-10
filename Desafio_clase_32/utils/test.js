const autocannon = require('autocannon');
const {PassThrough} = require('stream');
function run(){
    const buf= [];
    const outputStream = new PassThrough()
    const instance = autocannon({
        url: 'http://localhost:3000/info',
        connections: 10,
        duration: 2
    });
    autocannon.track(instance, {outputStream})
    outputStream.on('data', data => buf.push(data)); 
    instance.on('done', ()=>{
        process.stdout.write(Buffer.concat(buf));
    }
    );
}
run();
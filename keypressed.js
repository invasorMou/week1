process.stdin.resume(); 
console.log(process.stdin.on)
process.stdin.on('data', function (chunk) { 
  process.stdout.write('words: ' + chunk); 
});
function print(text) {
  console.log(text);
}

print(1);
setTimeout(() => print(2), 0); //macro task queue will be called here the last
print(3);

//I  micro tasks queue (Promise.resolve().then(), Promise.reject().then())
//II macro tasks queue (setTimeout(), setInetrval() )
//III rendering queue
//IV I/O ops like network requests & fs ops.

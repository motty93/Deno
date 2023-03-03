const bytes = await Deno.readFile("hello/hello.txt");
console.log(new TextDecoder().decode(bytes));

function quote(str, config) {
  const { char = '"', skipIfQuoted = true } = config;
  const length = str.length;
  if (skipIfQuoted && str[0] === char && str[length - 1] === char) {
    return str;
  }
  return char + str + char;
}

console.log(quote("Hello World", { char: "*" }));
console.log(quote("Hello World", { skipIfQuoted: true }));

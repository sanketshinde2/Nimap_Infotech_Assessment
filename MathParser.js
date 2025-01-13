function queryParseMath(routeString) {
  // Extract query parameters using regular expression
  const regex = /math\?a=(\d+)&b=(\d+)/;
  const match = routeString.match(regex);

  if (!match) {
    return 'Invalid route format';
  }

  const a = parseInt(match[1]);
  const b = parseInt(match[2]);

  // Calculate and round results
  const difference = Math.round(a - b);
  const product = Math.round(a * b);
  const quotient = Math.round(a / b);
  const sum = Math.round(a + b);

  // Return JSON stringified array
  return JSON.stringify([difference, product, quotient, sum]);
}

// Example usage
const varOcg = '/math?a=45&b=7'; 
console.log(queryParseMath(varOcg));
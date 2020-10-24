const test = () => {console.log(123)};

test();

async function yay() {
  const a = await fetch("https://google.com");
  const b = await a.json();
  return b;
}

yay();
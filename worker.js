const { v4: uuidv4 } = require("uuid");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processOrder() {
  const orderId = `ORD-${uuidv4().slice(0, 6)}`;
  const customerId = `CUST-${Math.floor(Math.random() * 10)}`;
  const amount = Math.floor(Math.random() * 5000) + 100;

  const start = Date.now();
  const outcome = Math.random();

  let event = "ORDER_SUCCESS";

  if (outcome < 0.2) event = "PAYMENT_FAILED";
  else if (outcome < 0.35) event = "PROCESSING_DELAY";
  else if (outcome < 0.45) event = "DUPLICATE_ORDER";

  if (event === "PROCESSING_DELAY") {
    await sleep(3000);
  }

  const log = {
    timestamp: new Date().toISOString(),
    orderId,
    customerId,
    event,
    amount,
    processingTimeMs: Date.now() - start
  };

  console.log(JSON.stringify(log));
}

async function main() {
  while (true) {
    await processOrder();
    await sleep(1000);
  }
}

main();

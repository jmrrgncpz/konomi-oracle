/**
 * Created as JS file since JSON-SERVER 
 * doesn't seem to allow typescript as source
 */

const sampleCoin = {
  id: 71,
  blockNumber: 12297450,
  transactionIndex: 6,
  sources: [0, 1, 2, 3],
  symbol: "eth",
  slug: "ethereum",
  leaseEnd: 12499050,
  subscriptionId: 7,
  networkId: 0,
  aggregationStrategy: 1,
  reportingStrategy: 0,
  status: 1,
  client: {
    clientType: 0,
    connectionInfo: {
      contractAddress: "0x0F9dfd6043965B02e74D01188c13936fBE71D688",
      networkId: 0,
    },
  },
  createdTimestamp: "2021-09-12T08:36:26.555",
  updatedTimestamp: "2021-09-12T08:39:16.526",
  display: true,
};

const getRandomId = () => {
  return Math.floor(Math.random() * 9999);
};

const getRandomTimestamp = () => {
  const start = new Date();
  const end = new Date();
  end.setDate(end.getDate() + 30);

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
};

const getRandomStatus = () => {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1)
}

module.exports = () => {
  const coins = [];

  for(let i = 0; i < 10; i++) {
    coins.push({
      ...sampleCoin,
      id: getRandomId(),
      createdTimestamp: getRandomTimestamp(),
      status: getRandomStatus()
    })
  }

  return { coins };
};

export const codeString = `curl -X POST   -H "Content-Type: application/json"   -d '
  {
  "tokenIn": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "tokenOut": "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
  "amountIn": "1000000000000000",
  "slippage": "50",
  "chainId": 137,
  "recipient": "0xD65e57395288AA88f99F8e52D0A23A551E0Ad6Ac",
  "referrer": "0",
  "partner": "Example"
}'   https://api.conveyor.finance`;

export const codeString2 = `{
  "body": {
    "message": "Get request successful",
    "tx": {
      "from": "0xD65e57395...",
      "to": "0x3642189b7...",
      "gas": "130816",
      "nonce": 111,
      "value": "10618228569076432",
      "data": "0x27fa6f..."
    },
    "info": {
      "amountOutMin": "9596615307535",
      "amountOut": "9644839505061",
      "affiliateAggregator": "0x",
      "affiliateGas": "265000",
      "conveyorGas": "130816",
      "gasPrice": "143358799396"
    },
    "chainId": 137,
    "currentBlockNumber": 49982079
  }
}`;

# Tiny-Market-Lib
Simple calculators to get prices or market cap of currencies and cryptocurrencies.

This is a simple repository to help the development of projects that want to calculate currencies exchange.

<hr/>

## Bitcoin Example

Circulating Supply - 18,745,293 BTC

Market Cap - $655,637,242,497

Price - $34,976.10

### Get Market Cap (Circulating Supply, Price, Fixer Value {OPTIONAL})
tinyMarketLib.getMarketCap(18745293, 34976.10);

### Get Price by Market Cap (Market Cap, Circulating Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getPriceByMarketCap(655637242497, 18745293);

<hr/>

## Token Example

Token Circulating Supply - 1.1778 PUDDY

Crypto Circulating Supply - 0.0118560 BNB

Market Cap - 0.011856 BNB

### Get Sell Amount (Value Amount, Crypto Supply, Token Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getSellAmount(1, 0.0118560, 1.1778);

### Get Buy Amount (Value Amount, Crypto Supply, Token Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getBuyAmount(1, 0.0118560, 1.1778);
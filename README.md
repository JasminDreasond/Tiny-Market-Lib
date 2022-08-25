<div align="center">
<p>
    <a href="https://discord.gg/TgHdvJd"><img src="https://img.shields.io/discord/413193536188579841?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/tiny-market-lib"><img src="https://img.shields.io/npm/v/tiny-market-lib.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/tiny-market-lib"><img src="https://img.shields.io/npm/dt/tiny-market-lib.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/JasminDreasond"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon" alt="Patreon" /></a>
    <a href="https://ko-fi.com/jasmindreasond"><img src="https://img.shields.io/badge/donate-ko%20fi-29ABE0.svg?logo=ko-fi" alt="Ko-Fi" /></a>
</p>
<p>
    <a href="https://nodei.co/npm/tiny-market-lib/"><img src="https://nodei.co/npm/tiny-market-lib.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>
</div>

# Tiny-Market-Lib
Simple calculators to get prices or market cap of currencies and cryptocurrencies.

This is a simple repository to help the development of projects that want to calculate currencies exchange.

```js
const tinyMarketLib = require('tiny-market-lib');
```

<hr/>

## Bitcoin Example

Circulating Supply - 18,745,293 BTC

Market Cap - $655,637,242,497

Price - $34,976.10

### Get Market Cap (Circulating Supply, Price, Fixer Value {OPTIONAL})
tinyMarketLib.getMarketCap(18745293, 34976.10);

### Get Price by Market Cap (Market Cap, Circulating Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getPriceByMarketCap(655637242497, 18745293);

### Get Bitcoin Sell Amount (Amount, Market Cap, Bitcoin Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getSellAmount(1, 655637242497, 18745293);

<hr/>

## Token Example

Token Circulating Supply - 1.1778 PUDDY

Crypto Circulating Supply - 0.0118560 BNB

Market Cap - 0.011856 BNB

### Get Sell Amount (Amount, Crypto Supply, Token Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getSellAmount(1, 0.0118560, 1.1778);

### Get Buy Amount (Amount, Crypto Supply, Token Supply, Fixer Value {OPTIONAL})
tinyMarketLib.getBuyAmount(1, 0.0118560, 1.1778);
module.exports = {

    // Rule 3
    rule3: function (val1, val2, val3, inverse) {
        if (inverse == true) {
            return Number(val1 * val2) / val3;
        } else {
            return Number(val3 * val2) / val1;
        }
    },

    // Valie Fixer
    fixNumber: function (marketCap, useFix) {

        if (typeof useFix === 'number') {
            return Number(marketCap.toFixed(useFix));
        } else {
            return marketCap;
        }

    },

    /* 
    
        For instance, Bitcoin’s circulating supply is 18,745,293 BTC (18745293) 
        and its current price is $34,976.10. 
        
        18,745,293 * 34,976.10 = $655,637,242,497. 
        So Bitcoin market cap is $655,637,242,497 (655637242497).

        this.getMarketCap(18745293, 3497610);
        this.getPriceByMarketCap(655637242497, 18745293);
    
    */

    // Crypto Amount * Crypto Price
    getMarketCap: function (circulatingSupply, price, useFix = 0) {
        return this.fixNumber(circulatingSupply * price, useFix);
    },

    // Market Cap / Crypto Amount
    getPriceByMarketCap: function (marketCap, circulatingSupply, useFix = null) {
        return this.fixNumber(marketCap / circulatingSupply, useFix);
    },

    // Get Token Price
    getPrice: function (crypto, token, useFix = null) {

        // Token Reserve / Crypto Reserve
        const tokensPerBNB = token / crypto;

        // Get Price (1 Crypto = Tokens Per Crypto | Crypto = ?)
        return this.fixNumber(this.rule3(1, tokensPerBNB, crypto), useFix);

    },

    // Get Buy Amount
    getBuyAmount: function (amount, crypto, token, useFix = null) {

        // Get Price
        // Crypto Reserve, Token Reserve
        const price = this.getPrice(crypto, token);

        // Complete
        // Rule 3 = Crypto Price -- Crypto Amount
        return this.fixNumber(this.rule3(1, price, amount), useFix);

    },

    // Get Sell Amount (MAIN)
    getSellAmount: function (amount, crypto, token, useFix = null) {

        // Get Price
        // Crypto Reserve, Token Reserve
        const price = this.getPrice(crypto, token);

        // Complete
        // Rule 3 = Crypto Price -- Crypto Amount
        return this.fixNumber(this.rule3(price, crypto, amount), useFix);

    }

};
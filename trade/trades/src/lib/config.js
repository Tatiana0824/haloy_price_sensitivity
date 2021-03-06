"use strict";

//var expandHomeDir = require('expand-home-dir')
//var fs = require('fs');
//var yaml = require('js-yaml');

var Context = require('@oanda/v20/context').Context;

class Config {
   constructor(file) {
        /*var doc = yaml.safeLoad(
            fs.readFileSync(
                expandHomeDir(file),
                "utf8"
            )
        );


        this.hostname = doc.hostname;
        this.streamingHostname = doc.streaming_hostname;
        this.port = doc.port;
        this.ssl = doc.ssl;
        this.token = doc.token;
        this.username = doc.username;
        this.accounts = doc.accounts;
        this.buyAccount = doc.buy_account;
        this.sellAccount = doc.sell_account;*/
        
    this.hostname = 'api-fxpractice.oanda.com';
    this.streamingHostname = 'stream-fxpractice.oanda.com';
    this.port = 443;
    this.ssl = true;
    this.token = 'cb0b4bf084af5fb255064497342ef1c2-c5fb7835bf5a300aa7d6d4cba73bb5f8';
    this.username = 'es fqeg';
    this.accounts = "- 101-001-14172286-001 - 101-001-14172286-002";
    this.buyAccount = '101-001-14172286-001';
    this.sellAccount = '101-001-14172286-002';

    }

    createContext() {
        let ctx = new Context(
            this.hostname,
            this.port,
            this.ssl,
            "oanda sample javascript"
        );

        ctx.setToken(this.token);

        return ctx;
    }

    createStreamingContext() {
        let ctx = new Context(
            this.streamingHostname,
            this.port,
            this.ssl,
            "oanda sample streaming javascript"
        );

        ctx.setToken(this.token);

        return ctx;
    }
}

function defaultConfigFile()
{
    //var configFile = "/etc/v20.conf";
    
    if (process.env.V20_CONF)
    {
        configFile = process.env.V20_CONF;    
    }

    var configFile = "/Users/tatianatian/Desktop/Startup/shopify_app/trade/trades/etc/v20.conf";
    /*if (!fs.existsSync(configFile))
    {
        throw "v20 config file '" + configFile + "' does not exist";
    }*/

    return configFile;
}

exports.Config = Config;
exports.defaultConfigFile = defaultConfigFile;

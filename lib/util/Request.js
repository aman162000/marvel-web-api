const Setting = require("./Setting");
const CryptoJS = require("crypto-js");
const fetch = require("cross-fetch");

class Request {
  constructor(apiKey, secretKey) {
    this._timeStamp = parseInt(Date.now() / 1000, 10);
    this._apiKey = apiKey;
    this._hash = CryptoJS.MD5(this._timeStamp + secretKey + apiKey).toString();
  }

  async send(args, parameters) {
    var response = await fetch(this.buildURL(args, parameters));
    var data = await response.json();
    if (data.code !== 200) return Promise.reject(new Error(data.message));

    return Promise.resolve(data);
  }

  buildURL(args, parameters) {
    var url = new URL(Setting.getBaseURL());
    url.searchParams.append("ts", this._timeStamp);
    url.pathname += args.filter((x) => x).join("/");
    if (parameters)
      Object.entries(parameters).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );

    url.searchParams.append("apikey", this._apiKey);
    url.searchParams.append("hash", this._hash);
    return url.href;
  }
}

module.exports = Request;

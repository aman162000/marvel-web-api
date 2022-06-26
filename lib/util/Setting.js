class Setting {
  constructor(base_url = "https://gateway.marvel.com/v1/public/") {
    this.setBaseURL(base_url);
  }

  setBaseURL(url) {
    this.base_url = new URL(url);
  }

  getBaseURL() {
    return this.base_url;
  }
}

module.exports = new Setting();

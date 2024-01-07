class VeriSync {
  config;
  appId;

  constructor() {}

  initialize(config) {
    this.config = config;
    this.appId = encodeURIComponent(
      JSON.stringify({
        redirectUrl: config.redirectUrl,
        clientId: config.clientId,
        flowId: config.flowId,
        meta: config.meta,
      })
    );
  }

  open() {
    window.open(`https://verisync.co/synchroniser/${this.appId}`, "_blank");

    // handle errors if config is invalid
    // use typescript
  }
}

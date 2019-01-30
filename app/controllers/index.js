import Controller from '@ember/controller';
import { observer } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.markdownOptions = {
      html: true
    };
  },

  plainText: "",
  livePlainText: "",
  liveRender: false,

  watchLiveRender: observer("liveRender", function() {
    if (this.get("liveRender")) this.send('updateLivePlainText');
  }),

  watchPlainText: observer("plainText", function() {
    if (this.get("liveRender")) this.send('updateLivePlainText');
  }),

  actions: {
    updateLivePlainText() {
      this.set("livePlainText", this.get('plainText'));
    }
  }
});

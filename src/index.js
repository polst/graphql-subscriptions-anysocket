export class AnySocketPubSub {
  constructor(socket){
    this.socket = socket;
    this.subscriptions = {};
    this.subIdCounter = 0;
  }

  subscribe(triggerName, onMessage) {
    this.socket.on(triggerName, onMessage);
    this.subIdCounter = this.subIdCounter + 1;
    this.subscriptions[this.subIdCounter] = [triggerName, onMessage];
    return Promise.resolve(this.subIdCounter);
  }

  unsubscribe(subId) {
    const [triggerName, onMessage] = this.subscriptions[subId];
    delete this.subscriptions[subId];
    this.socket.off(triggerName, onMessage);
  }
}
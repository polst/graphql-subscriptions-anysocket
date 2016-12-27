# graphql-subscriptions-anysocket
Simple PubSub that can receive a socket at creation and manages subscribe and unsubscribe

To be attached to any already created socket.

`import {AnySocketPubSub} from 'graphql-subscriptions-anysocket';`

`const pubsub = new AnySocketPubSub(socket);`

In fact works with anything that supports `on` and `off`
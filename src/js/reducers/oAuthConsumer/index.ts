import reduce from '../common';
import OAuthConsumerState from '../../model/stateZ/oAuthConsumer/OAuthConsumerState'
import OAuthConsumerRecord from '../../model/stateZ/oAuthConsumer/OAuthConsumerRecord'

export default reduce(new OAuthConsumerState(), new OAuthConsumerRecord());
import Record from '../Record';
import Ref from '../Ref';

class VectorEmailRecord implements Record {
    target = new Ref()
    engagement = new Ref()
    state: number
    sendAt: string
    resultEvent = new Array<Ref>();
    error: string
    sentTimestamp: string
    id: number
}

export default VectorEmailRecord
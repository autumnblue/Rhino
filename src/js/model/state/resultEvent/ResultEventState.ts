import { CrudState } from '../CrudState';
import ResultEventRecord from './ResultEventRecord';
import ResultEventWidget from './ResultEventWidget';

class ResultEventState extends CrudState {
    constructor() {
        super('resultEvent');
    }

    records: ResultEventRecord[];
    selectedRecord: ResultEventRecord;
    widgetState: ResultEventWidget;
}

export default ResultEventState;
class CrudState {
    constructor(context?) {
        this.context = context;
    }

    id?: number
    data?: any
    visible?: boolean
    context?: string
}

export default CrudState;
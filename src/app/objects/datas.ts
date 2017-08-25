export class Data {
    refdate: Date;
    benchmark1: string;
    benchmark2: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

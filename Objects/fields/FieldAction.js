import Field from '../fields/Field';
import FieldTypes from './FieldTypes';

class NoActionField extends Field {
    constructor(id, relativeSize) {
        super(id, relativeSize);
        this.fieldType = FieldTypes.NO_ACTION;
    }
}

export default NoActionField;
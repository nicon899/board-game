class Field {
    constructor(id, relativeSize, connection) {
        this.id = id;
        this.relativeSize = relativeSize;
        this.connectionLines = connection.connectionLines;
        this.nextFields = connection.nextFields;
    }

    onEnter = (player) => {
        player.setField(this.id);
    }

    onLeave = (player) => {
    }

    onPassThrough = (player) => {
    }

    getNextFields = () => {
        return this.nextFields;
    }


}

export default Field;
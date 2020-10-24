class Field {
    constructor(id, relativeSize) {
        this.id = id;
        this.relativeSize = relativeSize;
    }

    onEnter = (player) => {
        player.setField(this.id);
    }

    onLeave = (player) => {
    }

    onPassThrough = (player) => {
    }


}

export default Field;
class Field {
    constructor(id, relativeSize) {
        this.id = id;
        this.relativeSize = relativeSize;
        this.playersOnField = [];
    }

    onEnter = (player) => {
        this.playersOnField.push(player);
        console.log('onEnter');
    }

    onLeave = (player) => {
        this.playersOnField = this.playersOnField.filter((playerOnField) => playerOnField.getName() !== player.getName());
        console.log('onLeave');
    }

    onPassThrough = (player) => {
        console.log('onPassThrough');
    }


}

export default Field;
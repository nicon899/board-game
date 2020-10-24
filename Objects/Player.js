class Player {
    constructor(name, id, imageSource, field = 0) {
        this.name = name;
        this.id = id;
        this.imageSource = imageSource;
        this.field = field;
    }

    getName = () => {
        return this.name;
    }

    setField = (field) => {
        this.field = field;
    }

    getField = () => {
        return this.field;
    }

}

export default Player;
class Player {
    constructor(name, imageSource) {
        this.name = name;
        this.imageSource = imageSource;
    }

    getName = () => {
        return this.name;
    }

}

export default Player;
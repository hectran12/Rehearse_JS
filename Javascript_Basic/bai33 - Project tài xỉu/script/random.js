function getRandom(min, max) {
    if(min == 0) {
        return Math.floor(Math.random() * (max - min)) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
var coffeeMug = {
    color: 'Yellow',
    decorations: 'swirls',
    isFull: false,
    write: function needsFilling() {
        if (coffeeMug.isfull = false) {
            console.log ("I'm an empty " + this.color + " with " 
            + this.decorations + "!  Fill me up!");
        else {
            console.log ("You're awake!");
        }
        }
    }
}
var banana = {
    primaryColor: "Yellow",
    secondaryColor: "Brown",
    isRipe: true,
    bananaAction: function() {
        console.log("This " + this.primaryColor + " banana is ripe, eat it!")
    }
}
var table = {
    tableMaterial: "wooden",
    legMaterial: "metal",
    tableLength: "three people",
    write: function() {
        console.log("This " + this.tableMaterial + " table with " + this.legMaterial + " legs fits "+ this.tableLength);
    }
}

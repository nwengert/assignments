var rs = require("readline-sync");

var haveKey = false;

var name = rs.question("\n\n\tWhat is your name? "); 
console.log('\n\n\nHello '+ name + '. \n\nYou have been locked in a dark room. \nIn order to escape, you need to find the key and open the door.\n');   
 

var options = ["try door", "look for key"];
var keyFound = false;

while(true) {
    var selection = rs.keyInSelect(options, "What would you like to do?");
    if(selection === 0) {                                                  // TRY DOOR
             console.log("\n\n\tNo matter how hard you try, that door will not open. Keep trying")
    }
    if(selection === 1) {                                                 // LOOK FOR KEY
            console.log("\n\n\n\nYou decided to look for a key.\n\n" +
                        "You feel around the room and find a rug on the floor, a hole in the wall, and a chair in the corner."+
                        "\n\nWhat do you do?")  
            var options2 = ["check under the rug", "reach into the hole in the wall","slam the chair against the door"]
            var selection2 = rs.keyInSelect(options2, "What do you do?\n\n");
            if(selection2 === 0) {                                                  // Check under rug
                console.log('\n\nYou pull the rug back and feel the area where it was lying.\n\n\tNOTHING!\n\n');
                var options3 = ["Shake the rug, just to be sure.", "Throw the rug against the wall in frustration."];
                var selection3 = rs.keyInSelect(options3, "What do you do with the rug?");
                if(selection3 === 0) {
                        console.log("\n\n\n\n\n\n\nA key shakes loose from the fabric and you hear it clang on the floor.\n\n" + 
                                        "\n\n\tYOU FOUND IT!  Use it on the door and ESCAPE TO FREEDOM!\n\n\n"+
                                        "\n\n\t\t"+name + " you won!\n\n");
                        break;
                }
                if(selection3 === 1) {
                         console.log("\n\n\n\n\nThe rug hits the wall and a lot of dust flies into the air. \n\n\tThat sucks. \n\n\n\t\tKeep trying!\n\n");
                }

                if(selection3 === -1) {
                        console.log('\n\n\nLooks like the strain was more than '+ name +' could bear.\n\n')
                        break;
                }
             }
            if(selection2 === 1) {                                                  // Reach into hole in the wall
                console.log("\n\n\n\n\n\nYou gingerly reach into the hole in the wall.\n\n"+
                            "Reaching into holes in dark rooms is NEVER a good idea "+ name+".\n\n"+
                            "Some sinister critter bites you.\n\n"+
                            "\n\tYou die a slow and agonizingly painful death. RIP "+ name+
                            "\n\n You lose\n");
                 break;
            }
            if(selection2 === 2) {                                                  // Slam chair against door
                console.log("\n\n\n\n\n\nIn utter frustration you grab the chair and slam it against the door.\n\n"+
                            "You think that perhaps the force may jar it loose.\n\n"+
                            "\t\t"+ name + ", you were terribly wrong.\n\n"+
                            "\n\nYour captors cannot have you making all this racket."+
                            "\n\n They come for you, and you are never heard from again"+
                            "\n\n\t You lose\n");
                break;
            }
            if(selection2 === -1) {                                                  // 0 option selected
                console.log('\n\n\n\n\n\n\n\nLooks like the strain was more than '+ name +' could bear.\n\n');
                break;
            }
    }

    if(selection === -1) {
        console.log('\n\n\n\n\n\n\n\nLooks like the strain was more than '+ name +' could bear.\n\n');
        break;
    }
}

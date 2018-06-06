// Given a string, your task is to remove any duplicated letters from it. 
// Any letters you remove should be added to another string called "duplicates".

// Here's an example:
    // var input = "bookkeeper larry";
    // No duplicates: "bokepr lay"
    // The Extras: "okeerr"

    // greedy algorithm - aka "brute force approach".  Check all possibilities and take what you need from them. 

//     function noDupes(str) {
//         var output = {
//             noDupes: str,
//             extras: "",
//         }
//         for (i = 0; i <= str.length; i++) {
//             if (str[i+1] = str[i]) {
//                 output.noDupes.slice(str.indexOf(str[i+1]),str.indexOf(str[i+1])+1);
//                 output.extras += str[i+1];
//             } 
//         }
//     }
// // THIS WOULDN'T WORK BECAUSE THE DUPLICATE CHARACTER COULD BE SOMEWEHRE ELSE THAN IMMEDIATELY PRECEEDING THE CURRENT CHARACTER
//     noDupes("benjammin");
//     console.log(output.noDupes);
    // {
    //     noDupes: ""
    //     extras: ""
    // }








    // w/ class
    //Given a string, extract the duplicates and leave the rest

    //plan
        //loop through the string
        //determine if the character has already been seen
            //if true: add it to extra
        //otherwise: add it to noDupes
        //return output


        //Max's  -- we got it to work
        let duplicateRemover = function(str){
            var output = {
                noDupes: "",
                extras: ""
            }
            for (i = 0; i < str.length; i++) {
                if(output.noDupes.includes(str[i])) {
                    output.extras += str[i];
                } else {
                    output.noDupes += str[i];
                }
            }
            return output;
        }

            console.log(duplicateRemover('Benjammin'));

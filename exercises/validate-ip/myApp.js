
// Validate IP Address
//          Warm-Up
// An IP address is a numerical label assigned to each device (e.g., computer, printer) 
// participating in a computer network that uses the Internet Protocol for communication. 
// There are two versions of the Internet protocol, and thus two versions of addresses.
//  One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers,
//  each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

// Given a string, write a function that determines whether it is a valid IP address.

// const validate = str => {
    //     //split by decimal
    //     const myStr = str.split('.');
    //     //convert arr of strings into arr of numbers
    //     const myArr = [];
    //     for(let i = 0; i < myStr.length; i++){
        //         myArr.push(parseInt(myStr[i]));
        //     }
        //     console.log(myArr);
        //     //determine if there are 4 numbers
        //     if(myArr.length !== 4) { return 'Not a valid IP';}
        //     //determine that they are 0 to 255
        //     for(let i = 0; i < myArr.length; i++){
            //         if(myArr[i] <= 0 && myArr[i] >= 255){  //THIS ISN'T WORKING
            //             return 'Not a valid IP';
            //         } else {
                //             return 'Valid IP!';
                //         }
                //     }
                // }
                // console.log(validate(str));
                
                
                
str = '172.16.258.1';

validateAddress = (str) =>{
    splitAddress = str.split(".")
    let answer = true;
    if (splitAddress.length < 4){
        answer = false
    } else {
        for (let i = 0; i < splitAddress.length; i++) {
            if (Number(splitAddress[i]) <= 255 && Number(splitAddress[i] >= 0)) {
                answer = true
            } else {
                answer = false
                break
            };
        }
    }
    return answer;
}

console.log(validateAddress());


module.exports = validateAddress;
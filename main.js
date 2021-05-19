// initialize the array to store the user input
var num = [];
// initialize the corresponding str array
var num_str = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// initialize user input array length
var length = 0;
// initialize result/output array
var result = [];

// parse through user input as arguments and store them into num array
for (let i = 0; i < process.argv.length; i++) {
    if(i>1){
        num.push(process.argv[i]);
    }
    // console.log(j + ' -> ' + (process.argv[j]));
    length++;
}
// get the length of user input array(have to slice the first 2 elements out)
length = length - 2;

// modify the result array based on the requirements
for (let i = 0; i < length; i++) {
    let current = num[i];
    let current_result = "";
    for(let j=0; j<current.length; j++){
        if(current[j]==="0"){
            current_result = current_result.concat(num_str[0]);  
        }else if(current[j]==="1"){
            current_result = current_result.concat(num_str[1]);
        }else if(current[j]==="2"){
            current_result = current_result.concat(num_str[2]);
        }else if(current[j]==="3"){
            current_result = current_result.concat(num_str[3]);
        }else if(current[j]==="4"){
            current_result = current_result.concat(num_str[4]);
        }else if(current[j]==="5"){
            current_result = current_result.concat(num_str[5]);
        }else if(current[j]==="6"){
            current_result = current_result.concat(num_str[6]);
        }else if(current[j]==="7"){
            current_result = current_result.concat(num_str[7]);
        }else if(current[j]==="8"){
            current_result = current_result.concat(num_str[8]);
        }else if(current[j]==="9"){
            current_result = current_result.concat(num_str[9]);
        }
    }
    result[i]= current_result;
}

console.log(result);

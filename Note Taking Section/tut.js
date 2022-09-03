    // // Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if(prop !== "tracks" && value !== ''){
//       records[id][prop];
//     }else if(prop === "tracks" && records[id].hasOwnProperty("tracks")===false){
//       records[id][prop]
//     }else if(prop === "tracks" && value !== ''){
//       records[id].prop.push(value);
//     }else if(value === ""){
//       delete records[id].prop;
//     }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artists', 'ABBA');
//   console.log(recordCollection);
//   console.log(recordCollection[2468].tracks);


// // Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
//     for(let i = 0; i < contacts.length ; i++){
//         if(contacts[i]["firstName"] === name){
//             if(prop in contacts[i]){
//                 return contacts[i][prop];
//             }else{
//                 return "No such property";
//             }
//         }else{
//             return "No such contact";
//         }
//     }
//     // Only change code above this line
// }
//     console.log(lookUpProfile("Akira", "likes"));
//     console.log(Math.floor(0.99*10));

// function countdown(n){
//     debugger
    
//     if(n <= 0){
//         return [];
//     }if(n > 0){
//        let add = countdown(n-1);
//        add.push(n);
//        return add;
//     }
    
//   }

//   console.log(countdown(10));



// .map() .filter() 
// chaining effect

// let arr=[25, 43, 8, 46, 39];

// for(i in arr){
//     console.log(Math.sqrt(arr[i]));
// }
// let arr=[2, 3, 4, 6, 8];
// let arr2 = arr.map((curElem)=>{
//     curElem = curElem*2;
//     if(curElem>=10){
//         return curElem;
//     }else{
//         return null;
//     }
// }
// )
// //OR
// let arr3 = arr.map((curElm) => curElm*2).filter((curElem) => curElem > 10);
// console.log(arr2);
// console.log(arr3);

// for(i in arr){
//     let arr1 = arr[i] *= 2;
//     if(arr1>=10){
//         console.log(arr[i]);
//     }
// }


// Reduce Method

// flatten an 3d and 2d array into single dimensional array
// let arr=[2, 3, 4, 6, 8];
// let arr3 = arr.map((curElm) => curElm*2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => accumulator += curElem , 10);
// console.log(arr3);

// date() and time()
// four ways to create a date object

// 1
// new date();
// it takes 7 arguments
// new Date(year, month, day , hours, minutes, seconds, miliseconds)
// let Date1 =  new Date();
// let Date1 =  new Date().toLocaleString();
// let Date1 =  new Date().toString();
// console.log(Date1);

//2
// console.log(Date.now(1660476098016));

//3
// let day = new Date(2022, 8, 14);
// console.log(day.toString());

//4
// new Date(date string)
// let day = new Date("Sun Aug 14 2022 16:50:23");
// console.log(day.toLocaleString());


// let curDate = new Date();
// console.log(curDate.toLocaleDateString());
// console.log(curDate.getFullYear());
// console.log(curDate.getTimezoneOffset());
// console.log(curDate.getSeconds());


// DOM in JavaScript
// let line = "there's something written !"

// let autowrite = () =>{
//     for(let i in line){
//         document.getElementsByClassName('line').innerHTML += line.charAt[i];
//         // let arline += line.charAt[i];
//         i++;
//         // console.log(arline)
//         setInterval((typeWriter, speed) => {
//         }, 1);
//     }
// }

// const sum = (...args) => {
//     // const args = [...sum];
//     return args.reduce((a, b) => a + b, 0);
//   }
// console.log(sum(0,1,2));

// const arr = [6, 89, 3, 45];
// const spread = ...arr;
// const maximus = Math.max(...arr);
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
  // Only change code below this line
//   const{today, tomorrow} = HIGH_TEMPERATURES;

//   console.log(HIGH_TEMPERATURES.today);
// const{today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES;
// console.log(HIGH_TEMPERATURES.today);
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };

//   const{today:{low: lowToday}, tomorrow:{high: highToday}}=LOCAL_FORECAST;
//   console.log(LOCAL_FORECAST.lowToday);

// let a = 8, b = 6;
// // Only change code below this line
// [b,a]= [a,b];
// console.log([b,a]);

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     // const [a, b, ...arr] = [...list] or list;
//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);
// console.log(1221%10);
// let element = 1122332211;
// const palindromeChecker = (elem) =>{
    // let str = elem.replace(/[^a-zA-Z0-9]/g, '');
    // console.log(str);
    // let rev = str.split("").reverse().join("");
    // console.log(rev);
    // if(rev.toLowerCase() === str.toLowerCase()){
    //     return "is palindrome";

    // }else{
    //     return "not";
    // }
//     console.log();
// }

// console.log(palindromeChecker("A man, a plan, a canal. Panama"));

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//       let failureItems = [];
//     for(let i in arr){
    
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    
//     i++;
//     }
//     // Only change code above this line
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);
//   console.log(failuresList);

  // const makeServerRequest = new Promise((resolve, reject) => {
  //   // responseFromServer is set to true to represent a successful response from a server
  //   let responseFromServer = true;
      
  //   if(responseFromServer) {
  //     resolve("We got the data");
  //   } else {  
  //     reject("Data not received");
  //   }
  // });
  // makeServerRequest.then(result =>{
  //   console.log(result);
  // });

//   let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
//   let chewieRegex = /Aa*/i; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// let phrase = "ba humbug";

// let regexPlus = /bah+/;
// let regexStar = /bah*/;

// console.log(regexPlus.test(phrase)); // returns false
// regexStar.test(phrase); // returns true

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h[0-9]*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// let criminals = "P6P2P7P4P5CCCCCP3P1";
// let reCriminals = /C+C?/i;
// console.log(criminals.match(reCriminals));


// let ohStr = "Ohhhhh no";
// let ohRegex = /oh{3,6}no/; // Change this line
// let result = ohStr.match(ohRegex);
// console.log(result);

// let sampleWord = "8pass99";
// let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);
// let hello = "   Hello, World!  ";
// let wsRegex = /(\w+)?, (\w+)?!/; // Change this line
// let result = hello.match(wsRegex);
//or
// let wsRegex = /^\s+|\s$/g;
// let result = hello.replace(wsRegex, "");
// console.log(result);

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//       n--;
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);


// function filteredArray(arr, elem) {
//   let m = arr.length;
//     let newArr = [];
//     let Arr;
//     for(let i = 0; i<=arr.length;i++){
//         i = 0;
//       for(let j=0; j<m-1; j++){
//         if(arr[i][j]===elem){
//           newArr.shift(arr[i]);
//           break;
//         }else{
//             continue;
//         }
//       }
//       // newArr.append(Arr);
//     }
    
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

    // function filteredArray(arr, elem) {
    //   let m = arr.length;
    //     let newArr = [];
    //     for(let i = 0; i<=arr.length-1;i++){
    //         i = 0;
    //       for(let j=0; j<m-1; j++){
    //         if(arr[i][j]===elem){
    //           break;
    //         }else{
    //           let ar = arr.shift([arr[i]])
    //           newArr.push(ar)
    //           continue;
    //         }
    //       }
    //     }
    //   return newArr;
    // }
    
    // console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


  //   function reverseString(str) {
  //     let rev = "";
  //   let len = str.length-1;
  //   for(i in str){
  //     rev += str.charAt(len)
  //     len--;
  //   }
  //   return rev;
  // }
  //   console.log(reverseString("hello"));
  // function factorialize(num) {
  //   if(num===0){
  //     return 1;
  //   }else{
  //   return num*factorialize(num-1);
  //   }
  // }
  
  // console.log(factorialize(5));
  function findLongestWordLength(str) {
    debugger
    let arr = str.split(" ");
    let count = 0;
    for(let i in arr){
      let st = arr[i];
      // let stlen = st.length;
      if(st.length >= count){
        count = st.length;
      }else{
        count;
      }
    }
    return count;
  }
  
  console.log(findLongestWordLength("This quick brown fox jumped over the lazy doggy"));
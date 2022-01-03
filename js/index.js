// Iteration 1: Names and Input
// 
let hacker1 = 'Tamás Ujj';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Peter Ravnsbæk';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}

if(hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}

if(hacker2.length == hacker1.length){
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");
}
// Iteration 3: Loops

let hacker1Capitalize = '';
for(let i = 0; i<hacker1.length; i++){
    if(i == hacker1.length-1){
        hacker1Capitalize += (hacker1[i].toUpperCase());    
    }
    else{
        hacker1Capitalize += (hacker1[i].toUpperCase() + ' ');
    }
}
console.log(hacker1Capitalize);

/*for(let i = 0; i<hacker1.length; i++){
    console.log(hacker1[i] + ' ');
}*/

console.log(hacker2.split('').reverse().join(''));


if(hacker1.localeCompare(hacker2) == 1){
    console.log("Yo, the navigator goes first definitely.");
}

if(hacker1.localeCompare(hacker2) == -1){
    console.log("The driver's name goes first.");
}

if(hacker1.localeCompare(hacker2) == 0){
    console.log("What?! You both have the same name?");
}

//Bonus1

let myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque lacinia ipsum, vulputate pretium velit venenatis in. Praesent a quam feugiat, tempor enim at, sagittis eros. Duis eros enim, molestie ut luctus sit amet, facilisis et purus. Donec vitae nibh vel nunc cursus tristique. Sed molestie, nulla vitae finibus cursus, leo mi suscipit nulla, id consequat tortor risus non arcu. Etiam sollicitudin nisl et sem ullamcorper, non euismod dui lobortis. Maecenas ac lacus et nibh condimentum consequat ac et metus. Cras interdum ultrices elit, a lacinia eros egestas sed. Nunc vitae erat felis. Praesent efficitur, enim ac pulvinar dapibus, ligula ipsum tempor erat, a ornare ante mi non metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mauris massa, ultricies sed sapien vitae, imperdiet gravida massa. Curabitur sed iaculis nibh, sit amet porta mi. Mauris eros quam, aliquam dsfdsf dfdsf sdf sdf dsf sdf dsf";
let myText2 =  "Praesent efficitur, enim ac pulvinar dapibus, ligula ipsum tempor erat, a ornare ante mi non metus. Orci varius natoque penatibus et 'magnis dis parturient montes, nascetur ridiculus mus. Duis mauris massa, ultricies sed sapien vitae, imperdiet gravida massa. Curabitur sed iaculis nibh, sit amet porta mi. Mauris eros quam, aliquam in maximus quis, tincidunt id neque. Integer dictum feugiat ante, id convallis libero interdum quis. Quisque orci dui, volutpat sit amet nibh eget, ornare dapibus justo. Etiam elit sapien, pulvinar non dui blandit, varius finibus risus. Mauris at mauris non felis pulvinar gravida eget sed ante. Praesent fermentum nibh sit amet pellentesque venenatis. Integer lacinia ornare aliquam. Vestibulum nec ante vel nunc viverra lobortis id eget nisl. Fusce mollis pretium nisl, id eleifend risus bibendum eu. Donec lacinia nulla pretium, dignissim nunc a, ultrices velit. Curabitur a tortor ut quam lobortis fermentum. Sed tristique nunc non bibendum.";
let myTextAll = myText + ' ' + myText2;
//console.log(myText.length + ' ' + myText2.length + ' ' + myTextAll.length); 

let myTextAllArray = myTextAll.split(' ');
console.log(myTextAllArray.length);
 //Maecenas eleifend facilisis sem, nec cursus felis placerat a. Nam a placerat lectus, id efficitur justo. Vestibulum ac mauris sed ligula vestibulum faucibus sed sed elit. Aenean euismod laoreet massa, sed scelerisque est dictum sed. Pellentesque feugiat et magna id hendrerit. Donec erat lectus, scelerisque id neque et, iaculis pulvinar risus. Aliquam eu odio venenatis, tincidunt elit nec, porta turpis. Nunc fermentum nulla ex, ut vulputate diam dignissim sit amet. Aliquam congue aliquam dolor ut cursus.';
 
let etCounter = 0;
 for(let i = 0; i < myTextAllArray.length; i++){
    if(myTextAllArray[i] == 'et' || myTextAllArray[i] == 'et,' || myTextAllArray[i] == 'et.' || myTextAllArray[i] == 'et?' || myTextAllArray[i] == 'et!'){
        etCounter++;
    }
 }

 console.log('etCounter: ' + etCounter);

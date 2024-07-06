let arr = [];
let a;

while (true) {
    a = prompt("Enter(push, pop, unshift, shift, exit)");

    if (a === "exit") {
        break;
    }

    switch (a) {
        case "push":
            let push = prompt("enter the push element");
            arr.push(push);
            console.log("After push opreation", arr);
            break;
        case "pop":
            let pop = arr.pop();
            console.log("pop the element into array:", pop);
            console.log("after pop opreation:", arr);
            break;
        case "unshift":
            let unshift = prompt("enter the unshift element:");
            arr.unshift(unshift);
            console.log("after unshift operation:", arr);
            break;
        case "shift":
            let shifted = arr.shift();
            console.log("enter the shift element:", shifted);
            console.log("after shift operation:", arr);
            break;
        default:
            console.log("No exist");
    }
}

console.log("Final array:", arr);
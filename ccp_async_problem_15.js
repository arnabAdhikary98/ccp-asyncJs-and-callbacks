let task1 = () => console.log("Task 1 completed");

let task2 = (callback) => {
    console.log("Task 2 completed");
    callback();
}

task2(task1);
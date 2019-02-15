function task (done){
    console.log("doing some task");
    done()

}
task(function(){
    console.log("task is done");
})
console.log("we did the task");
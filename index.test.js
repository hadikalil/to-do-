test("creat li element", t =>{
    const result = newTaskElement("hadi").children[1].textContent
    // result.children[1].te/xtContent
   // console.log(result);
    const expected = "hadi"
    t.equal(result,expected)
})



// test("Submitting a new task adds it to the list", t => {
//     const result = addNewTask()
//     const expected = ""
//     t.equal(result,expected)
// })


// test("Checking an entry marks it as complete", t => {
//     const result = markComplete()
//     const expected = ""
//     t.equal(result, expected)
// })



// test("Deleting an entry removes it from the list", t => {
//     const result = deleteTask()
//     const expected = ""
//     t.equal(result, expected)
// })
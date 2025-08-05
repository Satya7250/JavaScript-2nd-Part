// for-Each loop
const coding = ["js", "ruby", "java", "python", "Cpp"]

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach( (itme,index, arr) => {
//     console.log(itme, index, arr);
// } )


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((itme) => {
    console.log(itme.languageName);
})
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = myNums.filter( (num) => {
//     return num>4
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2007},
    {title: 'Book three', genre: 'History', publish: 1996, edition: 2015},
    {title: 'Book four', genre: 'Non-Fiction', publish: 1962, edition: 2013},
    {title: 'Book five', genre: 'Science', publish: 1982, edition: 2022},
    {title: 'Book six', genre: 'Fiction', publish: 1972, edition: 2013},
    {title: 'Book seven', genre: 'History', publish: 1992, edition: 2011},
    {title: 'Book eight', genre: 'Science', publish: 1952, edition: 2010},
    {title: 'Book nine', genre: 'Non-Fiction', publish: 1942, edition: 2017},
    {title: 'Book ten', genre: 'Friction', publish: 1962, edition: 2014},
];

// const userBooks = books.filter((bk) => bk.genre === 'History')
const userBooks = books.filter((bk) => bk.edition > 2015 && bk.genre === 'Science')
console.log(userBooks);

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, str){
   const filterArray = drivers.filter((filtered) => {
        return filtered.toUpperCase() === str.toUpperCase();   
   });return filterArray;
}
function fuzzyMatch(drivers, str){
    const filterArray = drivers.filter((filtered) => {
        return filtered[0] === str[0];
    });
    return filterArray;
}
     
function matchName(drivers, str){
    const filterArray = drivers.filter((filtered) => {
        console.log(filtered.name);
        return filtered.name === str;
    });
    return filterArray;
}

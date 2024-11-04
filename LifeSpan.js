function lifeInWeeks(age) {
    var remaining_age = 90-age;
    var days = remaining_age * 365;
    var weeks = remaining_age * 52;
    var mounth = remaining_age * 12;
    console.log(`You have ${days} days, ${weeks} weeks, and ${mounth} months left.`); 
}
lifeInWeeks(56);

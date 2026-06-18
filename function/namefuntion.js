function sunstone1 () {
    console.log("welcome");
}
sunstone();

function sunstoneBatch2 (batch) {
    console.log(`welcome back ${batch} BATCH`);
}
sunstoneBatch(2026);

function sunstoneCourse3(course, batch) {
    console.log(`welcome back ${course} ${batch} batch`);
}
sunstoneCourse("BCA", 2026);

function totalStudent(BCA, BTECH, BBA, BSC) {
    return BCA + BTECH + BBA + BSC;
}
console.log("Total Students =", totalStudent(100, 200, 50, 300));
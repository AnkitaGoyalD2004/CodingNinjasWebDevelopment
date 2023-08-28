/*var student1 = {
    name: "Ankita" ,
    rollNo: 43 ,
    marks: 80
};
console.log(student1);*/

function createStudent(name, rollNo , marks){
   // var Student = {}; // new Object
    //Student.name = name;
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
   // return Student ;
}
var Student1 = new createStudent("Ankita" , 43,80);
var Student2  = new createStudent();
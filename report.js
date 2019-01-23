class Report {
    constructor (paramsone, paramsTwo, paramsThree, paramsFour) {
        this.grade =paramsone;
        this.first_name =paramsTwo;
        this.last_name =paramsThree;
        this.age =paramsFour;
    }

    

     averageGrade(params) {
        try {
            let countScore =0;
                const totalStundent = params.length;
                    const arraySt = params;
                    console.log(arraySt.length);
                    for (let i=0; i< arraySt.length; i++) {
                        countScore = arraySt[i].grade+ countScore      
                    }
                    const averageGrad = countScore/ totalStundent;
                    
                return averageGrad; 
        } catch (error) {
            console.log('you inputted non array');
           return false; 
        }
    }

     
    // // sort the grades
    rankGrad(a,b) {
        return a - b;
    }
    

    studentRank (students) {
        let name= '';
        let arrayGrade = [];
        let grade = '';
        let resultRank =[];
        let eachStudentRank = '';
        if(!Array.isArray(students) || !students.length){ console.log('you are not allowed to input any other data types apart from Array in here');
            return false;
        }
        else {

            for (let i=0; i< students.length; i++) {
                // arraySt[i].grade 
                // arrayGrad.push(student[i].grade);
                
                 if (students[i].grade <= 39) {
                            
                            
                                grade= 'F';
                                name= students[i].last_name;
                               
                    eachStudentRank = grade +' '+ students[i].last_name
                }
                else if (students[i].grade <= 40 ) {
                    grade= 'E';
                    name= students[i].last_name;
                    eachStudentRank = grade +' '+ students[i].last_name
    }
                else if (students[i].grade <= 59  ) {
                        grade= 'C';
                        name= students[i].last_name;
                        eachStudentRank = grade +' '+ students[i].last_name;
                }
                else if (students[i].grade <= 69 ) {
                          grade= 'B';
                          name= students[i].last_name;
                        eachStudentRank = grade +' '+ students[i].last_name
                }else {
                    grade= 'A';
                    // console.log(students[i]);
                    name= students[i].last_name;
                    eachStudentRank = grade +' '+ students[i].last_name;
                }
                
                resultRank.push(eachStudentRank);
                
            }
            // console.log(arrayGrad.sort());
                //  arrayGrade = resultRank.sort();
            
                 return resultRank;
            }
            
    }

    // student above 16
    filterStudent (students) {
        const overAge = [];
        if(!Array.isArray(students) || !students.length){}
        else {
            
        for (let i=0; i< students.length; i++) {
            if(students[i].age >=16){
                // console.log(students[i]);
                overAge.push(students[i]);
                
            }
    }
    return overAge;
        }
    }

    outputDetails (students) {
        const namesAndGrade = [];
        if (!Array.isArray(students) || !students.length ) {
            console.log('you are not allowed to input any other data types apart from Array in here');
            return false
        }
        else {
            for(let i=0; i< this.studentRank(students).length; i++){
                const data= this.studentRank(students)[i].split(' ');
                const lastname =data[1];
                
                if(lastname === students[i].last_name) {
                    namesAndGrade.push(students[i].first_name + ' '+ students[i].last_name +' ' + data[0]);
                }
                
           
        }
        return namesAndGrade;
        }
}


}        

    

// arrayStudents= []
const checkStudents = new Report();
// const checkStuden = new Report(10,'Walabi','wahab',32);
// arrayStudents.push(checkStudents, checkStuden);

const arrayStudents =[new Report(75,'Alabi','wahab',92), new Report(10,'Olakintan','dele',52), new Report(30,'Oluyole','omo',32),
new Report(40,'Momodu','bolaji',12)];
// console.log(arrayStudents.averageGrade(checkStudents, checkStuden));
// console.log(arrayStudents.averageGrade);

console.log(checkStudents.averageGrade(arrayStudents));

console.log(checkStudents.studentRank(arrayStudents));

console.log(checkStudents.filterStudent(arrayStudents));

console.log(checkStudents.outputDetails(arrayStudents));


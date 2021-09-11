const salary: number = 7500;
const friendSalaries: number[] = [7500, 12300, 1700, 9500, 1000];

const friends: string[] =  ['sakif', 'rakib', ' nakib', 'makib', 'takib'];

friendSalaries[0] = 10500;
friendSalaries.push(13100);

friendSalaries[4] = 9800;

friendSalaries.push();

friends.push('Bakib');

friends[2] = "Qakib";

//friends.push (45000);

let max = 0;
for(const salry of friendSalaries){
    if(salary > max){
        max = salary;
    }
}

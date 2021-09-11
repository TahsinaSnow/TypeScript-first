interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string

}

const messy: Player = {
    name: 'L Messy',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Nosimon'
}

const hannan: Player = {
   name: 'abdul hannan',
   club: 'kolabagan',
   salary: 2000,
   
}

interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number

}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number,

}

const zuku: Developer ={
    name: 'ZukerBerg',
    salary: 25000,
    age: 31,
    designation: 'Faceboooker',
    language: 'js',
    codeEditor: 'VS code',
    typingSpeed: 65,

}
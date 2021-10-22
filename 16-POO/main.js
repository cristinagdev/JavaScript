class Student {
  constructor(name,age,programmingLanguage){
    this.name=name;
    this.age=age;
    this.programmingLanguage=programmingLanguage;
  }

  code() {
    console.log('Estoy escribiendo código '+ this.programmingLanguage);
  }

}

const student1= new Student('Cristina',25, 'JavaScript')
console.log(student1);
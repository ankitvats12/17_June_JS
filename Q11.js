function StudentNames(students) {
    let names = students.map(student => student.name);
    return names;
  }
  let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Sam', age: 19 }
  ];
  console.log(StudentNames(students));
  
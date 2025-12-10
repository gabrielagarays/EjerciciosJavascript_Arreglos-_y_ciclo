//2 arrays diferentes con los cursos de dos estudiantes
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//.filter para recorrer el primer array
// Dentro de .filter, use .includes para verificar si el segundo array contiene el mismo curso
const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
// Imprimimos el resultado de commonCourses
console.log("Cursos comunes entre los dos estudiantes:", commonCourses);



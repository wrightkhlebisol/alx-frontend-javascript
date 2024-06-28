export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (
    Array.isArray(studentsList) && typeof city === 'string' && Array.isArray(newGrades)
  ) {
		const studentsInLocation = studentsList.filter((students) => { 
			students.location === city
		});
		//return newGrades.map(newGrade => newGrade.studentId === )
	}

  return [];
}

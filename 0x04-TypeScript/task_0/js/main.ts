interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Caleb',
	lastName: 'Shola',
	age: 10,
	location: 'Nigeria'
}

const student2: Student = {
	firstName: 'Ade',
	lastName: 'Smith',
	age: 30,
	location: 'Malta'
}

export const studentsList: Student[] = [
	student1, student2
]

const tableElement = document.createElement('table');
const tableBody = document.createElement('tbody')
const tableHead = document.createElement('thead')
tableElement.appendChild(tableHead)
tableElement.appendChild(tableBody)

for (const studentsObj of studentsList) {
        const tableRow = document.createElement('tr')

        const firstNameCell = document.createElement('td')
        firstNameCell.innerText = studentsObj.firstName

        const locationCell = document.createElement('td')
        locationCell.innerText = studentsObj.location

        tableRow.append(firstNameCell)
        tableRow.append(locationCell)

        tableBody.appendChild(tableRow)
}

document.body.appendChild(tableElement)

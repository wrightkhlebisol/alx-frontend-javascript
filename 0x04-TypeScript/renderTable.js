const tableElement = document.createElement('table');
const tableBody = document.createElement('tbody')
const tableHead = document.createElement('thead')
tableElement.appendChild(tableHead)
tableElement.appendChild(tableBody)

for (const studentsObj in studentsList) {
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

var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 24,
    location: "London",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map
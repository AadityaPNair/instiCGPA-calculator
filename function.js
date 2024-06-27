document.getElementById('addButton').addEventListener('click', function() {
addSubject();
});
let subjectCount = 0;
function addSubject() {
subjectCount++;
const container = document.getElementById('container');
const subjectDiv = document.createElement('div');
subjectDiv.className = 'subject-group';
const subjectHeading = document.createElement('h3');
subjectHeading.contentEditable = true;
subjectHeading.innerText = `Subject ${subjectCount}`;
subjectDiv.appendChild(subjectHeading);
const inputGroup1 = document.createElement('div');
inputGroup1.className = 'input-group';
const label1 = document.createElement('label');
label1.innerText = 'Credits:';
const input1 = document.createElement('input');
input1.type = 'number';
inputGroup1.appendChild(label1);
inputGroup1.appendChild(input1);
const inputGroup2 = document.createElement('div');
inputGroup2.className = 'input-group';
const label2 = document.createElement('label');
label2.innerText = 'Grade:';
const input2 = document.createElement('input');
input2.type = 'text';
inputGroup2.appendChild(label2);
inputGroup2.appendChild(input2);
subjectDiv.appendChild(inputGroup1);
subjectDiv.appendChild(inputGroup2);
container.appendChild(subjectDiv);
}
function Calculate(){
const subjectsDiv=document.getElementById("container");
const subjects= subjectsDiv.getElementsByClassName("subject-group");
let totalCredits = 0;
let totalPoints = 0;
const gradePointsMap={
'S':10,
'O':10,
'A+':10,
'AA':10,
'A':9,
'B':8,
'C':7,
'D':6,
'E':5,
'F':0,
'Ab':0,
'W':0,
};
for(let subject of subjects){
const credits=parseFloat(subject.querySelector('input[type="number"]').value);
const grade = subject.querySelector('input[type="text"]').value.toUpperCase();
const gradePoint = gradePointsMap[grade];
if(gradePoint !== undefined){
totalCredits += credits;
totalPoints += credits*gradePoint;
}else{
alert('Invalid grade Entered');
return;
}
}
const cgpa = totalPoints/totalCredits;
document.getElementById("showcg").innerHTML="Your CGPA is:"+cgpa;
}

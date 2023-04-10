
const newBtn = document.getElementById('new');
const searchBtn = document.getElementById('search');
const saveBtn = document.getElementById('submitBtn');
const archiveArr = [];
const viewBtn = document.getElementById('viewBtn');


newBtn.addEventListener('click', createNewFunc);
searchBtn.addEventListener('click', searchFunc);
submitBtn.addEventListener('click', submitFunc);
viewBtn.addEventListener('click', viewFunc.bind(this, archiveArr));



function createNewFunc () {
    document.getElementById('newDiv').style.visibility = 'visible';
    document.getElementById('searchDiv').style.visibility = 'hidden';
}

function searchFunc() {
    document.getElementById('newDiv').style.visibility = 'hidden';
    document.getElementById('thanks').style.visibility = 'hidden';
    document.getElementById('searchDiv').style.visibility = 'visible';

}

function submitFunc() {
    let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let birthDate = document.getElementById('birthDate').value;
let hobbies = document.getElementById('hobbies').value.split(',');
    let personId = Math.floor(Math.random() * 10 + 1);
let person = {id: personId,
    firstN: firstName,
    lastN: lastName,
    birthD: birthDate,
    hobbiesArr: hobbies,
}
document.getElementById('thanks').style.visibility = 'visible';
document.getElementById('form').reset();
archiveArr.push(person);
}

function viewFunc(arr) {
  let resultList = document.getElementById('ul');
 for (const elem of arr) {
   let li = document.createElement('li');
   li.textContent = elem.lastN.toUpperCase() + ', ' + elem.firstN;
   resultList.appendChild(li);
  let display = document.createElement('button');
  display.innerHTML = 'View full info';
 display.addEventListener('click', displayFunc.bind(this, elem));
  li.appendChild(display);
 }
}

function displayFunc(name) {
document.getElementById('infoH').innerHTML = `ID: ${name.id}: ${name.firstN} ${name.lastN}`;
document.getElementById('infoP').innerHTML = `Date of birth: ${name.birthD} <br><br>Hobbies:`;
for (const elem of name.hobbiesArr) {
  let listItem = document.createElement('li');
  listItem.innerHTML = elem;
  document.getElementById('infoUl').appendChild(listItem);
}
}
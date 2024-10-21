let addNewTask = document.querySelector('.addNew')
let FormCont = document.querySelector('.FormCont')
const saveBtn = document.querySelector('.save')
let form = document.getElementById('form')
let itemCont = document.querySelector('.main')
let all = document.getElementById('all')
let open = document.getElementById('open')
let done = document.getElementById('done')
let closed = document.getElementById('closed')


const db = []
let totalTask = 0;
let openTask = 0 ;
let completedTask = 0;
let closedTask = 0;
let checked = false;


function newTask( titleTxt , task , timeTxt ){
  totalTask++;
  openTask++;
  open.textContent = `${openTask}`
  let card = document.createElement("div")
  card.setAttribute('class','card')
  itemCont.appendChild(card)
  
  let cardBody = document.createElement("div")
  cardBody.setAttribute('class','card-body')
  card.appendChild(cardBody)
  
  let cardTxt = document.createElement("div")
  cardTxt.setAttribute('class','card-txt')
  cardBody.appendChild(cardTxt)
  
  let text = document.createElement("p")
  text.setAttribute('class','text')
  text.textContent = task;
  cardTxt.appendChild(text)
  
  let title = document.createElement("p")
  title.setAttribute('class','title')
  title.textContent = titleTxt;
  cardTxt.appendChild(title)
  
  let checkBox = document.createElement("div")
  checkBox.setAttribute('class','check-box')
  cardBody.appendChild(checkBox)
  
  let checkbox = document.createElement("div")
  checkbox.setAttribute('class','check-box')
  cardBody.appendChild(checkbox)
  
  let checkBoxInput = document.createElement("input")
  checkBoxInput.setAttribute('type','checkbox')
  checkbox.appendChild(checkBoxInput)
  checkBoxInput.addEventListener('change', (e) => {
      if(e.target.checked){
        text.style.textDecoration="line-through"
        completedTask++;
        done.textContent = `${completedTask}`
      }else{
        text.style.textDecoration = "none" ;
        completedTask--;
        done.textContent = `${completedTask}`
      }
    })
  
  let cardFooter = document.createElement("div")
  cardFooter.setAttribute('class','card-footer')
  card.appendChild(cardFooter)
  
  let timeCont = document.createElement("div")
  timeCont.setAttribute('class','time-cont')
  cardFooter.appendChild(timeCont)
  
  let timeTitle = document.createElement("p")
  timeTitle.setAttribute('class','time-title')
  timeTitle.textContent = 'Today'
  timeCont.appendChild(timeTitle)
  
  let time = document.createElement("p")
  time.setAttribute('class','time')
  time.textContent = timeTxt;
  timeCont.appendChild(time)
  
  let btnCont = document.createElement("div")
  btnCont.setAttribute('class','btn-cont')
  cardFooter.appendChild(btnCont)
  
  let edith = document.createElement("img")
  edith.setAttribute('src','assets/images/edit.png')
  edith.setAttribute('class','edith')
  btnCont.appendChild(edith)
  edith.addEventListener('click', () => {
    checked = !checked
    checked ? text.setAttribute('contenteditable','true') : text.setAttribute('contenteditable','false');
  })
  
  let Delete = document.createElement("p")
  Delete.setAttribute('class','delete')
  Delete.textContent = '×'
  btnCont.appendChild(Delete)
  Delete.addEventListener("click", ()=> {
    itemCont.removeChild(card);
    openTask--;
    open.textContent = `${openTask}`
    console.log(openTask)
    closedTask++;
    closed.textContent =`${closedTask}` 
  })
}

addNewTask.addEventListener('click', (e) => {
  FormCont.style.display = FormCont.style.display === 'none' ? "block": "none"
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

saveBtn.addEventListener('click', (e) => {
  FormCont.style.display = "none";
  const formData = new FormData(form)
  const title = formData.get("title");
  const task = formData.get("task");
  const time = formData.get("time")
  newTask(title,task,time)
  all.textContent = `${totalTask}`
 // openTask = totalTask - closedTask
  form.reset()
})

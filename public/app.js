document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  
  if (event.target.dataset.type === 'change') {
    const id = event.target.dataset.id;
    const newTitle = prompt("Введите новую заметку");
    console.log('title:',newTitle);
    change({id: id, title: newTitle}).then(()=> {
      event.target.closest('li').querySelector(".note").innerText = newTitle;
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function change(data){
  console.log(data);
  console.log(JSON.stringify(data));
  await fetch(`/${data.id}`, {
    method: "PUT", 
    header: {"Content-Type": "application/json"}, 
    body: JSON.stringify(data)
  });   
}
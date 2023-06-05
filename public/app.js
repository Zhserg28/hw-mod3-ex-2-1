document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  
  if (event.target.dataset.type === 'change') {
    const id = event.target.dataset.id
    const title = prompt("Введите новую заметку");
    console.log('title: ',title);
    console.log('json: ',JSON.stringify(title));
    console.log('change: ',change(id,title))
    // if(title){
    //   try{
    //     change(id,title) 
    //   } catch (error) {
    //     console.log(error)
    //   }           
    // }
  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function change(id,title){
  const response = await fetch(`/${id}`, {method: "PUT", header: {"Content-Type": "application/json"}, body: JSON.stringify(title)})
  console.log('response: ',response);
  console.log(response.status)
  const result = await response.json()
  return result
}
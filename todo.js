let buttons = document.querySelectorAll('.switches button')
console.log(buttons);
buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      console.dir(e.target.dataset.name, "entered button");
      if (e.target.dataset.name == 'cancel') {
         document.getElementById('list').value = " ";
      }
      else {
         if (document.getElementById('list').value.length > 1) {
            let dom = document.createElement('h4')
            dom.textContent = document.getElementById('list').value;
            dom.classList.add('attach');
            let insert = document.getElementById("parent");
            insert.appendChild(dom);
            document.getElementById('list').value = " ";
            dom.addEventListener('dblclick', (e, remove) => {
               console.log(e.srcElement.remove());
            })
         }
      }
   })
})

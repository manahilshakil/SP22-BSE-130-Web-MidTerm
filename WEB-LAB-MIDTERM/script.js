const delBtn = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

function createDeleteButton(li) {
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.style.marginLeft = '5px';
  delBtn.style.marginRight = '5px';
  delBtn.addEventListener('click', () => {
    todos.removeChild(li);
  });
  return delBtn;
}

function createEditButton(text, newText) {
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.style.marginRight = '5px';
  editBtn.addEventListener('click', () => {
    const updatedText = prompt('Edit your to-do:', text);
    if (updatedText !== null) {
      newText.textContent = updatedText;
    }
  });
  return editBtn;
}

function todoItem(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  const newText = document.createElement('span');
  newText.textContent = text;

  const delBtn = createDeleteButton(li);
  const editBtn = createEditButton(text, newText);

  li.appendChild(checkbox);
  li.appendChild(newText);
  li.appendChild(delBtn);
  li.appendChild(editBtn);

  todos.appendChild(li);
}

delBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    todoItem(text);
    input.value = '';
  }
});

todos.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const li = e.target.parentElement;
    li.classList.toggle('completed', e.target.checked);
  }
});

import InputBox from "./InputBox.js"
import ListBox from "./ListBox.js"
import Title from "./Title.js"

export default function App($target) {

  let $main = null
  let $title = null
  let $inputBox = null
  let $ListBox = null


  let state = {
    inputValue: "",
    id:11,
    todoList: []
  }

  const getTodoList = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await api.json()
    setTodoList(data.filter((e, index) => index < 10))
  }
  const handleClickRemove = (id) => {
    const newTodoList = state.todoList.filter(e => e.id !== id)
    setTodoList(newTodoList)
  }
  const handleClickChange = (id) => {
    const newTodoList = state.todoList.map(e => e.id !== id ? e: {...e,completed : !e.completed} )
    setTodoList(newTodoList)
  }
  const setTodoList = (todoList) => {
    state = { ...state, todoList }
    render()
  }
  const handleAddData = (data) => {
    setTodoList([...state.todoList,{id:state.id++,title:data,completed:false}])
  }

  const render = () => {

    const preMain = document.getElementsByClassName('main')[0]
    $main = document.createElement("div")

    $title = new Title()
    $inputBox = new InputBox({onCAddData: handleAddData})
    $ListBox = new ListBox({
      todoList: state.todoList,
      onClickRemove: handleClickRemove,
      onClickChange: handleClickChange
    })

    $main.className = "main"



    $main.append($title)
    $main.append($inputBox)
    $main.append($ListBox)

    if (preMain) {
      preMain.replaceWith($main)

    } else {
      $target.append($main)
    }
  }

  const createMainDom = () => {
    $main = document.createElement("div")
  }

  const init = () => {

    createMainDom()

    getTodoList()

    // render()
  }

  init()

}
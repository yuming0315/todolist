import List from "./List.js"

export default function ListBox(props) {


  function render() {
    const { todoList, onClickRemove,onClickChange } = props
    const $ListBox = document.createElement('section')
    $ListBox.id = "listBox"


    const $list = todoList.map(todo => new List({
      todo,
      onClickRemove: onClickRemove,
      onClickChange: onClickChange
    }))

    $ListBox.append(...$list)
    return $ListBox
  }

  return render()

}
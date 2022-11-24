export default function List(props) {

    let $list = null
    let $remove = null
    let $lable = null
    let $check = null
  
    const render = () => {
      $list = document.createElement('div')
      $remove = document.createElement('div')
      $lable = document.createElement('div')
      $check = document.createElement('div')
  
  
      $remove.addEventListener('click', onClickRemove)
      $lable.addEventListener('click',onClickChange)
  
      $list.className = 'todo-item'
      $remove.className = 'remove'
      $check.className = 'check-mark'
      $remove.append('x')

      props.todo.completed ?
        $lable.className = 'todo-text checked' :
        $lable.className = 'todo-text'
      $lable.append(props.todo.title)
      $check.append(props.todo.completed ? '✓' : ' ')
      //props.todo.completed && $check.append('✓')
      $list.append($remove, $lable, $check)
  
      return $list
    }
    const onClickRemove = () => {
      props.onClickRemove(props.todo.id)
    }
    const onClickChange = () => {
      props.onClickChange(props.todo.id)
    }
  
    return render()
  }
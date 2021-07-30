export const createList = list => {
  return $.ajax({
    method: "POST",
    url: "/api/lists",
    data: list
  })
}

export const fetchLists = () => {
  return $.ajax({
    method: "GET",
    url: "/api/lists"
  })
}

export const fetchList = listId => {
  return $.ajax({
    method: "GET",
    url: `/api/lists/${listId}`
  })
}

export const deleteList = list => {
  return $.ajax({
    method: "DELETE",
    url: `/api/lists/${list.id}`,
    data: list
  })
}

export const add = listItem => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/list_items',
      data: listItem
    })
  )
}

export const remove = listItem => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/list_items/${listItem.menu_item_id}`,
      data: listItem
    })
  )
}

export const fetchListItems = listId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/lists/${listId}/menu_items`
    })
  )
}
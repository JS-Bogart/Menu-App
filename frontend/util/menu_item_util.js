export const fetchMenuItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/menu_items"
  })
};
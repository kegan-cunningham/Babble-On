export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: `api/users`,
    method: 'GET',
  });
};

export const editUser = (user, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: { user: user },
  });
};

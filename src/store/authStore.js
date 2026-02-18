

const STORAGE_KEY = 'app_users';

function getUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}
export function addUser({ username, email, password }) {
  const users = getUsers();
  if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'An account with this email already exists.' };
  }
  users.push({
    username: username.trim(),
    email: email.trim().toLowerCase(),
    password,
  });
  saveUsers(users);
  return { success: true };
}

export function findUserByEmail(email) {
  const users = getUsers();
  return users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase()) ?? null;
}

export function updatePasswordByEmail(email, newPassword) {
  const users = getUsers();
  const index = users.findIndex((u) => u.email.toLowerCase() === email.trim().toLowerCase());
  if (index === -1) return { success: false, error: 'No account found with this email.' };
  users[index] = { ...users[index], password: newPassword };
  saveUsers(users);
  return { success: true };
}

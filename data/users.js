import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Matias',
    email: 'matias@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sebastian',
    email: 'sebastian@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

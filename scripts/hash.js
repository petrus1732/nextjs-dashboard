const bcrypt = require('bcrypt');

const create_hash = () => {
  const password = '123456';
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  console.log(hash);
};

create_hash();

console.log(bcrypt.compareSync('123456','$2b$10$azrdMfUXqYbn40Ps3fey8.roBxGkbfntC1JVid06UkE6eXbbb1UVK'))

'$2b$10$0fB49E1ykneSy2MNgU3BNug0cdSchUJwkwObP7KkeEJK6IUZjF1G6'
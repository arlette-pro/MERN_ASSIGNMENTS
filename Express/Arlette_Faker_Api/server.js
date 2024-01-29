const express = require('express');
const app = express();

const createUser = () => {
    return {
    //   name: faker.name.,
      email: faker.internet.email(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    };
  };
  
  const createCompany = () => {
    return {
    //   name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    };
  };

app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
  });
  
  app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
  });
  
  app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
  });

const {faker} = require ('@faker-js/faker');

const port = 8000;


app.listen(port, () => console.log(`Listening on port: ${port}`))
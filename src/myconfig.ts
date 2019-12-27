import fs from 'fs';

function updateLocalConfig(): void {
  fs.readFile('../config.json', (d) => {
    fs.writeFile('./config.json', d, (err) => {
      console.log(err);
    });
  });
}

function updateGlobalConfig(): void {
  fs.readFile('./config.json', (d) => {
    fs.writeFile('../config.json', d, (err) => {
      console.log(err);
    });
  });
}

function addAdmin(id: string): void {
  fs.readFile('./config.json', 'utf8', (e, d) => console.log(d));
}

addAdmin('test');

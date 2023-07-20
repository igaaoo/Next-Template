import dotenv from 'dotenv';
const ActiveDirectory = require('activedirectory');

dotenv.config();


const config = {
  url: process.env.AD_URL, // IP e porta do servidor AD Ex: ldap://XXX.XXX.XXX.XXX:XXX
  baseDN: process.env.AD_DOMAIN, //nome do domínio, exemplo: teste.local
  username: process.env.AD_USER, //usuário de serviço com permissão de leitura no AD
  password: process.env.AD_PASS, //senha do usuário de serviço
};

const ad = new ActiveDirectory(config);

module.exports = ad;
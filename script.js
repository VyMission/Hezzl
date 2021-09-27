const puppeteer = require('puppeteer'); 

async function testReg(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 20,
    });

   console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

     console.log('Переход на страницу ya.ru');
    await page.goto('https://identity.getpostman.com/signup', { waitUntil: 'networkidle0' }); 
	
	console.log('Ввод email');
	await page.type('#email', 'vm9-11@yandex.ru');
	
	console.log('Ввод username');
  await page.type('#username', 'Slava');
  
  console.log('Ввод password');
  await page.type('#password', 'vm9-11@yandex.ru');
	
	 console.log('Клик по "Создать аккаунт"');
	await page.click('#sign-up-btn');
	
const startURL = 'https://identity.getpostman.com/signup'
if (page.url() === startURL) { console.log('Регистрация не удалась') }
else { console.log('Успешная регистрация') }	

  
   console.log('Закрытие браузера');
    await browser.close();
	
	
}

testReg(); 


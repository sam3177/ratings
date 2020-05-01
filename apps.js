const categories = [ 'TVs', 'Laptops', 'Coffee Machines' ];
const select = document.querySelector('#category');
for (let i = 1; i <= categories.length; i++) {
	const option = document.createElement('option');
	option.innerText = categories[i - 1];
	option.value = i;
	select.appendChild(option);
}
const brand = document.querySelectorAll('.brand');
const model = document.querySelectorAll('.model');
const rating = document.querySelectorAll('.rating');
const inner = document.querySelectorAll('.innerstars');

const TVs = [
	{
		brand  : 'LG',
		model  : 'C9 OLED',
		rating : 4.7
	},
	{
		brand  : 'Sony',
		model  : 'Bravia X950G',
		rating : 2.7
	},
	{
		brand  : 'Samsung',
		model  : 'Q90R QLED TV',
		rating : 4.8
	},
	{
		brand  : 'Vizio',
		model  : 'Quantum X',
		rating : 3.5
	},
	{
		brand  : 'Hisense',
		model  : 'H9F',
		rating : 4.2
	}
];
const Laptops = [
	{
		brand  : 'HP',
		model  : 'Spectre X360',
		rating : 4.1
	},
	{
		brand  : 'Dell',
		model  : 'XPS 13',
		rating : 3.7
	},
	{
		brand  : 'Huawei',
		model  : 'MateBook 13',
		rating : 2.2
	},
	{
		brand  : 'Apple',
		model  : 'MacBook Pro',
		rating : 4.8
	},
	{
		brand  : 'Acer',
		model  : 'Swift 3',
		rating : 3.8
	}
];
const Coffee = [
	{
		brand  : 'DeLonghi',
		model  : 'PrimaDona XS',
		rating : 4.0
	},
	{
		brand  : 'Jura',
		model  : 'E8',
		rating : 3.6
	},
	{
		brand  : 'Bosch',
		model  : 'VeroAroma',
		rating : 4.5
	},
	{
		brand  : 'Saeco',
		model  : 'PicoBaristo',
		rating : 1.9
	},
	{
		brand  : 'Philips',
		model  : 'HD8834',
		rating : 4.4
	}
];

const pick = (electro) => {
	for (let i = 0; i < electro.length; i++) {
		brand[i].innerText = electro[i].brand;
		model[i].innerText = electro[i].model;
		rating[i].innerHTML = electro[i].rating;
		const percentage = `${electro[i].rating / 5 * 100}%`;
		inner[i].style.width = percentage;
	}
};

pick(TVs);

select.addEventListener('change', (e) => {
	var picked = parseInt(e.target.value);
	console.log(e);
	if (picked === 1) {
		pick(TVs);
	}
	else if (picked === 2) {
		pick(Laptops);
	}
	else if (picked === 3) {
		pick(Coffee);
	}
});

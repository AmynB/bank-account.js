//Bank Account Script
//Author: ab-src

//initialize accounts object
var accounts = [];

//create a new account
//push account to array
//return account
function createAccount (account) {
	accounts.push(account);
	return account;
}

//get user queried account
function getAccount (username){
	var i = 0;

	while(accounts[i]){
		if (accounts[i].username === username){
			return accounts[i];
		}
		i++;
	}

	//if cannot find match, return error
	console.log('Cannot find account');
}

//increases balance
function deposit (account, amount) {
	if (typeof amount === 'number'){
		account.balance += amount;
	}  else {
		console.log('deposit failed. Amount is not a number.');
	}
}

//decreases balance
function withdraw (account, amount){
	if (typeof amount === 'number'){
		account.balance -= amount;
		if (account.balance < 0){
			console.log(account.username + '\'s account is now overdrawn!');
		}
	} else {
		console.log('withdraw failed. Amount is not a number.');
	}
}

//return balance amount
function getBalance (account) {
	return account.balance;
}

// returns a function that gets a balance
function createBalanceGetter(account){
	return function(){return account.balance;};
}

//return an array of overdrawn accounts to apply functions
function findOverdrawn(){
	var overdrawn = [];
	accounts.forEach(function (account){
		if (account.balance < 0){
			overdrawn.push(account);
		}
	});

	return overdrawn;
}

//list all overdrawn accounts
function listAllAccounts(){
	console.log('All accounts in database:');
	accounts.forEach(function (account){
		console.log(account.username + ': ' + account.balance);
	});
}

//list all overdrawn accounts
function listOverdrawn(){
	console.log('All overdrawn accounts in database:');
	accounts.forEach(function (account){
		if (account.balance < 0){
			console.log(account.username + ': ' + account.balance);
		} 
	});
	return true;
}

//apply overdrawn fee to overdrawn accounts
function applyOverdrawnfee(fee){
	var overdrawn = findOverdrawn();
	if (typeof fee === 'number'){
		overdrawn.forEach(function (account){
			account.balance -= fee;
		});
	} else {
		console.log('fee failed. Fee is not a number.');
	}
}

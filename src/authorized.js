async function f() {
	await firebase.auth()
	setTimeout(() => {
		printUser(firebase.auth().currentUser.uid)
	}, 1000)
}

f()

const printUser = (value) => {
	console.log(value)
}
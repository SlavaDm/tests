
const auth = firebase.auth()
console.log(auth)

const sendRegistration = document.querySelector('#sendRegistration')

sendRegistration.addEventListener('click', () => {
	const login = document.querySelector('#login').value
	const password = document.querySelector('#password').value
	reg(login, password)
})


const reg = async (login, password) => {
	try {
		const provider = await auth.createUserWithEmailAndPassword(login, password)
		console.log(provider)
	}
	catch (err) {
		console.log(err)
	}
}

// console.log(firebase)
// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// firebase.auth().signInWithPopup(provider).then(function (result) {
//     // This gives you a Google Access Token.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log(user)
// });



const auth = firebase.auth()
console.log(auth)
console.log(auth.currentUser)

const sendLogin = document.querySelector('#sendLogin')

sendLogin.addEventListener('click', async () => {
	const login = document.querySelector('#login').value
	const password = document.querySelector('#password').value

	await auth.signInWithEmailAndPassword(login, password).then(() => {
		console.log('Success')
		console.log(firebase.auth().currentUser)
		window.location.assign('./authorized.html');
	})
	// log(login, password)
})

// const log = async (login, password) => {
// 	try {
// 		await auth.signInWithEmailAndPassword(login, password)
// 		document.location.href = './authorized.html'
// 		// firestore.collection('users').add({
// 		// 	login,
// 		// 	password
// 		// })
// 	}

// 	catch (err) {
// 		console.log(err)
// 	}
// }
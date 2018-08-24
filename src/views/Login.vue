<template>
	<div>
		<h1>Login</h1>

		<form @submit.prevent="login">
			<input type="email" placeholder="Email" v-model="email"><br/>
			<input type="password" placeholder="Password" v-model="password"><br/>
		
			<button>Submit</button>
		</form>

		<hr/>

		Signed in: {{ isAuthenticated }}

		<hr/>

		<button @click="logout">Logout</button>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'login',
		data (){
			return {
				email: '',
				password: '',
				isAuthenticated: false
			}
		},
		created () {
			firebase.auth().onAuthStateChanged(user => {
				if (user) {
					this.isAuthenticated = true
				}
			})
		},
		methods: {
			login () {
				console.log('Login')

				firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => alert(error.message))
			},
			logout () {
				console.log('Log out')

				firebase.auth().signOut().then(() => {
					this.isAuthenticated = false
				})
			}
		}
	}
</script>
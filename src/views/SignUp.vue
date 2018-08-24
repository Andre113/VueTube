<template>
	<div>
		<h1>Sign up</h1>

		<form @submit.prevent="signUp">
			<input type="email" placeholder="Email" v-model="email"><br/>
			<input type="password" placeholder="Password" v-model="password"><br/>
		
			<button>Submit</button>
		</form>

		<hr/>

		Signed in: {{ isAuthenticated }}
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'signup',
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
			signUp () {
				console.log('Sign up')

				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => alert(error.message))
			}
		}
	}
</script>
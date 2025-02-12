<script>
	// import Header from './Header.svelte';

	// svelte-ignore non_reactive_update
	// let name ='Omkar';
	// let name = $state('Omkar');
	// let status = $state('OPEN');

	// let full_name = $derived(name + ' ' + 'Khoche');

	// function buttonClickHandler() {
	// 	status = status === 'OPEN' ? 'CLOSE' : 'OPEN';
	// }

	let formState = $state({
		name: '',
		birthday: '',
		step: 0,
		error: ''
	});

	function buttonClickHandler() {
		if (formState.step === 0 && formState.name.trim() === '') {
			formState.error = 'Your Name is Empty. Please enter your name.';
			return;
		} 
		if (formState.step === 1 && formState.birthday.trim() === '') {
			formState.error = 'Please enter your birthday.';
			return;
		}
		
		formState.error = '';
		formState.step++;
	}
</script>

<!-- 
<Header prop={name} />

<p>{full_name}</p>

<input type="text" bind:value={name} />

<p>This Store is now {status}</p>
<button onclick={buttonClickHandler}>Toggle status</button> 
-->

<p>Step:{formState.step+1}</p>

{#if formState.error}
	<p class="error">{formState.error}</p>
{/if}

{#if formState.step === 0}
	<div>
		<label for="name">Your Name: </label>
		<input type="text" id="name" bind:value={formState.name} />
	</div>
	<button onclick={buttonClickHandler}>next</button>

	{:else if formState.step === 1}
	<div>
		<label for="birthday">Your birthday: </label>
		<input type="date" id="birthday" bind:value={formState.birthday} />
	</div>
	<button onclick={buttonClickHandler}>next</button>
	
{/if}

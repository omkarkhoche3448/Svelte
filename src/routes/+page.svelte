<script>
	import Header from './Header.svelte';

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

<Header prop={formState.name}>
	<h1>i am Child 1 of Header</h1>
	{#snippet secondChild(name)}
		<p>secondChild name is : {name}</p>
	{/snippet}
</Header>

<!-- 
<Header prop={name} />

<p>{full_name}</p>

<input type="text" bind:value={name} />

<p>This Store is now {status}</p>
<button onclick={buttonClickHandler}>Toggle status</button> 
-->

<p>Step:{formState.step + 1}</p>

<!-- {#if formState.step === 0}
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

{#if formState.error}
	<p class="error">{formState.error}</p>
{/if} -->

{#if formState.step === 0}
{@render formStep({Question:"What is Your Name ",id:"name", type:"text"})}
{/if}

{#if formState.step === 1}
{@render formStep({Question:"What is Your Age ",id:"birthday", type:"date"})}
{/if}

{#if formState.error}
	<p class="error">{formState.error}</p>
{/if} 

{#snippet formStep({ id, Question, type })}
	<div>
		<label for={id}>{Question}</label>
		<input type={type} id={id} bind:value={formState[id]} />
	</div>
	<button onclick={buttonClickHandler}> next</button>
{/snippet}


<style>
	:global(.error) {
		color: red;
	}
</style>

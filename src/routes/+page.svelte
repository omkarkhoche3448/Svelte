<script>
	import Header from './Header.svelte';

	// svelte-ignore non_reactive_update
	// let name ='Omkar';
	let name = $state('Omkar');
	let status = $state('OPEN');

	let full_name = $derived(name + ' ' + 'Khoche');

	function buttonClickHandler() {
		status = status === 'OPEN' ? 'CLOSE' : 'OPEN';
	}
</script>

<Header prop={name} />

<p>{full_name}</p>

<input type="text" bind:value={name} />

<p>This Store is now {status}</p>
<button onclick={buttonClickHandler}>Toggle status</button>

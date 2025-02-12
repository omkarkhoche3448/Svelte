<script>
	import Header from './Header.svelte';

	// svelte-ignore non_reactive_update
	// let name ='Omkar';
	let name = $state('Omkar');
	let status = $state('OPEN');

	function buttonClickHandler() {
		status = status === 'OPEN' ? 'CLOSE' : 'OPEN';
	}
</script>

<Header prop={name} />

<input type="text" bind:value={name} />

<p>This Store is now {status}</p>
<button onclick={buttonClickHandler}>Toggle status</button>

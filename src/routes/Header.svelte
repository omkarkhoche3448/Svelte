<script lang="ts">
	import type { Snippet } from "svelte";

	let { prop ,children,secondChild}:{
		prop:String,
		children:Snippet,
		secondChild:Snippet
	}= $props();
</script>

<div>
	<!-- <h1>Hello i am {prop}</h1> -->
	<!-- <p>{prop}</p> -->
	 <h1>{prop ? prop : 'User'}'s Form</h1>
	 {@render children()}

	<h3> {@render secondChild('I am Sec Child')}</h3>

</div>

<style>
	h1 {
		color: blueviolet;
	}
</style>

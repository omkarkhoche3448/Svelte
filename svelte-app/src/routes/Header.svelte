<script lang="ts">
	import type { Snippet } from "svelte";
	import { createState } from './state.svelte.js';
	import {counterClass} from './state.svelte.js'

	let { prop ,children,secondChild}:{
		prop:String,
		children:Snippet,
		secondChild:Snippet
	}= $props();

	const myState = createState();
	const myCount = new counterClass();
	$inspect(myState.value);


</script>

<div>
	<!-- <h1>Hello i am {prop}</h1> -->
	<!-- <p>{prop}</p> -->
	 <h1>{prop ? prop : 'User'}'s Form</h1>
	 <!-- {@render children()}

	<h3> {@render secondChild('I am Sec Child')}</h3> -->
	<button onclick={myState.up} >{myState.value}</button>
	<button onclick={()=>{ myCount.up()}} >{myCount.value}</button>
</div>

<style>
	h1 {
		color: blueviolet;
	}
</style>

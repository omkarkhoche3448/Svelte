// import { state } from '@svelte/system';

// export function createState() {

//     const value = $state(0); 

//     function up(){
//         value+=1;
//     }

//     return {
//         up,
//         get value(){
//             return value;
//         },
//         set value(newvalue){
//             value=newvalue
//         }
//     }
// }

export class counterClass {
    value = $state(0); 

    up() {
        this.value = this.value + 1; 
    }
}


import { writable } from 'svelte/store';

export function createState() {
    const value = writable(0); // Create writable store

    function up() {
        value.update(n => n + 1); // Increment value
    }

    function setValue(newValue) {
        value.set(newValue); // Set value directly
    }

    return {
        up,
        value,  // Returning writable store
        setValue,
    };
}


<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log($page.data)
    })
</script>
<h2>PAGE CONTENT</h2>

<p>

    {$page.data.session?.user?.email}



</p>
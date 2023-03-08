<script>

  import Footer from "../components/Footer.svelte";
  import Drawer from "../components/Drawer.svelte";
  export let data;
</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<svelte:head>
  <title>노잉</title>
</svelte:head>
<Drawer user={data.session?.user}>
  <slot/>
</Drawer>
<Footer/>
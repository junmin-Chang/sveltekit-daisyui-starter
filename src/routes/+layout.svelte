<script>

  import Footer from "../components/Footer.svelte";
  import Drawer from "../components/Drawer.svelte";

</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<svelte:head>
  <title>노잉</title>
</svelte:head>
<Drawer>
  <slot/>
</Drawer>
<Footer/>
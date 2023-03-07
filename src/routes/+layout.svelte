<script>

  import Footer from "../components/Footer.svelte";
  import Drawer from "../components/Drawer.svelte";

</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<Drawer>
  <slot/>
</Drawer>
<Footer/>
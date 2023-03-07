<script>

  import Footer from "../components/Footer.svelte";
import Navbar from "../components/Navbar.svelte";

</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<Navbar/>
<slot/>
<Footer/>
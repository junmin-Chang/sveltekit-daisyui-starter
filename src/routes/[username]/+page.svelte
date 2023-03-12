<script lang="ts">
    export let data;
    console.log(data.session)
</script>

<p>{data.session?.user?.name}</p>
<div class="avatar">
    <div class="w-24 rounded-xl">
      <img src={data.session?.user?.image} alt="profile_image"/>
    </div>
  </div>

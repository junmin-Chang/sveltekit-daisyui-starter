<script lang="ts">
    // 이 data는 파라미터로 받아온 username을 바탕으로 server에서 데이터를 fetch할 예정 
    export let data;
</script>

<div class="avatar">
    {data.username}
    <div class="w-24 mask mask-squircle">
      <img src="svelte.jpeg" alt="profile_image" />
    </div>
  </div>
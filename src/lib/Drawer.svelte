<script lang="ts">
  import type { DefaultSession } from "@auth/core/types";
  import { signOut } from "@auth/sveltekit/client";
  export let user: DefaultSession["user"]
</script>

<div class="drawer drawer-mobile">
  
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="border-l drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <slot/>

    <label for="my-drawer-2" class="swap swap-rotate fixed top-4 right-4 btn btn-circle btn-ghost lg:hidden">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" />
      <!-- hamburger icon -->
      <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
      
    </label>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <a href="/" class="mb-6">
        <li data-theme="wireframe">
          <img src="logo.svg"/>
        </li>  
      </a>
      <li><a href="/">홈</a></li>
      <li><a href={`/${user?.name}`}>프로필</a></li>
      {#if user}
        <li><button on:click={() => signOut()}>로그아웃</button></li>
      {:else}
        <li><a href="/login">로그인</a></li>
      {/if}

    </ul>
  </div>
</div>

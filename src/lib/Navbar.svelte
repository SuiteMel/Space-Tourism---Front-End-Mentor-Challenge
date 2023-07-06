<script>
  import logo from '../assets/shared/logo.svg'
  import close from '../assets/shared/icon-close.svg'
  import hamburger from '../assets/shared/icon-hamburger.svg'
</script>

<header class="absolute top-0 z-50 inset-x-0">
  <div class="flex justify-between items-center h-full">
    <img class="pl-6 py-6" src="{logo}" alt="Space Tourism">

    <nav class="bg-white/5 backdrop-blur-2xl md:py-10 h-screen md:h-full md:px-12">
      <a class="uppercase" href="/">Home</a>
    </nav>
  
    <button class="md:hidden">
      <img src="{hamburger}" alt="">
    </button>
  </div>
</header>

<style>
  header {
    height: var(--navHeight);
  }
</style>
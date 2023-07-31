<script>
  import bgDesktop from '../assets/home/background-home-desktop.jpg'
  import bgTablet from '../assets/home/background-home-tablet.jpg'
  import bgMobile from '../assets/home/background-home-mobile.jpg'
</script>

<main class="relative">
  <picture class="absolute inset-0 -mt-[--navHeight]">
    <source srcset="{bgDesktop}" media="(min-width: 1024px)">
    <source srcset="{bgTablet}" media="(min-width: 768px)">
    <img class="h-full w-full object-cover" src="{bgMobile}" alt="Space View of Earth">
  </picture>

  <div class="container mx-auto flex lg:justify-around items-center lg:items-end z-0 relative min-h-screen md:pb-24 lg:pb-32 lg:flex-row flex-col justify-start text-center lg:text-left pt-[--navHeight]">
    <div class="w-min">
      <h2 class="uppercase text-xl/tight text-secondary mb-6 tracking-widest">
        So, you want to travel to
      </h2>
    
      <h1 class="uppercase font-serif text-5xl/none">
        Space
      </h1>
    
      <p class="text-lg text-secondary mt-6">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>

    <a href="/" class="inline-flex justify-center items-center font-serif bg-white text-primary uppercase aspect-square rounded-full text-2xl px-16 tracking-wider hover:outline outline-[5.5rem] outline-white/10 mt-24">
      Explore
    </a>
  </div>
</main>
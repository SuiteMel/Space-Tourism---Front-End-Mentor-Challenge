<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="text-red-500 p-2 rounded" on:click={increment}>
  count is {count}
</button>

<style lang="postcss">
  button {
    background-color: theme('colors.gray.300');
  }
</style>
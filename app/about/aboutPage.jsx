const aboutPage = () => {
  return (
    <div class="container mx-auto py-12">
    <div class="flex flex-col lg:flex-row items-start">
      <div class="lg:w-1/4">
        <div class="space-y-2">
          <div class=" text-3xl font-semibold uppercase text-center tracking-wide text-[#c6b069]">
            About
          </div>
          <div class="w-12 border-t-2 border-indigo-800 dark:border-white"></div>
        </div>
      </div>
      <div class="lg:w-3/4 lg:pl-12">
        <table>
          <tr>
            <td colspan="2">
              <h1 class="text-4xl font-bold mb-6 mt-4 lg:mt-0">Seven Design About</h1>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p class="mb-6">
                Seven Designs is a leading interior design firm specializing in
                Commercial, Residential, and Showroom interiors. Renowned for our
                expertise, we take pride in seamlessly executing turnkey projects,
                handling everything from the initial design concept to the final
                construction phase. With a passion for innovative design and
                meticulous attention to detail, we transform spaces into inspiring
                environments that reflect our clients' unique vision and style.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 class="text-2xl font-semibold">Interior Designing</h2>
            </td>
            <td>
              <h2 class="text-2xl font-semibold">Turnkey Solutions</h2>
            </td>
          </tr>
          <tr>
            <td>
              <div class="w-24 border-t-2 border-zinc-800 dark:border-white"></div>
            </td>
            <td>
              <div class="w-24 border-t-2 border-zinc-800 dark:border-white"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  
  );
};

export default aboutPage;

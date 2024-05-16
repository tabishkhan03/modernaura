const aboutPage = () => {
  return (
   <div className="container mx-auto py-12">
  <div className="flex flex-col lg:flex-row items-start">
    <div className="lg:w-1/4">
      <div className="space-y-2">
        <div className=" text-3xl font-semibold uppercase text-center tracking-wide text-[#c6b069]">
          About
        </div>
        <div className="w-12 border-t-2 border-indigo-800 dark:border-white" />
      </div>
    </div>
    <div className="lg:w-3/4 lg:pl-12">
      <table>
        <tbody><tr>
            <td colSpan={2}>
              <h1 className="text-4xl font-bold mb-6 mt-4 lg:mt-0">About Modern Aura </h1>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="mb-6">
                Modern Aura is a premier interior design firm specializing in Commercial, Residential, and Showroom interiors. Celebrated for our expertise, we excel in delivering comprehensive turnkey projects, managing every aspect from the initial design concept to the final construction phase. With a passion for innovative design and a keen eye for detail, we transform spaces into inspiring environments that reflect the unique vision and style of our clients.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="text-2xl font-semibold">Interior Designing</h2>
            </td>
          </tr>
          <tr>
            <td>
              <div className="w-24 border-t-2 border-zinc-800 dark:border-white" />
            </td>
            <td>
              <div className="w-24 border-t-2 border-zinc-800 dark:border-white" />
            </td>
          </tr>
        </tbody></table>
    </div>
  </div>
</div>

  
  );
};

export default aboutPage;

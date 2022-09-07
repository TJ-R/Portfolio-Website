const Projects = () => {
  return (
    <div id="projects" className="pt-28 h-screen w-full bg-stone-200 
                                flex flex-col justify-center items-center space-y-10">
      <div className="flex justify-center items-center">
        <h1 className="text-7xl text-center">
            Projects
        </h1>       
      </div>
      <div className="flex justify-center items-center">
        <table className="table-auto text-left border border-stone-400">
          <thead className="uppercase bg-stone-400">
            <tr>
              <th className="py-3 px-6 text-3xl">Project Name</th>
              <th className="py-3 px-6 text-3xl">Technologies Used</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6 text-2xl">Task Timer</td>
              <td className="py-3 px-6 text-2xl">React, NextJS, TailWindCSS</td> 
            </tr>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6 text-2xl">This Website</td>
              <td className="py-3 px-6 text-2xl">React, TailWindCSS</td>
            </tr>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6 text-2xl">Sorting Algorithm Visualizer</td>
              <td className="py-3 px-6 text-2xl">Python</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
const Projects = () => {
  return (
    <div id="projects" className="pt-28 h-screen w-full bg-stone-200 flex flex-row">
      <div className="basis-1/3 flex justify-center items-center">
        <h1 className="text-6xl text-center">
            Projects
        </h1>       
      </div>
      <div className="basis-2/3 flex justify-center items-center">
        <table className="table-auto text-left">
          <thead className="uppercase bg-stone-400">
            <tr>
              <th className="py-3 px-6">Project Name</th>
              <th className="py-3 px-6">Technologies Used</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6">Task Tracker System</td>
              <td className="py-3 px-6">React, NextJS, TailWindCSS</td> 
            </tr>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6">This Website</td>
              <td className="py-3 px-6">React, TailWindCSS</td>
            </tr>
            <tr className="border-b border-stone-400">
              <td className="py-3 px-6">Sorting Algorithm Visualizer</td>
              <td className="py-3 px-6">Python</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
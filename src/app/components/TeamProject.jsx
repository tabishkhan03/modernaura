import Image from 'next/image'

const projects = [
  {
    name: 'Alper Kamu',
    image: '/about/team-project/1.jpg',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
  },
  {
    name: 'Holden Caulfield',
    image: '/about/team-project/2.jpg',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
  },
  {
    name: 'Atticus Finch',
    image: '/about/team-project/3.jpg',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
  },
  {
    name: 'Henry Letham',
    image: '/about/team-project/4.jpg',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'
  }
]

export default function TeamProject() {
  return (
    <div className="custom-container text-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Team <span className="font-color-two">Projects.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-400 text-center">{project.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}
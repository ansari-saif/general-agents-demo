import { Paintbrush, Code, Video, CuboidIcon as Cube } from "lucide-react"

const domains = [
  {
    title: "Design Tools",
    icon: Paintbrush,
    tools: ["Figma", "Adobe Suite", "Sketch", "InVision"],
  },
  {
    title: "Development",
    icon: Code,
    tools: ["GitHub", "AWS", "Docker", "Unity"],
  },
  {
    title: "Video Editing",
    icon: Video,
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
  },
  {
    title: "3D Modeling",
    icon: Cube,
    tools: ["Blender", "Maya", "ZBrush", "3DS Max"],
  },
]

export default function SupportedDomains() {
  return (
    <section id="supported-domains" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Domains Supported by General Agents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <domain.icon className="w-12 h-12 mb-4 mx-auto text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">{domain.title}</h3>
              <ul>
                {domain.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="mb-2">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


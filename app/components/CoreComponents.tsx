import { Camera, Users, Briefcase, Users2 } from "lucide-react"

const components = [
  {
    title: "Recording System",
    icon: Camera,
    features: [
      "Screen capture interface",
      "20-60 second limit",
      "Basic editing tools",
      "Quality validation",
      "Upload management",
      "Version control tracking",
    ],
  },
  {
    title: "Expert Management",
    icon: Users,
    features: [
      "Profile vetting",
      "Domain validation",
      "Performance metrics",
      "Earnings tracking",
      "Payroll",
      "Scalable lead structure",
    ],
  },
  {
    title: "Tasks / Challenges",
    icon: Briefcase,
    features: [
      "Domain categorization",
      "Bounty system",
      "Assignment matching",
      "Review process",
      "Quality score comparisons",
    ],
  },
  {
    title: "Community Platform",
    icon: Users2,
    features: [
      "Knowledge sharing",
      "Team collaborative projects",
      "Resource library",
      "Fractional ownership of Human Created Data pools",
    ],
  },
]

export default function CoreComponents() {
  return (
    <section id="core-components" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Core Components of General Agents</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <component.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">{component.title}</h3>
              <ul className="list-disc list-inside">
                {component.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">
                    {feature}
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


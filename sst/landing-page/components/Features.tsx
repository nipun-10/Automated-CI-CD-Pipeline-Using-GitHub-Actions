import { EyeOff, Zap, Shield, Code2 } from "lucide-react";

const features = [
  {
    name: "Invisible Overlay",
    description:
      "Our unique overlay technology ensures the assistant is visible only to you, not on screen shares.",
    icon: EyeOff,
  },
  {
    name: "Real-time Suggestions",
    description:
      "Get instant code solutions and algorithmic improvements as you type.",
    icon: Zap,
  },
  {
    name: "Secure & Private",
    description:
      "Your data stays on your device. No logs, no history, complete privacy.",
    icon: Shield,
  },
  {
    name: "Multi-Language Support",
    description:
      "Support for Python, Java, C++, JavaScript, and 20+ other programming languages.",
    icon: Code2,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-400">
            Faster. Smarter. Stealthier.
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to ace the interview
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Dhappa AI provides a suite of tools designed to give you the edge
            without raising any flags.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                    <feature.icon
                      className="h-6 w-6 text-purple-400"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-zinc-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

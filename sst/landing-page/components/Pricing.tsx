import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    price: "₹200",
    description: "Perfect for a single interview.",
    features: ["24-hour access", "Basic code suggestions", "Community support"],
  },
  {
    name: "Standard",
    id: "tier-standard",
    href: "#",
    price: "₹499",
    description: "Best for active job seekers.",
    features: [
      "1-month access",
      "Advanced algorithms",
      "Priority support",
      "Mock interview mode",
    ],
    mostPopular: true,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "#",
    price: "₹999",
    description: "Lifetime access for career growth.",
    features: [
      "Lifetime access",
      "All future updates",
      "1-on-1 coaching session",
      "Resume review",
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Invest in your career
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-400">
          Choose the plan that fits your interview schedule. Simple, transparent
          pricing in INR.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-purple-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-purple-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-purple-400">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-zinc-400">
                  /one-time
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-purple-500 text-white shadow-sm hover:bg-purple-400 focus-visible:outline-purple-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-zinc-300"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-purple-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

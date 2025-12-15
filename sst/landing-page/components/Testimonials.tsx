const testimonials = [
  {
    body: "I landed my dream job at a FAANG company thanks to Dhappa AI. The interviewer had no clue!",
    author: {
      name: "Alex Chen",
      handle: "Software Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The invisible overlay is a game changer. It feels like having a senior dev whispering in your ear.",
    author: {
      name: "Sarah Miller",
      handle: "Frontend Dev",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Worth every penny. The ROI on this tool is insane considering the salary bump I got.",
    author: {
      name: "James Wilson",
      handle: "Full Stack Dev",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-purple-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our users are saying
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="rounded-2xl bg-zinc-900/50 p-8 ring-1 ring-white/10"
              >
                <blockquote className="text-zinc-300">
                  <p>"{testimonial.body}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-zinc-800"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-zinc-500">
                      {testimonial.author.handle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

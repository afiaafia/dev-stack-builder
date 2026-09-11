function InfoSections() {
  return (
    <>
      <section id="projects" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
              Projects
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Build With The Right Stack
            </h2>

            <p className="mt-4 text-gray-600">
              Choose technologies based on your project needs and create a
              development stack that fits your workflow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-xl">
                ⚡
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Fast Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Select modern tools that help you build and iterate on projects
                efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-xl">
                🧩
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Flexible Stack
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Combine frontend, backend, database, and development tools based
                on your project requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-xl">
                🚀
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Project Ready
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Build a technology stack that gives your next project a clear
                and practical foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-pink-600">
              About Dev Stack
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              A Simple Way To Build Your Developer Stack
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-gray-600">
              Dev Stack helps developers explore popular technologies and
              organize the tools they want to use in their projects. From
              frontend frameworks to backend tools and databases, everything can
              be explored from one place.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Add your preferred technologies to your stack, remove them when
              needed, and create a personalized collection for your development
              workflow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoSections;

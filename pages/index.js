import ExperienceProjectCard from "../components/ExperienceProjectCard";
import { ExperienceProjects } from "../_data/_projects";

Home.title = "Mike's Personal Website";

export default function Home({ data }) {
  return (
    <div>
      <main className="flex flex-col items-center justify-center w-full h-screen">
        <section>
          <div className="text-center">
            <h1 className="font-bold text-7xl md:text-9xl font-worksans text-neutral-900">H E L L O ;</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-widest md:text-5xl font-worksans text-neutral-900">
              MY NAME IS MIKE
            </h2>
          </div>
          <div className="max-w-2xl text-center ">
            <p className="mt-4 font-semibold leading-8 tracking-normal md:text-xl text-neutral-800">
              Welcome to my personal portfolio website short intro — I&apos;m a undergraduate software engineer from
              Binus University. I like discovering and learning about new technologies and business issues.😄
            </p>
          </div>
        </section>

        {/* <section className="w-full max-w-screen-md p-8 mt-8">
          <h2 className="text-4xl font-semibold font-opensans">Experience ✨</h2>

          {data?.map((data, index) => (
            <ExperienceProjectCard key={index} {...data} />
          ))}
        </section> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  let reverseData = ExperienceProjects.map((data) => data).reverse();

  return {
    props: {
      data: reverseData,
    },
    revalidate: 3600,
  };
}

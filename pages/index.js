import ExperienceProjectCard from "../components/ExperienceProjectCard";
import { ExperienceProjects } from "../_data/_projects";

Home.title = "Mike's Personal Website";

export default function Home({ data }) {
  return (
    <div>
      <main className="flex flex-col items-center w-full">
        <section>
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-5xl font-bold font-opensans text-neutral-900">Hi there! My name is Mike</h1>

            <p className="pt-4 font-semibold leading-8 tracking-normal text-neutral-800">
              Welcome to my personal website short intro — I&apos;m a undergraduate software engineer from Binus
              University. I like discovering and learning about new technologies and business issues.😄
            </p>
          </div>
        </section>

        <section className="w-full max-w-screen-md p-8 mt-8">
          <h2 className="text-4xl font-semibold font-opensans">Experience ✨</h2>

          {data?.map((data, index) => (
            <ExperienceProjectCard key={index} {...data} />
          ))}
        </section>
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
  };
}

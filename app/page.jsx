import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex items-center flex-col gap-3">
      <h1 className="text-4xl font-bold flex flex-col gap-2 text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-orange-400 text-center">AI Powered Prompts</span>
      </h1>
      <p className="font-thin text-center">
        Promptopia is an Open Source AI Prompting tool for modern world the
        discover , create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;

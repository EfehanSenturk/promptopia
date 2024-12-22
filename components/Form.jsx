import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col p-10 gap-4">
      <h1 className="font-bold text-left text-4xl">
        <span className="text-blue-400">{type} Post</span>
      </h1>
      <p className="text-left max-w-md">
        {type} and share amazing prompst with the world , and let your
        imagination run wild with any AI Powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-xl flex flex-col gap-7 "
      >
        {" "}
        <label className="flex flex-col gap-4">
          <span className="font-satoshi, font-semibold text-base text-gray-700 ">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="max-w-md h-48 bg-slate-100"
          ></textarea>
        </label>
        <label className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span className="font-satoshi, font-semibold text-base text-gray-700 ">
              Tag
            </span>
            <span>(#product, #webdevelopment, #mobile)</span>
          </div>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#Tag  "
            required
            className="max-w-md h-14 bg-slate-100"
          />
        </label>
        <div className="flex justify-center mx-3 mb-5 gap-4">
          <Link href="/" className="px-5 py-1.5 bg-slate-200 rounded-xl ">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-orange-500 text-white rounded-xl"
          >
            {" "}
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

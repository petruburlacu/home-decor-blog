
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg: space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Iustina's Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">every home enthusiasts </span>
                {" "}
                favorite blog in the world!
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New blog posts | The latest in home decor | The weekly uncluttering nightmares & more!
        </p>
    </div>
  )
}

export default Banner
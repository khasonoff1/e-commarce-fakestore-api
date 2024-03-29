import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded"
                        width={720}
                        height={600}
                        alt="hero"
                        src="https://fakestoreapi.com/icons/intro.svg"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Knausgaard typewriter readymade marfa
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
                        typewriter affogato, hella selvage wolf narwhal dreamcatcher.
                    </p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
                                Placeholder
                            </label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

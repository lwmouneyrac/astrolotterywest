

function BlogCardRectangle({
    title,
    text,
    imageUrl,
    link,
    category,
    buttonText = "Read more"
}) {
    return (<div
        class="bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,.3)] overflow-hidden h-full"
    >
        <div class="flex flex-col md:flex-row h-full">
            <div class="w-0 h-0 lg:h-full lg:w-1/2">
                <img
                    src={imageUrl}
                    alt={title}
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="w-full h-full lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                    {
                        category && (
                            <small class="text-s uppercase tracking-wider text-gray-500 mb-1 block">
                                {category}
                            </small>
                        )
                    }
                    <h3 class="text-[35px] text-gray-800 font-bold mb-2">
                        {title}
                    </h3>
                    {text && <p class="text-gray-600 text-s mb-4">{text}</p>}
                </div>
                <a
                    href={link}
                    class="inline-flex items-center justify-center transition duration-500 border border-primary rounded bg-white cursor-pointer min-w-[100px] min-h-[33px] text-center no-underline leading-tight font-default font-bold text-primary text-s hover:bg-primary hover:text-white w-fit px-4 py-1.5"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    </div>);
}

export default BlogCardRectangle;
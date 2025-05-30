
export default function BlogCardSquare({
    title,
    text,
    imageUrl,
    link,
    secondLink,
    category,
    buttonText = "Read more",
    secondButtonText,
    buttonStyle,
    bgStyle,
}) {

    let buttonClass = "bg-[rgba(0,0,0,0)] border-primary text-primary hover:bg-primary hover:text-white";
    if (buttonStyle === "dark") {
        buttonClass = "bg-[rgba(0,0,0,0.5)] border-white text-white hover:bg-white hover:text-primary";
    }

    return (
        <><div class="h-full w-full">
            <div
                class="relative bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,.3)] overflow-hidden h-full w-full"
                style={`background-image: url(${imageUrl}); background-size: cover; background-position: center;`}
            >
                <div
                    class={`absolute inset-0 bg-gradient-to-t ${bgStyle === "clear" ? "from-white/80 to-white/80" : ""}`}
                >
                </div>
                <div class="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                        {
                            category && (
                                <small class="text-xs uppercase tracking-wider text-white mb-1 block">
                                    {category}
                                </small>
                            )
                        }
                        <h3 class={`text-[33px] font-bold mb-2 ${bgStyle === "clear" ? "text-gray-800" : "text-white"}`}>{title}</h3>
                        {text && <p class={`text-gray-200 text-s mb-4 ${bgStyle === "clear" ? "text-gray-600" : "text-white"}`}>{text}</p>}
                    </div>
                    <div class="flex flex-row gap-2">
                        <div>
                            <a
                                href={link}
                                class={`inline-flex items-center justify-center transition duration-500 border  rounded  cursor-pointer min-w-[100px] min-h-[33px] text-center no-underline leading-tight font-default font-bold  text-s  w-fit px-4 py-1.5 ${buttonClass}`}
                            >
                                {buttonText}
                            </a>
                        </div>
                        <div>
                            {
                                secondLink && (
                                    <a
                                        href={secondLink}
                                        class={`inline-flex items-center justify-center transition duration-500 border  rounded  cursor-pointer min-w-[100px] min-h-[33px] text-center no-underline leading-tight font-default font-bold text-s w-fit px-4 py-1.5 ${buttonClass}`}
                                    >
                                        {secondButtonText}
                                    </a>
                                )
                            }
                        </div >
                    </div >
                </div >
            </div >
        </div ></>);
}

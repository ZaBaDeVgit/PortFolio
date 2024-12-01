import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20 relative">
                {dataAboutPage.map((data, index) => (
                    <div
                        key={data.id}
                        className="flex items-start relative pl-16 sm:pl-20 mb-12"
                    >
                        {/* Línea de tiempo */}
                        <div className="absolute left-6 top-0 flex flex-col items-center">
                            {/* Línea azul visible */}
                            {index !== dataAboutPage.length - 1 && (
                                <div className="h-full w-2 bg-white-100"></div>
                            )}
                            {/* Punto rojo */}
                            <div className="w-4 h-4 bg-red-600 border-4 border-white rounded-full z-10"></div>
                        </div>

                        {/* Contenido principal */}
                        <div className="ml-8 flex-1">
                            <time className="block px-4 py-1 mb-4 text-xs font-semibold uppercase w-fit text-emerald-900 bg-emerald-100 rounded-md">
                                {data.date}
                            </time>
                            <h3 className="mb-2 text-2xl font-bold">{data.title}</h3>
                            <div className="text-xl font-semibold text-red-900 mb-4">
                                {data.subtitle}
                            </div>
                            <p className="text-slate-100 max-w-md">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;

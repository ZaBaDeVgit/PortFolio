import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterSkills from "@/components/counter-skills";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return (
        <div>
            <>
                <TransitionPage />
                <ContainerPage>
                    <Avatar />
                    <h1 className="text-2xl leading-tight text-center md:text-left md_text-5xl md:scroll-mt-10 ">Toda mi{' '}
                        <span className="font-bold text-secondary">trayectoria</span>
                    </h1>



                    <CounterSkills />

                    <TimeLine/>
                </ContainerPage>

            </>

        </div>



    );
}

export default PageAboutMe;
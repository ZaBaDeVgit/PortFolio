"use client";
import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="fixed bottom-0 left-0 z-30">
            <Image 
                src="/avatar-works.png" 
                width={120} 
                height={100} 
                className="w-full h-full" 
                alt="Avatar portfolio" 
            />
        </MotionTransition>
    );
}

export default AvatarPortfolio;

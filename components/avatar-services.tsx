import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={400}
        height={300}
        className="w-[180px] h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default AvatarServices;

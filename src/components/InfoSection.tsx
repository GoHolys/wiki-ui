interface InfoSectionProps {
  text: string;
}

const InfoSection = ({ text }: InfoSectionProps) => {
  return (
    <div className="w-full md:w-[40%] bg-gradient-to-b from-[#7e57c2] to-[#4fc3f7] flex items-center justify-center p-8 md:p-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center whitespace-pre-line">
        {text}
      </h1>
    </div>
  );
};

export default InfoSection;

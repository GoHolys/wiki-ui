interface StartOverButtonProps {
  onClick: () => void;
}

const StartOverButton = ({ onClick }: StartOverButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-[#7D6DF6] text-white px-6 py-2 rounded"
    >
      Start over
    </button>
  );
};

export default StartOverButton;

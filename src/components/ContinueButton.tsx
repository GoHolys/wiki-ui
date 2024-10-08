interface ContinueButtonProps {
  onClick: () => void;
}

const ContinueButton = ({ onClick }: ContinueButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-[#7D6DF6] text-white px-4 py-2 rounded"
    >
      Continue &gt;
    </button>
  );
};

export default ContinueButton;

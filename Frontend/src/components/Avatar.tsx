const Avatar = ({ name, size = "8" }: { name: string; size: string }) => {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center size-${size} size-12 overflow-hidden bg-gray-600 rounded-full`}
      >
        <span className="font-extralight text-sm text-white">{name[0]}</span>
      </div>
    </>
  );
};

export default Avatar;

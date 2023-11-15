export default function Card({ children }) {
  return (
    <div className="bg-[#FFF9EB] border-2 border-black border-t-[64px] box-border p-20 flex flex-1 -mt-8 justify-center">
      {children}
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="bg-[#111111] text-white min-h-screen px-6 py-10 pt-16 font-sans">
      <div className="fixed top-0 left-0 w-full backdrop-blur bg-[#111111]/70 border-b border-[#111111] z-50 px-6 py-3">
        <div className="max-w-3xl mx-auto text-sm text-white font-medium">
          Mantas Baužys · Design
        </div>
      </div>
      {children}
    </div>
  );
} 
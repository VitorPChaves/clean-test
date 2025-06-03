export function Footer() {
  return (
    <footer className="min-h-[200px] bg-[#010066] mt-20 border-t px-6 py-6 text-center text-sm text-[#FFFFFF]">
      <div className="mb-[10px] border-[1px] border-[#FFFFFF90] w-full"></div>{" "}
      <p className="text-[#FFFFFF90]">
        © {new Date().getFullYear()} Shiny Touch. All rights reserved.
      </p>
    </footer>
  );
}

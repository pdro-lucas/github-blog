import Logo from "@/assets/logo.png";

export function Header() {
  return (
    <div className="h-72 bg-[url('/src/assets/cover.png')] bg-no-repeat bg-cover flex justify-center items-center">
      <img src={Logo} alt="Logo" className="w-32" />
    </div>
  );
}

import useMobileMenuStore from "~/store/menu";

export default function MobileShadow() {
  const { isOpen, close } = useMobileMenuStore();
  return isOpen ? (
    <button
      onClick={close}
      className="fixed inset-0 z-50 bg-gray-300 opacity-50 border-none p-0 m-0 w-full h-full"
      aria-label="Close mobile menu"
      tabIndex={0}
    />
  ) : null;
}

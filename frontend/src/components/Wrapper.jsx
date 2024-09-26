export default function Wrapper({ children }) {
  return <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-500">
  {children}
  </div>;
}

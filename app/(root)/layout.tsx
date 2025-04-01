import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return <div className="bg-black">{children}</div>;
};

export default layout;

import Nav from "@/components/Nav";
import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center gap-2">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

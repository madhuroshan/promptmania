import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <div className="app">
            <Navbar />
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
};

export default layout;

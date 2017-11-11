import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

export const MainLayout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export const withLayout = Page => props => (
  <div style={layoutStyle}>
    <Header />
    <Page {...props} />
  </div>
);

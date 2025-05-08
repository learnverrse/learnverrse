function App() {
  return (
    <>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>📄 HTML Page Preview</h1>
        <p>
          To preview your HTML file, drop it in the <code>public</code> folder
          and update the file name below.
        </p>

        {/* Replace 'home.html' with your actual HTML file name */}
        <iframe
          src="/homepage.html"
          title="Preview"
          style={{
            width: "100%",
            height: "80vh",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}></iframe>
      </div>
    </>
  );
}

export default App;

const heading = React.createElement
    ("h1", { id: "parent" },
        React.createElement("h1", { id: "child" },
            [React.createElement("h1", {}, "Hi i'm H1 tag"), React.createElement("h2", {}, "Hi i'm H2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const username = "JohnDoe";
function App() {
  return (
    <div>
      <Sidebar />
      <Header />

      <h1>Mosaic</h1>
      <p>Connect. Grow. Share.</p>
    </div>
  );
}
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mosaic</h2>
      <button>Create</button>

      <nav>
        <p>Home</p>
        <p>Discover</p>
        <p>Inspiration Boards</p>
        <p>Communities</p>
        <p>Projects</p>
        <p>Skill Exchange</p>
      </nav>
    </aside>
  );
}
function Header() {
  return (
    <header>
      <input type="text" placeholder="Search..."></input>

      <button>School Hub</button>
      <button>Notifications</button>
      <button>Messages</button>

      <div>
        <p>({username})</p>
      </div>

    </header>
  );
}
export default App;

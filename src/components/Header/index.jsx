
function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Tommy Merniez</h1>
      {/* <img src={coverImage} alt="wooden background"></img> */}
      {props.children}
    </header>
  );
}

export default Header;

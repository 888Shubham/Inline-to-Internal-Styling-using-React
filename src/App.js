import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={style.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={style.Signup}>Sign Up</h3>
        <input style={{ padding: 10 }} placeholder="Username" />
        <input style={{ padding: 10 }} placeholder="Email" />
        <input style={{ padding: 10 }} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={style.divButton}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={style.button}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={style.button}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}


const style ={
  form:{
      width: "60%",
      margin: "50px auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
  },
  Signup:{
    fontSize: "2rem", 
    letterSpacing: 2 
  },
  divButton: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },

}
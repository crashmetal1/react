import React from "react";

class ClaseOne extends React.Component {
  constructor(props) {
    super(props);

    this.handlerClick = this.handlerClick.bind(this);
    console.log("component aun no se ha montado");
  }
  componentDidMount() {
    console.log("componentDidMount - component disponible en el Dom");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate: ");
  }
  componentDidUpdate(next_props) {
    console.log("componentDidUpdate: ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  handlerClick = e => {
    let texto = document.getElementById("texto");
    texto.value = "Y que pasaaa OE!";
    console.log("texto: ", texto);
  };
  render() {
    return (
      <div className="content">
        <input className="form-control" type="text" id="texto"></input>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={e => this.handlerClick(e)}
        >
          Presioname aquí
        </button>
      </div>
    );
  }
}

export default ClaseOne;

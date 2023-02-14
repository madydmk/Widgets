import React from "react";
import "./styles.css";
//import "./adress.js";
import "./requests.js";
import { render } from "react-dom";
import { geo, hotels, meteo } from "./requests.js";

const Widget = (name) => <div className="widget">name</div>;
var Selected = 0;
const selectedVal = "";
/*const Select = () => (
  <select onChange={renderWidget}>
    <option></option>
    <option>Salles de jeux</option>
    <option>Metéo</option>
    <option>Cinémas</option>
  </select>
);*/
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      components: []
    };
  }

  renderWidget() {
    console.log("I was clicked");
    this.hideSelect();
    Selected = document.getElementsByTagName("select")[0].selectedIndex;

    if (Selected === 1) {
      console.log("non");
      var data = meteo("Paris");
      if (data) {
        Widget.name = data.current.feelslike_c;
      }
    } else if (Selected === 2) {
      this.text = geo("b");
      console.log(Widget);
    } else if (Selected === 3) Widget(hotels());
    console.log(Widget);
    const newComponents = [...this.state.components, Widget];

    this.setState({
      components: newComponents
    });
  }
  showWidgets() {
    document.getElementById("componentDiv").style.display = "";
    document.getElementsByClassName("adress")[0].style.display = "none";
  }
  showSelect() {
    //Select.style.display = "";
  }
  hideSelect() {
    // Select.style.display = "none";
    console.log("hide");
  }
  render() {
    const { components, text } = this.state;

    return (
      <div>
        <section className="hero is-dark">
          <div className="container">
            <h1 className="title">Dashboard</h1>
          </div>
        </section>
        <section className="section">
          <div className="adress">
            Adresse <input type="text" className="adress" />
            CP <input type="text" className="adress" />
            Pays <input type="text" className="adress" />
            {/* <input type="submit" value="Valider" /> */}
          </div>
          <div>
            <div id="componentDiv1">
              {components.length !== 0 &&
                components.map((Widget, i) => <Widget key={i} text={text} />)}
            </div>
            <div id="clickMe" onClick={this.showSelect.bind(this)}>
              Ajoutez un widget
              {
                <select onChange={this.renderWidget.bind(this)}>
                  <option></option>
                  <option>Salles de jeux</option>
                  <option>Metéo</option>
                  <option>Cinémas</option>
                </select>
              }
              {/* <Select onChange={this.renderWidget.bind(this)} /> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
//render(<App />, document.getElementById("widget"));

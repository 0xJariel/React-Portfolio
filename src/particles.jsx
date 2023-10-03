import Particles from "react-tsparticles";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          polygon: {
            enable: true,
            type: "inside",
            move: {
              radius: 10,
            },
            url: "path/to/svg.svg",
          },
        }}
      />
    );
  }
}

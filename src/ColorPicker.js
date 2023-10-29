import React, { Component } from 'react';
import './ColorPicker.css'; // Import your CSS file for styling (customize as needed).

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorList: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      showColorList: !prevState.showColorList,
    }));
  };

  handleColorClick = (color) => {
    this.setState({
      selectedColor: color,
      showColorList: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { showColorList, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.toggleColorList}>Pick a color</button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div className="selected-color">
            Selected Color: <span style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
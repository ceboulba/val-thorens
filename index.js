import React from 'react';
import {
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

class Background extends React.Component {
  constructor(props) {
    super();
    Environment.setBackgroundImage(props.uri, {format: props.format});
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.uri !== this.props.uri ||
      nextProps.format !== this.props.format
    ) {
      Environment.setBackgroundImage(nextProps.uri, {format: nextProps.format});
    }
  }

  render() {
    return null;
  }
}

class Slideshow extends React.Component {
  state = {
    index: 0,
  };

  _prevPhoto = () => {
    let next = this.state.index - 1;
    if (next < 0) {
      next += this.props.photos.length;
    }
    this.setState({
      index: next,
    });
  };

  _nextPhoto = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    const current = this.props.photos[
      this.state.index % this.props.photos.length
    ];
    return (
      <View style={styles.wrapper}>
        <Background uri={current.uri} format={current.format} />
        <View style={styles.controls}>
          <VrButton onClick={this._prevPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </VrButton>
          <View>
            <Text style={styles.title}>{current.title}</Text>
          </View>
          <VrButton onClick={this._nextPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 600,
    width: 500,
    paddingBottom: 10,
  },
  controls: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    padding: 10,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'normal',
  },
  button: {
    backgroundColor: '#777',
    width: 30,
    height: 30,
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('SlideshowSample', () => Slideshow);
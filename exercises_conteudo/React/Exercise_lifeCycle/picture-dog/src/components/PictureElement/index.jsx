import React, { Component } from 'react';

class PictureElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      isLoaded: false,
      error: null,
      name: "",
    };
    
  }

  componentDidMount() {
    if (localStorage.lastUrlPicture){
    const urlLocalStore = JSON.parse(localStorage.lastUrlPicture)
    const nameSaved = JSON.parse(localStorage.name)

    return this.setState({ item: urlLocalStore , isLoaded: true , name: nameSaved})
    }
    this.loadPictures();
    
  }

  // Nao atualizar se a raçã for um terrier, pedia no exercício mas comentei por aqui
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (!nextState.item.includes('terrier'));
  // }

  loadPictures() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result.message,
            name: ""
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  attPictureSetlocalStorage() {
    this.loadPictures();
    
  }
  
  componentDidUpdate() {
    localStorage.setItem("lastUrlPicture", JSON.stringify(this.state.item))
    localStorage.setItem("name", JSON.stringify(this.state.name))
    
  }



  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
      <label>De um nome para ele:<input type="text" onChange={e => this.setState({ name: e.target.value })}></input></label>
      <br></br>
      <br></br>

      <img src={item} width={300}/>
      <p>Parece um vira-lata mas na verdade é um: {this.state.item.split("/")[4].toUpperCase()}</p>
      <p>O nome da fera é: {this.state.name}</p>
      <p>Uma bela foto de catioro você não acha??</p>
      <button onClick={() => this.attPictureSetlocalStorage()}>Não, joga outra na minha cara!</button>
      
      </>
      );
    }
  }
}

export default PictureElement;
